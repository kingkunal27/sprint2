import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Entity/User';
import { HttpuserService } from 'src/app/services/user/httpuser.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  submitted = false;

  user : User = {
   
    user_id : '',
    username : '',
    password : '',
    email : ''
  }

  constructor(private userservice : UserService) {}

  createUser() : void {
    const data = {
      username : this.user.username,
      password : this.user.password,
      email : this.user.email
    };

    this.userservice.create(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.submitted = true;
        },  
        error: (e : any) => console.error(e)
      });
  } 
  
  reset(addUserForm : NgForm) {
    this.submitted = false;
    addUserForm.form.clearValidators();
    addUserForm.form.markAsUntouched();
    addUserForm.form.markAsPristine();

    this.user = {
      user_id : '',
      username : '',
      email : '',
      password : ''
    }
    
  }

}
