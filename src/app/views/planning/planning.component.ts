import { AlertService } from './../../services/alert.service';
import { DayModel } from './../../services/model/dayModel';
import { Component, OnInit } from '@angular/core';
import { PlannerService } from '../../services/planner.service';
import { LoaderService } from '../../services/loader.service';
import { PlannerModel } from '../../services/model/plannerModel';

@Component({
  selector: 'mr-planning',
  templateUrl: './planning.html',
  styles: []
})
export class PlanningComponent implements OnInit {
public  week: DayModel[];
public planner: PlannerModel[];

constructor( private plannerService: PlannerService,
  public loaderService: LoaderService,
public alertService:AlertService) { 
  
}

  ngOnInit() {
    this.loaderService.fireLoader();
    this.plannerService
      .getPlannerList$()
      .subscribe(this.showPlanner.bind(this), this.catchError.bind(this));

   // this.week=[new DayModel("Lunes",true,false,"344","Judias")];
    //this.week.push(new DayModel("Martes",false,false,"344","Gazpacho"));
    //this.week.push(new DayModel("Miércoles",false,false,"344","Paella"));
    //this.week.push(new DayModel("Jueves",false,false,"344","Ensalada"));
    //this.week.push(new DayModel("Viernes",false,true,"344","Piña"));
    //this.week.push(new DayModel("Sábado",false,false,"344","Judias"));
    //this.week.push(new DayModel("Domingo",false,false,"344","Judias"));
  }

  public selectDay(title:string){
    alert(title);
  }

  private showPlanner(resultado: PlannerModel[]) {
    this.loaderService.stopLoader();
    this.planner = resultado;
  }

  private catchError(err) {
    this.loaderService.stopLoader();
    this.alertService.create(
      "Ha ocurrido un error" , //title
      "danger", //type
      2500 // time
    );
  }
}
