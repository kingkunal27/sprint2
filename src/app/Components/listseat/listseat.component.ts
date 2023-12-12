import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/app/Entity/Seat';
import { HttpseatService } from 'src/app/services/user/httpseat.service';

@Component({
  selector: 'listseat',
  templateUrl: './listseat.component.html',
  styleUrls: ['./listseat.component.css']
})
export class ListseatComponent implements OnInit {

  
  seats : Seat[] = [];
  
  constructor(public httpseatservice : HttpseatService) {}

  
  ngOnInit() {

    this.httpseatservice.getAllSeats()
    .subscribe(data => this.seats = data);

  }

}
