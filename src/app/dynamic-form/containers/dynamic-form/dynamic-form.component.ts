import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: "mr-dynamic-form",
  template: `
  <form [formGroup]="form"  (ngSubmit)="submitted.emit(form.value)">
  <ng-container
        *ngFor="let field of config;"
        dynamicField
        [config]="field"
        [group]="form">
      </ng-container>
  </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: any[] = [];
  @Input()
  form: FormGroup;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }
  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => {
     
      if(control.name == "ingredientsList" ){
        let oAux: any = [];
        for (var i=0; i< control.list.length; i++) {
          oAux.push(this.fb.group({
           'name': (control.list[i].name) ? this.fb.control(control.list[i].name) : '' ,
           'amount':(control.list[i].amount) ? this.fb.control(control.list[i].amount) : '' 
          }));
        }     
        console.log("Ingredientes:")
        console.log({oAux});
        group.addControl(control.name, this.fb.array(oAux));

     }else if(control.name =="pasos" ){
        let oAux: any = [];
        for (var i=0; i< control.list.length; i++) {
          oAux.push(this.fb.control(control.list[i].name));
        }     
        console.log("Pasos:")
        console.log({oAux});
        group.addControl(control.name, this.fb.array(oAux));
      } else{       
        group.addControl(control.name, this.fb.control({value: '', disabled: false}))
      }
    });
    console.log({group});
    return group;
  }


}
