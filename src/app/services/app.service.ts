import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // url = 'http://localhost:3306/api/user';
  // data = '';
  constructor(private http: HttpClient) {}

createContact() {
  return this.http.post('http://localhost:3306/api/user', '');
}
callingFormTemplate() {
  console.log('Вызвался метод');
}
}
