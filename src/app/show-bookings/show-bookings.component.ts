import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-show-bookings',
  templateUrl: './show-bookings.component.html',
  styleUrls: ['./show-bookings.component.css']
})
export class ShowBookingsComponent implements OnInit {
  movie: string;
  people: number;
  timings: string;
  list=[];

  result:any;
  constructor(private show:InteractionService) { }

  ngOnInit(): void {
    this.show.lists$.subscribe(lst=>{
      this.list=lst;
      console.log(lst)
    })
    
    
  }


}
