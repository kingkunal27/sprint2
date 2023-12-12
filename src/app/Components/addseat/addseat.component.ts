import { Component } from '@angular/core';
import { Seat } from 'src/app/Entity/Seat';
import { NgForm } from '@angular/forms';
import { SeatService } from 'src/app/services/user/seat.service';

@Component({
  selector: 'addseat',
  templateUrl: './addseat.component.html',
  styleUrls: ['./addseat.component.css']
})
export class AddseatComponent {

  submitted = false;

  seat : Seat = {
   
    seatId : '',
    seatNumber : '',
    seatCategory : '',
    price : ''
    
  }

  constructor(private seatservice : SeatService) {}

  createSeat() : void {
    const data = {
      seatNumber : this.seat.seatNumber,
      seatCategory : this.seat.seatCategory,
      price : this.seat.price
     
    };

    this.seatservice.create(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.submitted = true;
        },  
        error: (e : any) => console.error(e)
      });
  } 
  
  reset(addSeatForm : NgForm) {
    this.submitted = false;
    addSeatForm.form.clearValidators();
    addSeatForm.form.markAsUntouched();
    addSeatForm.form.markAsPristine();

    this.seat = {
      seatId : '',
      seatNumber : '',
      seatCategory : '',
      price : ''
    }
    
  }

}
