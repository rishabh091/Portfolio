import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-mob',
  templateUrl: './project-mob.component.html',
  styleUrls: ['./project-mob.component.css']
})
export class ProjectMobComponent implements OnInit {

  projects=this.projectService.projects;
  
  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
  }
}
