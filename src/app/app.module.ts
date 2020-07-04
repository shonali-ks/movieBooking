import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ShowBookingsComponent } from './show-bookings/show-bookings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { InteractionService } from './interaction.service';


@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    ShowBookingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
