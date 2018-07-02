import { DayModel } from './../../services/model/dayModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-planning',
  templateUrl: './planning.html',
  styles: []
})
export class PlanningComponent implements OnInit {
public  week: DayModel[];

constructor() { }

  ngOnInit() {
   
    this.week=[new DayModel("Lunes",true,false,"344","Judias")];
    this.week.push(new DayModel("Martes",false,false,"344","Gazpacho"));
    this.week.push(new DayModel("Miércoles",false,false,"344","Paella"));
    this.week.push(new DayModel("Jueves",false,false,"344","Ensalada"));
    this.week.push(new DayModel("Viernes",false,true,"344","Piña"));
    this.week.push(new DayModel("Sábado",false,false,"344","Judias"));
    this.week.push(new DayModel("Domingo",false,false,"344","Judias"));
  }

  public selectDay(title:string){
    alert(title);
  }
}
