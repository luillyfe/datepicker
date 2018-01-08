import { Injectable } from '@angular/core';

@Injectable()
export class DatepickerService {

    getDays(date: Date, month: number): Date[][] {
        const days: Date[][] = [[], [], [], [], []];
        let week = 0;
        while (date.getMonth() === month) {
            for (let i = 0; i < 7; i++) {
                days[week].push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            week++;
        }
        return days;
    }

    getMonths(year: number) {
        const months = [];
        for (let month = 0; month < 12; month++) {
            months.push(new Date(year, month, 1));
        }
        return months;
    }

    getYears() {
        const years = [], currentYear = new Date().getFullYear();
        for (let year = 1970; year <= currentYear; year++) {
            years.push(new Date(year, 0, 1));
        }
        return years;
    }

}
