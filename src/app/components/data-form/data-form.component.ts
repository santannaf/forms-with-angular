import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  submitted: Boolean = false;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
    
    
  }

  onSubmit() {
    this.submitted = true;

    if (this.formulario.valid) {

    } else {

    }

    console.log(this.formulario);
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset();
  }

  hasError(field: string) {
    return this.formulario.get(field).errors;
  }

}