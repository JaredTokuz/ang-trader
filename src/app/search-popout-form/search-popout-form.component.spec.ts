import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPopoutFormComponent } from './search-popout-form.component';

describe('SearchPopoutFormComponent', () => {
  let component: SearchPopoutFormComponent;
  let fixture: ComponentFixture<SearchPopoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPopoutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPopoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
