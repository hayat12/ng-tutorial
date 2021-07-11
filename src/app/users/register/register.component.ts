import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group(
      {
        fname: [null, [Validators.required]],
        age: [null, [Validators.required, Validators.min(18)]],
        phone: [null, [Validators.required]], // you can add on ur pattern or regext as string Validators.pattern()
        email: [null, [Validators.required, Validators.email]]
      }
    );
  }

  onSave():void{
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    const data = this.form.getRawValue();
    console.log(data)
  }

}
