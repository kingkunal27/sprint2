import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seat } from 'src/app/Entity/Seat';


const baseUrl = 'http://localhost:8080/addSeat';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  
  constructor(private http : HttpClient) { }

  getAll(): Observable<Seat[]> {
    return this.http.get<Seat[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
