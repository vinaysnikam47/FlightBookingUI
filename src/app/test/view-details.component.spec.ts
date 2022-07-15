import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsComponent } from '../view-details/view-details.component';
import { HttpClientModule } from '@angular/common/http';

describe('ViewDetailsComponent', () => {
  let component: ViewDetailsComponent;
  let fixture: ComponentFixture<ViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailsComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
