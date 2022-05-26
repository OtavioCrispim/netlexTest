import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopWordsService {

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ this.getCurrentUser()
    })
  }

  private getCurrentUser() {
    const ret = sessionStorage.getItem('Auth');
    console.log(ret)
    if (ret) {
      return ret;
    }

    return null;
  }

  topWords(data: any){
    return this.http.post('http://localhost:3086/documents/top-words', data, this.httpOptions);
  }
}
