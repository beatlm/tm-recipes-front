import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'mr-loader',
  templateUrl: './loader.html',
  styles: []
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit() {
  }

}
