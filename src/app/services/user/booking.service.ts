
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/Entity/Booking';

const baseUrl = 'http://localhost:8080/addSeat';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

 
  constructor(private http : HttpClient) { }

  getAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}




