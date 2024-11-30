import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface UploadFile {
  file_name: string;
  detail: string;
}
@Injectable({
  providedIn: 'root',
})
export class SaveMediaService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const request = new HttpRequest('POST', `file/savefile/`, formData, {
      reportProgress: true,
    });

    return this.http.request<UploadFile>(request);
  }
  downloadfile(fileName: string) {
    return this.http.get(`file/downloadfile/${fileName}`, {
      responseType: 'blob',
    });
  }
}
