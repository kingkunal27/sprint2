import { Component } from '@angular/core';
import { User } from 'src/app/Entity/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'finduser',
  templateUrl: './finduser.component.html',
  styleUrls: ['./finduser.component.css']
})
export class FinduserComponent {

  findBy = "";
  user_id = "";
  username = "";

  user : User = {
    user_id: '',
    username: '',
    password: '',
    email: ''
  };

  constructor(private userService : UserService) {}

  findUser() {
    if(this.findBy=='byId') {
      this.userService.findById(this.user_id)
        .subscribe((data: User) => this.user = data);
    } /* else if(this.findBy=='byName') {
      this.userService.findByName(this.username)
        .subscribe((data: User) => this.user = data);
    } */
}


  

}
