import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProjectComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProjectComponent
  ]
})
export class SharedModule { }
