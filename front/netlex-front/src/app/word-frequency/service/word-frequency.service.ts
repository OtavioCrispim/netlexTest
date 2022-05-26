import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WordFrequencyService {

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ this.getCurrentUser()
    })
  }

  protected getCurrentUser() {
    const ret = sessionStorage.getItem('Auth');
    if (ret) {
      return ret;
    }

    return null;
  }


  wordFrequency(data: any){
    return this.http.post('http://localhost:3086/documents/word-frequency', data, this.httpOptions);
  }
}
