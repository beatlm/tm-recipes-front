import { AlertService } from "./../../../services/alert.service";
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  AfterViewChecked,
  NgZone
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import {
  trigger,
  transition,
  style,
  state,
  animate
} from "@angular/animations";
@Component({
  selector: "mr-alert",
  templateUrl: "./alert.component.html",
  animations: [
    trigger("dialog", [
      transition("void => *", [
        style({ transform: "scale3d(.3, .3, .3)" }),
        animate(100)
      ]),
      transition(
        "void => *",
        animate(100, style({ transform: "scale3d(.3, .3, .3)" }))
      )
    ])
  ]
})
export class AlertComponent implements OnInit {
  //hide and show alert
  modalStatus: boolean;
  //custom settings
  text: string;
  type: string;
  time: number;
  firstButtonText: string;
  secondButtonText: string;
  //default settings
  color: string;
  backColor: string;
  showCloseButton:boolean;

  private alertSubscription: Subscription;

  constructor(private alertService: AlertService, private _ngZone: NgZone) {}

  ngOnInit() {
    console.log("alert component oninit");
    this.alertService.alertSettings$.subscribe(data => {
      this.text = data.text;
      this.type = data.type;
      this.time = data.time;
      this.firstButtonText = data.firstButtonText;
      this.secondButtonText = data.secondButtonText;
      if (this.type == "danger") {
        this.backColor = "#dc3545";
      }
      if (this.type == "info") {
        this.backColor = "#117a8b";
      }
      if (this.type == "success") {
        this.backColor = "#39c4ac";
      }
      if(data.showCloseButton==false){
        this.showCloseButton=false;
      }else{
        this.showCloseButton=true;
      }
      //show alert
      this.modalStatus = true;
      // hide alert after given time
      if (this.time > 0) {
        this._ngZone.runOutsideAngular(() =>
          setTimeout(
            () => this._ngZone.run(() => (this.modalStatus = false)),
            this.time
          )
        );
      }
    });
  }

  //close alert afert click on ok and cross
  resolve() {
    this.modalStatus = false;
  }
}
