import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMetricsComponent } from './simple-metrics.component';

describe('SimpleMetricsComponent', () => {
  let component: SimpleMetricsComponent;
  let fixture: ComponentFixture<SimpleMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
