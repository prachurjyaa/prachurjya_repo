import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    MatListModule
  ],
  // exports: [NavbarComponent]
})
export class SharedModule { }
