import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsComponent } from './e-referrals.component';

describe('EReferralsComponent', () => {
  let component: EReferralsComponent;
  let fixture: ComponentFixture<EReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
