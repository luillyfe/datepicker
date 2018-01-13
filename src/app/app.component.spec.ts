import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {DatepickerService} from './datepicker/datepicker.service';
import createSpyObj = jasmine.createSpyObj;

describe('AppComponent', () => {
    beforeEach(async(() => {
        const DatepickerServiceSpy = createSpyObj('DatepickerService', ['getDays', 'getMonths', 'getYears']);
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                DatepickerComponent
            ]
        })
          .overrideComponent(AppComponent, {
              set: {
                  providers: [
                      { provide: DatepickerService, useValue: DatepickerServiceSpy }
                  ]
              }
          })
          .compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
