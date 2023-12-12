import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListuserComponent } from './Components/listuser/listuser.component';
import { HttpuserService } from './services/user/httpuser.service';
import { UserService } from './services/user/user.service';
import { SeatService } from './services/user/seat.service';
import { HttpseatService } from './services/user/httpseat.service';
import { MatcheventService } from './services/user/matchevent.service';
import { HomeComponent } from './Components/home/home.component';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { FinduserComponent } from './Components/finduser/finduser.component';
import { AddseatComponent } from './Components/addseat/addseat.component';
import { ListseatComponent } from './Components/listseat/listseat.component';
import { AddmatcheventComponent } from './Components/addmatchevent/addmatchevent.component';
import { ListeventComponent } from './Components/listevent/listevent.component';
import { AddbookingComponent } from './Components/addbooking/addbooking.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListuserComponent,
    HomeComponent,
    AdduserComponent,
    FinduserComponent,
    AddseatComponent,
    ListseatComponent,
    AddmatcheventComponent,
    ListeventComponent,
    AddbookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
