import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderChartComponentComponent } from './trader-chart-component.component';

describe('TraderChartComponentComponent', () => {
  let component: TraderChartComponentComponent;
  let fixture: ComponentFixture<TraderChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderChartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
