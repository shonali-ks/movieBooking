import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private _list=new BehaviorSubject<any>("No bookings found ");
  lists$=this._list.asObservable();
  constructor() { }
  data(lst:any)
  {
    this._list.next(lst);
  }
}
