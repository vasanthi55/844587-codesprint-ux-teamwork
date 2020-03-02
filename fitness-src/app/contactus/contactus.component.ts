import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    console.log("In apply method");
  }

  onSubmit(){
    // alert(JSON.stringify(this.form.value));
    this.send();
    //console.log("clicked")

  }

}
