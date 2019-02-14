import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Add } from '../moduel/add.model';
import { Appstate } from '../app.state';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public users: Observable<Add[]>;

  constructor(private store: Store<Appstate>) {
    this.users = this.store.select(
      state => state.add
    );
    console.log(this.users);
   }

  ngOnInit() {
  }

}
