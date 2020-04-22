import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMobComponent } from './project-mob.component';

describe('ProjectMobComponent', () => {
  let component: ProjectMobComponent;
  let fixture: ComponentFixture<ProjectMobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
