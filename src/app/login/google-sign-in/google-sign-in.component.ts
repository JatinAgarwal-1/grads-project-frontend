import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthService, SocialUser, SocialAuthServiceConfig } from 'angularx-social-login';


@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit {

  constructor(private authService:SocialAuthService, private router:Router,private http:HttpClient) { }

  loggedInUser : any;

  ngOnInit(): void {
     this.authService.authState.subscribe((user)=>{

      // this.loggedInUser = {...this.loggedInUser, user_url : user.photoUrl ,user_name : user.name , user_email : user.email , date : Date.now()  , role :""}
     
      localStorage.setItem('user_url',user.photoUrl)
      localStorage.setItem('user_name',user.name)
      localStorage.setItem('user_email',user.email)
      localStorage.setItem('time', Date.now().toString())
    })
  }

  signIn():void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user)=>{
      this.http.get(`http://localhost:9191/isRecruiter?email=${user.email}`).subscribe((result)=>{
        if (result){
        localStorage.setItem('role',"recruiter")
          this.router.navigate(['/recruiter'])
      }else {
        localStorage.setItem('role',"employee")
          this.router.navigate(['/employee'])
      }
      })

    });
  }

}
