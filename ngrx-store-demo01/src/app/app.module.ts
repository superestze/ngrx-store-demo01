import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { StoreModule } from '@ngrx/store';
import { addReducer } from './reducers/add.reducer';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({add: addReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
