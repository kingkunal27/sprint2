import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Entity/User';

const baseUrl = 'http://localhost:8080/getUser';
//const baseUrl = 'http://localhost:8080/addUser';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 
  constructor(private http : HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findById(user_id : any) : Observable<User> {
    return this.http.get<User>(baseUrl + `/${user_id}`);
  }

  findByName(username : any) : Observable<User> {
    return this.http.get<User>(baseUrl + `/${username}`);
  }
}
