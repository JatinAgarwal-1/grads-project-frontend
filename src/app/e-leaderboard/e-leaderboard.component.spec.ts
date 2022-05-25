import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELeaderboardComponent } from './e-leaderboard.component';

describe('ELeaderboardComponent', () => {
  let component: ELeaderboardComponent;
  let fixture: ComponentFixture<ELeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
