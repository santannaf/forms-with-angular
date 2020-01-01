import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFormDirective } from './data-form.directive';

@NgModule({
  declarations: [DataFormComponent, DataFormDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class DataFormModule { }
