import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InfoModels } from '../info';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', [
      Validators.required,
    ]),
    
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl('', [
      Validators.required,
    ]),
     package: new FormControl('', [
       Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });

  infoModel : InfoModels = new InfoModels();
  

  constructor( private service : InfoService) { }

  get firstname(){
    return this.form.get('firstName')
  }

  ngOnInit() {
  }

  apply(){
    //console.log("In apply method");
    this.infoModel.id = 6;
    this.service.placeAppointment(this.infoModel).subscribe(infoModels => this.infoModel = infoModels)
  }
  onSubmit(){
    // alert(JSON.stringify(this.form.value));
    this.apply();
    //console.log("clicked")

  }

}
