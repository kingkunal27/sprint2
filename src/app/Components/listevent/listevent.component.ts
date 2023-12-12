
import { Component, OnInit } from '@angular/core';
import { MatchEvent } from 'src/app/Entity/MatchEvent';
import { MatcheventService } from 'src/app/services/user/matchevent.service';


@Component({
  selector: 'listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit {

  matchevent : MatchEvent[] = [];
  
  constructor(public matchevntservice : MatcheventService) {}

  
  ngOnInit() {

    this.matchevntservice.getAllEvent()
    .subscribe(data => this.matchevent = data);

  }
}

  
 