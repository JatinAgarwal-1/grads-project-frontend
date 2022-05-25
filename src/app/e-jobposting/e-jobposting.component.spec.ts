import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EJobpostingComponent } from './e-jobposting.component';

describe('EJobpostingComponent', () => {
  let component: EJobpostingComponent;
  let fixture: ComponentFixture<EJobpostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EJobpostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EJobpostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
