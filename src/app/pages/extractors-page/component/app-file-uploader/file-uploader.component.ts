import { Component, EventEmitter, Output } from '@angular/core';
import {
  AttachmentType,
  FileAttachmentType,
  SaveMediaUploadedFileInterface,
} from '../../model/attachment.type';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
})
export class FileUploaderComponent {
  @Output() fileUploaded = new EventEmitter<AttachmentType>();

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.processFile(file);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'copy';
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.processFile(file);
    }
  }

  private processFile(file: File): void {
    const mediaModel: AttachmentType = {
      title: file.name,
      progress: 0,
      file,
      type: 'file',
    };
    this.fileUploaded.emit(mediaModel);
  }
}
