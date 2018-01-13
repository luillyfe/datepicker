import { TestBed, inject } from '@angular/core/testing';

import { DatepickerService } from './datepicker.service';

describe('Service: DatepickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatepickerService]
    });
  });

  it('should be created', inject([DatepickerService], (service: DatepickerService) => {
    expect(service).toBeTruthy();
  }));


  it('When getDays get call, parameters(Date(2018/01/01), 01)', inject([DatepickerService], (service: DatepickerService) => {
      expect(service.getDays(new Date(2018, 1, 1), 1)[0].length).toEqual(7);
      expect(service.getDays(new Date(2018, 1, 1), 1).length).toEqual(5);
  }));

  it('When getMonths get call, parameters(Date(2018))', inject([DatepickerService], (service: DatepickerService) => {
      expect(service.getMonths(2018).length).toEqual(12);
  }));

  it('When getMonths get call, parameters(Date(2018))', inject([DatepickerService], (service: DatepickerService) => {
    expect(service.getYears()[0].getFullYear()).toEqual(1970);
  }));

});
