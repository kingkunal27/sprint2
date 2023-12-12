import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './Components/listuser/listuser.component';
import { HomeComponent } from './Components/home/home.component';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { FinduserComponent } from './Components/finduser/finduser.component';
import { AddseatComponent } from './Components/addseat/addseat.component';
import { ListseatComponent } from './Components/listseat/listseat.component';
import { AddmatcheventComponent } from './Components/addmatchevent/addmatchevent.component';
import { ListeventComponent } from './Components/listevent/listevent.component';
import { AddbookingComponent } from './Components/addbooking/addbooking.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'listuser', component : ListuserComponent },
  { path : 'adduser', component : AdduserComponent},
  { path : 'finduser', component : FinduserComponent},
  { path : 'addseat', component : AddseatComponent},
  { path : 'listseat', component : ListseatComponent},
  { path : 'addmatchevent', component : AddmatcheventComponent},
  { path : 'listevent', component : ListeventComponent},
  { path : 'addbooking', component : AddbookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
