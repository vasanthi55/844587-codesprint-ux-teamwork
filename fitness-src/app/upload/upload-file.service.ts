import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
console.log("8...");
    formdata.append('file', file);
console.log("9...");
    const req = new HttpRequest('POST', 'http://localhost:5418/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
console.log("10...");
    return this.http.request(req); 
	//return this.http.post<any>('/post', formdata);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:5418/getallfiles');
  }
}
