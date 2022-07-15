import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingComponent } from '../update-booking/update-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateBookingComponent', () => {
  let component: UpdateBookingComponent;
  let fixture: ComponentFixture<UpdateBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookingComponent ],
      imports:[ReactiveFormsModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
