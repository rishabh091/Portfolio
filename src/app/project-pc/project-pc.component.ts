import { Component, OnInit } from "@angular/core";
import { ProjectsService } from '../projects.service';

@Component({
  selector: "app-project-pc",
  templateUrl: "./project-pc.component.html",
  styleUrls: ["./project-pc.component.css"]
})
export class ProjectPcComponent implements OnInit {
   
  projects=this.projectService.projects;

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  ngAfterViewInit() {
    this.changeOdd();
  }

  changeOdd() {
    for (let i = 1; i < 10; i = i + 2) {
      let element = document.getElementById(i + "");

      element.classList.remove("bg-primary-light");
      element.classList.remove("text-right");
      element.style.flexDirection = "row-reverse";
    }
  }
}
