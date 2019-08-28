import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatementsComponent } from './bank-statements.component';

describe('BankStatementsComponent', () => {
  let component: BankStatementsComponent;
  let fixture: ComponentFixture<BankStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
