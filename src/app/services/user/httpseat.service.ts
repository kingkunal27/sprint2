import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seat } from 'src/app/Entity/Seat';

const baseUrl = 'http://localhost:8080/getAllSeat';


@Injectable({
  providedIn: 'root'
})
export class HttpseatService {
 

  constructor(private httpObj : HttpClient) { }

  getAllSeats() : Observable<Seat[]> {
    
    return this.httpObj.get<Seat[]>(baseUrl);
  }

 

}