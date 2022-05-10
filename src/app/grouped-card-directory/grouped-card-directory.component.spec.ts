import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedCardDirectoryComponent } from './grouped-card-directory.component';

describe('GroupedCardDirectoryComponent', () => {
  let component: GroupedCardDirectoryComponent;
  let fixture: ComponentFixture<GroupedCardDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedCardDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedCardDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
