import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // @Input() searchValue$:string;
  searchValue = "Hello world";
  constructor() { }

  ngOnInit(): void {
    console.log("List Components");
    
  }

}
