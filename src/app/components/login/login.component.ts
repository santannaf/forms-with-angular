import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  submitted: Boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      senha: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  hasError(field: string) {
    return this.formulario.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;

    if (this.formulario.valid) {

    } else {

    }
    console.log(this.formulario);
  }

}
