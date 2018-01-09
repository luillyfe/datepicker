import { Component, OnInit } from '@angular/core';
import {DatepickerService} from './datepicker.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
    month: Date[][];
    year: Date[];
    years: Date[];
    birthday: Date;
    hiddenDateSelector = true;
    hiddenMonthSelector = true;
    hiddenYearSelector = true;
    hiddenDatePicker = false;

    constructor(private datepicker: DatepickerService) {}

    ngOnInit() {
        const date: Date = new Date();

        this.birthday = new Date(Date.now());
        this.month = this.datepicker.getDays(new Date(date.getFullYear(), date.getMonth(), 1), date.getMonth());
        this.year = this.datepicker.getMonths(date.getFullYear());
        this.years = this.datepicker.getYears();
    }

    datePicker(day: Date) {
        this.birthday = day;
        this.hiddenDateSelector = true;
    }

    monthPicker(month: Date) {
        this.hiddenMonthSelector = true;
        this.hiddenYearSelector = true;

        this.birthday = month;
        this.month = this.datepicker.getDays(new Date(this.birthday.getFullYear(), this.birthday.getMonth(), 1), this.birthday.getMonth());
    }

    yearPicker(year: Date) {
        this.hiddenMonthSelector = true;
        this.hiddenYearSelector = true;

        this.birthday = year;
        this.year = this.datepicker.getMonths(year.getFullYear());
        this.month = this.datepicker.getDays(new Date(this.birthday.getFullYear(), 0, 1), 0);
    }

    unableDays(day: Date) {
        const lastDay = new Date();
        return day.getMonth() !== this.birthday.getMonth() || day > lastDay;
    }

}
