import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { ShowBookingsComponent } from './show-bookings/show-bookings.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
    {path:'bookMovie',component:BookingsComponent },
    {path:'home',component:HomeComponent },
  {path:'bookings',component:ShowBookingsComponent},
  {path: '**' , component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
