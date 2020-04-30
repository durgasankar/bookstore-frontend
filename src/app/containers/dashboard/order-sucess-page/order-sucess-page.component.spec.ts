import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSucessPageComponent } from './order-sucess-page.component';

describe('OrderSucessPageComponent', () => {
  let component: OrderSucessPageComponent;
  let fixture: ComponentFixture<OrderSucessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSucessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSucessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
