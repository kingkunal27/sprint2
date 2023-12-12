
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatchEvent } from 'src/app/Entity/MatchEvent';
import { MatcheventService } from 'src/app/services/user/matchevent.service';


@Component({
  selector: 'addmatchevent',
  templateUrl: './addmatchevent.component.html',
  styleUrls: ['./addmatchevent.component.css']
})
export class AddmatcheventComponent {

  
  submitted = false;

  matchevent : MatchEvent = {
   
    eventId : '',
    title : '',
    venue : '',
    teamsPlaying : '',
    ticketAvailability : ''
  }

  constructor(private matcheventservice : MatcheventService) {}

  createEvent() : void {
    const data = {
      title : this.matchevent.title,
      venue : this.matchevent.venue,
      teamsPlaying : this.matchevent.teamsPlaying,
      ticketAvailability : this.matchevent.ticketAvailability
    };

    this.matcheventservice.create(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.submitted = true;
        },  
        error: (e : any) => console.error(e)
      });
  } 
  
  reset(addEventForm : NgForm) {
    this.submitted = false;
    addEventForm.form.clearValidators();
    addEventForm.form.markAsUntouched();
    addEventForm.form.markAsPristine();

    this.matchevent = {
      eventId : '',
      title : '',
      venue : '',
      teamsPlaying : '',
      ticketAvailability : ''
    }
    
  }
}





