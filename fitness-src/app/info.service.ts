import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoModels } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private baseUrl = "http://localhost:3000/infoModel";

  constructor(private http : HttpClient) { }

  placeAppointment(infoModel: InfoModels):Observable<any>{
    //console.log(infoModel);
    return this.http.post(`${this.baseUrl}`, infoModel);
  }

  

  getInfo(): Observable<any> {
    console.log("inservice");
    return this.http.get(`${this.baseUrl}`);
  }

  
}
