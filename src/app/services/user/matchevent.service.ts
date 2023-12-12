import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchEvent } from 'src/app/Entity/MatchEvent';

//const baseUrl = 'http://localhost:8080/addEvent';
const baseUrl = 'http://localhost:8080/getAllEvent';
@Injectable({
  providedIn: 'root'
})
export class MatcheventService {

  
  constructor(private http : HttpClient) { }

  getAllEvent(): Observable<MatchEvent[]> {
    return this.http.get<MatchEvent[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}



  