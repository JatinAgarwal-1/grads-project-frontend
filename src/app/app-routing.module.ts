import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EHomeComponent } from './e-home/e-home.component';
import { EJobpostingComponent } from './e-jobposting/e-jobposting.component';
import { ELeaderboardComponent } from './e-leaderboard/e-leaderboard.component';
import { EReferralsComponent } from './e-referrals/e-referrals.component';
import { LoginComponent } from './login/login.component';
import { RHomeComponent } from './r-home/r-home.component';
import { RJobpostingComponent } from './r-jobposting/r-jobposting.component';
import { RStageComponent } from './r-stage/r-stage.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'employee', component: EHomeComponent },
  {path:'employee/jobposting', component: EJobpostingComponent },
  {path:'employee/leaderboard', component: ELeaderboardComponent },
  {path:'employee/referrals', component: EReferralsComponent },
  {path:'recruiter', component: RHomeComponent },
  {path:'recruiter/stage', component: RStageComponent },
  {path:'recruiter/jobposting', component: RJobpostingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
