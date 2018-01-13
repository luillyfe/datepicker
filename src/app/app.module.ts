// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {DatepickerService} from './datepicker/datepicker.service';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
      DatepickerService
  ],
  exports: [ DatepickerComponent ],
  bootstrap: [AppComponent]
})
export class DatepickerModule { }
