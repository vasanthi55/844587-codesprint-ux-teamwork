import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { InfoModels } from '../info';
import { from } from 'rxjs';
@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  constructor( private service : InfoService) { }

  ngOnInit(): void {
    this.viewAppt();
  }
 items:InfoModels[];
  viewAppt(){
  this.service.getInfo().subscribe(items=>{this.items=items; console.log("receivedddd:"+JSON.stringify(items));}); 
  }

}
