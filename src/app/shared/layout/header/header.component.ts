import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutActions } from '../actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {
  }
  searchFieldChange(search:string){
    this.store.dispatch(LayoutActions.typeInTheSearch({searchValue:search}))
  }
}
