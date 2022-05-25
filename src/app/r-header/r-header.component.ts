import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-r-header',
  templateUrl: './r-header.component.html',
  styleUrls: ['./r-header.component.css']
})
export class RHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem('role')
    if (role !== "recruiter" ){
      this.router.navigate(["/"]);
    }
    this.getURL();
  }

  public getURL():void{

    var user_url;
    var user_name;

    var r_header_img=document.getElementById("r-header-img") as HTMLImageElement;
    var r_header_name=document.getElementById("r-header-name") as HTMLSpanElement;
  
    
    user_url= localStorage.getItem('user_url');
    user_name= localStorage.getItem('user_name');

    r_header_img.src=""+user_url;
    r_header_name.innerText=""+user_name;
  }
}
