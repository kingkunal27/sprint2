import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from 'src/app/services/user/booking.service';
import { Booking } from 'src/app/Entity/Booking';

@Component({
  selector: 'addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css']
})
export class AddbookingComponent {

  submitted = false;

  booking : Booking = {
   
    booking_id : '',
    user_id : '',
    eventId : '',
    seatId : ''
    
  }

  constructor(private bookingservice : BookingService) {}

  createBooking() : void {
    const data = {
      booking_id : this.booking.booking_id,
      user_id : this.booking.user_id,
      eventId : this.booking.eventId,
      seatId : this.booking.seatId
     
    };

    this.bookingservice.create(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.submitted = true;
        },  
        error: (e : any) => console.error(e)
      });
  } 
  
  reset(addBookingForm : NgForm) {
    this.submitted = false;
    addBookingForm.form.clearValidators();
    addBookingForm.form.markAsUntouched();
    addBookingForm.form.markAsPristine();

    this.booking = {
      booking_id : '',
      user_id : '',
      eventId : '',
      seatId : ''
    }
    
  }

}


