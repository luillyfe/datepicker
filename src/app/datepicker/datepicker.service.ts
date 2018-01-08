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

}
