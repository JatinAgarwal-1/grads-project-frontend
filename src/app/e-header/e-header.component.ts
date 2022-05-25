import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-e-header',
  templateUrl: './e-header.component.html',
  styleUrls: ['./e-header.component.css']
})
export class EHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem('role')
    if (role !== "employee" ){
      this.router.navigate(["/"]);
    }

    this.getURL();
  }

  public getURL():void{

    var user_url;
    var user_name;

    var e_header_img=document.getElementById("e-header-img") as HTMLImageElement;
    var e_header_name=document.getElementById("e-header-name") as HTMLSpanElement;

    user_url= localStorage.getItem('user_url');
    user_name= localStorage.getItem('user_name');

    e_header_img.src=""+user_url;
    e_header_name.innerText=""+user_name;

  }

}
