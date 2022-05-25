import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RStageComponent } from './r-stage.component';

describe('RStageComponent', () => {
  let component: RStageComponent;
  let fixture: ComponentFixture<RStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
