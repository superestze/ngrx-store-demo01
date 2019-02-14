import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  add(name, number) {
    this.store.dispatch({
      type: 'ADD',
      payload: {
        name: name,
        number: number
      }
    });
  }

}
