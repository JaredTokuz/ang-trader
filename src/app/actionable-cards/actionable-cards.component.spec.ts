import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionableCardsComponent } from './actionable-cards.component';

describe('ActionableCardsComponent', () => {
  let component: ActionableCardsComponent;
  let fixture: ComponentFixture<ActionableCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionableCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionableCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
