import { Component, OnInit } from '@angular/core';
import {DatepickerService} from './datepicker.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
    today: Date;
    month: Date[][];
    birthday: Date;
    hiddenDateSelector = false;

    constructor(private datepicker: DatepickerService) {}

    ngOnInit() {
        const date: Date = new Date();

        this.today = new Date(Date.now());
        this.month = this.datepicker.getDays(new Date(date.getFullYear(), date.getMonth(), 1), date.getMonth());
    }

    showOff() {
        this.hiddenDateSelector = true;
    }

}
