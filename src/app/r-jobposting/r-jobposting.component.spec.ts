import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RJobpostingComponent } from './r-jobposting.component';

describe('RJobpostingComponent', () => {
  let component: RJobpostingComponent;
  let fixture: ComponentFixture<RJobpostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RJobpostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RJobpostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
