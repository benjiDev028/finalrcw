import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CriminelsService {

  constructor( private http : HttpClient) { }

baseUrl = "http://127.0.0.1:5000/"

  create(formData:any) : Observable<any>{
    return this.http.post(`${this.baseUrl}addcriminel`,formData);
  }
  getAll() : Observable<any>
  {
      return this.http.get(`${this.baseUrl}criminels`)
  }
  getById(criminelId: number): Observable<any> {
    const url = `${this.baseUrl}getcriminel/${criminelId}`;
    return this.http.get(url);
  }
  delCriminel(criminelId : number) : Observable<any>{
    const url = `${this.baseUrl}supcriminel/${criminelId}`;
    return this.http.delete(url);
  }

  updateCriminel(criminelId: number, criminelData: any): Observable<any> {
    const url = `${this.baseUrl}updatecriminel/${criminelId}`;
    return this.http.put(url, criminelData);
  }
}
