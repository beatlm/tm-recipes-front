import { Component, OnInit } from '@angular/core';
import * as M from '../../../../js/materialize'

@Component({
  selector: 'mr-menu',
  templateUrl:'./menu.html' ,
  styles: []
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
  }

}
