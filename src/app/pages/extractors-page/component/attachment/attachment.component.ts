import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AttachmentType,
  SaveMediaUploadedFileInterface,
} from '../../model/attachment.type';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SaveMediaService } from 'src/app/pages/services/save-media.service';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent {
  @Output() FileUploadChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() set attachments(listFiles: Array<AttachmentType>) {
    debugger;
    this._attachments = listFiles;
    for (let i = 0; listFiles.length > 0; i++) {
      this._attachments[i].subscription = this.uploadWithProgress({
        file: listFiles[i].file,
        mediaModel: listFiles[0],
      }).subscribe(
        (event: any) => {
          if (event.type === 'progress') {
            listFiles[0].progress = event.percent;
          } else if (event.type === 'complete') {
            this.FileUploadChange.emit(event.response);
            this.saveRequestProcessing = false;
          }
        },
        (err) => {},
      );
    }
  }
  constructor(private saveMediaService: SaveMediaService) {}
  _attachments: Array<AttachmentType> = [];
  saveRequestProcessing: boolean = false;
  ngOnInit() {}
  removeAttachmentClickHandler(data: AttachmentType) {
    this._removeAttachment(data);
  }
  private _removeAttachment(attachment: AttachmentType) {
    switch (attachment.type) {
      case 'file':
        attachment.subscription?.unsubscribe();
        break;
    }

    this._attachments.splice(this._attachments.indexOf(attachment), 1);
  }
  uploadWithProgress(media: SaveMediaUploadedFileInterface): Observable<any> {
    return new Observable((observer) => {
      this.saveMediaService
        .uploadFile(media.file)
        .pipe(
          finalize(() => {
            this.saveRequestProcessing = false;
          }),
        )
        .subscribe(
          (event) => {
            if (event.type === HttpEventType.UploadProgress) {
              const percentDone = Math.round(
                (100 * event.loaded) / event.total,
              );
              observer.next({ type: 'progress', percent: percentDone });
            } else if (event instanceof HttpResponse) {
              observer.next({ type: 'complete', response: event.body });
              observer.complete();
            }
          },
          (error) => {
            observer.error(error);
          },
        );
    });
  }
}
