import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  about;
  skills;
  contact;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.about=document.getElementById('aboutId').offsetTop;
    this.skills=document.getElementById('skillsId').offsetTop;
    this.contact=document.getElementById('contactId').offsetTop;
  }

  scrollTo(item){
    if(item == 'about'){
      this.toItem(this.about);
    }
    else if(item == 'skills'){
      this.toItem(this.skills);
    }
    else if(item == 'contact'){
      this.toItem(this.contact);
    }
  }

  toItem(value){
    window.scrollTo(0,value);
  }

  toProjects() {
    this.router.navigate(["/projects"]);
  }
}
