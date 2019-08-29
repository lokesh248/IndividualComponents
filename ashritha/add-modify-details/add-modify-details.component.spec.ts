import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifyDetailsComponent } from './add-modify-details.component';

describe('AddModifyDetailsComponent', () => {
  let component: AddModifyDetailsComponent;
  let fixture: ComponentFixture<AddModifyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModifyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModifyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
