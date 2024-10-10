import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCounterComponentComponent } from './click-counter-component.component';

describe('ClickCounterComponentComponent', () => {
  let component: ClickCounterComponentComponent;
  let fixture: ComponentFixture<ClickCounterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickCounterComponentComponent]
    });
    fixture = TestBed.createComponent(ClickCounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
