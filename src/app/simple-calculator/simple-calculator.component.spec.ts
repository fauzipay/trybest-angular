import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCalculatorComponent } from './simple-calculator.component';

describe('SimpleCalculatorComponent', () => {
  let component: SimpleCalculatorComponent;
  let fixture: ComponentFixture<SimpleCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleCalculatorComponent]
    });
    fixture = TestBed.createComponent(SimpleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
