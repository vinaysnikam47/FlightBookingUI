import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlightsComponent } from '../view-flights/view-flights.component';
import { ViewDetailsService } from '../view-details/view-details.service';
import { MockViewDetailsService } from '../mock-services/mock-view-details.service';

describe('ViewFlightsComponent', () => {
  let component: ViewFlightsComponent;
  let fixture: ComponentFixture<ViewFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFlightsComponent ],
      providers: [{provide:ViewDetailsService, useClass:MockViewDetailsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all the flights', () => {
    expect(component.flightDetails.length).toEqual(1);
    expect(component.flightDetails[0].fare).toEqual(600);
  });
});
