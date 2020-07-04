import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InteractionService } from '../interaction.service';


  
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
m: string;
p: number;
tim: string;
list=[];

  constructor(private show:InteractionService) { }

  ngOnInit(): void {
  }
  cards: number=1;
  field:number=0;
  TSR:number=0;
  HP:number=0;
  AE:number=0;
  BvS:number=0;
  Aqua:number=0;
  attendies:number=0;
  button=0;
  
  booknow(){
    this.cards=0;
    this.field=1;
  }
  booked(form: NgForm)
  {
    this.m=form.value.movie;
    
    if(form.value.movie=="The Shawshank Redemption")
    {
      this.TSR=1;
      this.HP=0;
      this.AE=0;
      this.BvS=0;
      this.Aqua=0;
    }
    else if(form.value.movie=="Batman vs Superman")
    {
      this.TSR=0;
      this.HP=0;
      this.AE=0;
      this.BvS=1;
      this.Aqua=0;
    }
    else if(form.value.movie=="Avengers Endgame")
    {
      this.TSR=0;
      this.HP=0;
      this.AE=1;
      this.BvS=0;
      this.Aqua=0;
    }
    else if(form.value.movie=="Harry Potter")
    {
      this.TSR=0;
      this.HP=1;
      this.AE=0;
      this.BvS=0;
      this.Aqua=0;
    }
    else if(form.value.movie=="Aquaman")
    {
      this.TSR=0;
      this.HP=0;
      this.AE=0;
      this.BvS=0;
      this.Aqua=1;
    }
    else{
      alert("Choose a Movie!");
    }
  }
  time(t: NgForm)
  {
    if(t.value.time)
    {
      this.tim=t.value.time;
      this.attendies=1;
    }
    else{
      alert("Choose a Time!");
    }
  }
  book(number: NgForm)
  {
    if(number.value.total>0)
    {
      
      this.p=number.value.total;
      this.list.push({"movie":this.m,"timings":this.tim,"people":this.p})
      this.show.data(this.list);
      console.log(this.list);
      this.button=1;
       
      
      
      
      
    }
    else{
      alert("Number of people must be atleast 1!");
    }
  }

}
