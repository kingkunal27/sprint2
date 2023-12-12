import { Component, OnInit } from '@angular/core';
import { HttpuserService } from 'src/app/services/user/httpuser.service';
import { User } from 'src/app/Entity/User';


@Component({
  selector: 'listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit{

  users : User[] = [];
  
  constructor(public httpuserservice : HttpuserService) {}

  
  ngOnInit() {

    this.httpuserservice.getAllUsers()
    .subscribe(data => this.users = data);

  }

}
