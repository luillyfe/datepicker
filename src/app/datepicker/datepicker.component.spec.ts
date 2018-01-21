import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';
import {  DatepickerService } from './datepicker.service';
import {By} from '@angular/platform-browser';

describe('DatepickerComponent', () => {
    let component: DatepickerComponent;
    let fixture: ComponentFixture<DatepickerComponent>;

    beforeEach(async(() => {
        const DatepickerServiceSpy = jasmine.createSpyObj('DatepickerService',
            ['getDays', 'getMonths', 'getYears']);

        TestBed.configureTestingModule({
            declarations: [ DatepickerComponent ],
            providers: [{
                provide: DatepickerService,
                useValue: DatepickerServiceSpy
            }]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DatepickerComponent);
        component = fixture.componentInstance;
    });

    describe('When initialized the datepicker', () => {
        it('datepicker service should be called', function () {
            fixture.detectChanges();

            expect(component['datepicker'].getDays).toHaveBeenCalled();
            expect(component['datepicker'].getMonths).toHaveBeenCalled();
            expect(component['datepicker'].getYears).toHaveBeenCalled();

            expect(component.birthday).not.toBeUndefined();
        });

        it('Birthday input field is the only one that should be displayed', () => {
            fixture.detectChanges();

            expect(component.hiddenDatePicker).toBeFalsy();

            expect(component.hiddenDateSelector).toBeTruthy()
            expect(component.hiddenMonthSelector).toBeTruthy();
            expect(component.hiddenYearSelector).toBeTruthy();
        });
    });

    describe('When an user clicks on the Birthday input', () => {
        let birthdayDe;

        beforeEach(async(() => {
            birthdayDe = fixture.debugElement.query(By.css('.date-picker .form-control'));
        }));

        it('date-selector should be displayed (Birthday input is still displayed)', () => {
            birthdayDe.triggerEventHandler('click', null);

            expect(component.hiddenDatePicker).toBeFalsy();
            expect(component.hiddenDateSelector).toBeFalsy();
            expect(component.hiddenMonthSelector).toBeTruthy();
            expect(component.hiddenYearSelector).toBeTruthy();
        });

        xit('the user can select a date', async(() => {
            birthdayDe.nativeElement.click()
            fixture.detectChanges();
            let tableDe;

            fixture.whenStable().then(() => {
                tableDe = fixture.debugElement.query(By.css('.table tbody tr'));
                fixture.detectChanges();
                console.log(tableDe);
            });

            console.log(tableDe);
            expect(component.hiddenDatePicker).toBeFalsy();
        }));
    });

    describe('When a user selects the month selector', () => {
        beforeEach(() => {
            component.monthSelector();
        });

        it('month-selector must be the only one selected', () => {
            expect(component.hiddenYearSelector).toBeTruthy();
            expect(component.hiddenMonthSelector).toBeFalsy();
            expect(component.unable).toBeTruthy();
        });
    });

    describe('When a user selects the year selector', () => {
      beforeEach(() => {
        component.yearSelector();
      });

      it('year-selector must be the only one selected', () => {
        expect(component.hiddenYearSelector).toBeFalsy();
        expect(component.hiddenMonthSelector).toBeTruthy();
        expect(component.unable).toBeTruthy();
      });
    });

    describe('When a user picks a month', () => {
      let month: Date;
      beforeEach(() => {
          month = new Date('Sun Apr 01 2018 00:00:00 GMT-0500 (COT)');
          component.monthSelector();
          component.monthPicker(month);
      });

      it('year-selector must be update with the month selected', () => {
          expect(component.birthday).toEqual(month);
      });
    });
});
