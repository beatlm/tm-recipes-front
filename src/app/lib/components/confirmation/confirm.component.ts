import { Router, ActivatedRoute } from "@angular/router";
import { ConfirmService } from "../../../services/confirm.service";
import { Component } from "@angular/core";

@Component({
  selector: '<mr-confirm>',
  templateUrl: 'confirm.component.html',
 
})
export class ConfirmComponent {
  message: any;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private confirmService: ConfirmService
  ) {}
  ngOnInit() {
    //this function waits for a message from alert service, it gets
    //triggered when we call this from any other component
    this.confirmService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
