import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  scrollActive=false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.scrollEvent();
  }

  scrollEvent() {
    window.addEventListener("load", () => {
      let button = document.getElementById("scrollBtn");

      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          button.style.opacity="0.5";
          button.style.cursor="pointer";
          this.scrollActive=true;
        } else {
          button.style.opacity="0";
          button.style.cursor="default";
          this.scrollActive=false;
        }
      });
    });
  }

  toTop() {
    if(this.scrollActive){
      let scroll=window.pageYOffset;
      
      let interval=setInterval(()=>{
        scroll=scroll-100;
        window.scrollTo(0,scroll);

        if(scroll <= 20){
          clearInterval(interval);
        }
      },5);
    }
  }

  toProjects() {
    this.router.navigate(["/projects"]);
  }
}
