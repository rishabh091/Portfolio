import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPcComponent } from './project-pc.component';

describe('ProjectPcComponent', () => {
  let component: ProjectPcComponent;
  let fixture: ComponentFixture<ProjectPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
