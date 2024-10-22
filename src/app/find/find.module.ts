import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './find.component';
import { FindRoutingModule } from './find-routing.module';

@NgModule({
  declarations: [
    FindComponent
  ],
  imports: [
    CommonModule,
    FindRoutingModule,
  ]
})
export class FindModule { }
