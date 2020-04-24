import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
  backToHome() {
    this.router.navigate(["/portfolio"]);
  }
}
