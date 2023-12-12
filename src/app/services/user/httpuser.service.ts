import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Entity/User';

const baseUrl = 'http://localhost:8080/getAllUser';

@Injectable({
  providedIn: 'root'
})
export class HttpuserService {

  constructor(private httpObj : HttpClient) { }

  getAllUsers() : Observable<User[]> {
    
    return this.httpObj.get<User[]>(baseUrl);
  }

 

}
