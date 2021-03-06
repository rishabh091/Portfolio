import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ScrollBtnComponent } from './scroll-btn/scroll-btn.component';
import { ProjectPcComponent } from './project-pc/project-pc.component';
import { ProjectMobComponent } from './project-mob/project-mob.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
    HomeComponent,
    ScrollBtnComponent,
    ProjectPcComponent,
    ProjectMobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
