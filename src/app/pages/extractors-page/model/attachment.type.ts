import { Subject, Subscription } from 'rxjs';

export type FileAttachmentType = {
  type: 'file';
  progress: number;
  id?: string;
  file: File;
  subscription?: Subscription;
};

export type AttachmentType = {
  title: string;
  subtitle?: string;
} & FileAttachmentType;
export interface SaveMediaUploadedFileInterface {
  file: File;
  mediaModel: AttachmentType;
}
