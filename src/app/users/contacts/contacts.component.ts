import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  form:FormGroup;
  result;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm(){
    this.form = this.fb.group(
      {
        fName: [null],
        lName: [null],
        addresses: this.addressForm(),
        contacts: this.fb.array([this.contactFrom()])
      }
    );
  }

  addressForm(){
    return this.fb.group(
      {
        address1: [null],
        address2: [null],
        country: [null],
        state: [null]
      }
    )
  }

  get addresses(){
  return this.form.get("addresses") as FormGroup;
  }


  get contacts(){
    return this.form.get("contacts") as FormArray;
    }

  contactFrom(){
    return this.fb.group(
      {
        phone: [null],
        email: [null]
      }
    );
  }

  onSave(){
    console.log(this.form.getRawValue())
    this.result = this.form.getRawValue();
  }

  addNewContacts(){
    this.contacts.push(this.contactFrom());
  }

  removeContact(i:Required<number>){
    this.contacts.removeAt(i);
  }
}
