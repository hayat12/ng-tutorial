import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { decrement, increment, reset } from '../state/counter.action';
@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  constructor(
    // private store: Store<{ count: number }>
    ) { }

  ngOnInit(): void {}

  onIncrement(){
    // this.store.dispatch(increment())
  }

  onDecrement(){
    // this.store.dispatch(decrement())
  }

  onReset(){
    // this.store.dispatch(reset())
  }

}
