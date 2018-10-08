import { AlertService } from './../../services/alert.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';

@Component({
  selector: 'mr-login',
  templateUrl: './login.html',
  styles: []
})
export class LoginComponent implements OnInit {

  config = [
    {
      type: 'input',
      name: 'titulo',
      placeholder: 'Título de la receta',
      divClass: 'leftIntputText',
  
    },
    {
      type: 'input',
      name: 'tags',
      placeholder: 'Tags',
      divClass: 'leftIntputText',
    },
    {
      label: 'raciones',
      inputType: 'number',
      type: 'input',
      name: 'racciones',
      divClass: 'threeIntputText'
    
    },
    {
      label: 'Tiempo preparacion',
      type: 'input',
      inputType: 'number',
      name: 'prepraracion',
      placeholder: 'minutos',
      divClass: 'threeIntputText'
    },
    {
      label: 'Tiempo total',
      type: 'input',
      inputType: 'number',
      name: 'total',
      placeholder: 'minutos',
      divClass: 'threeIntputText'
    },

    {
      label: 'Añadir ingrediente',
      type: 'input',
      name: 'ingrediente',
      placeholder: 'Ingrediente',
      divClass: 'threeIntputText'
    },
    {
      type: 'input',
      inputType: 'number',
      name: 'gramos',
      placeholder: 'gramos',
      divClass: 'threeIntputText'
    },
    {
      label: 'Añadir ingrediente',
      name: 'submit',
      type: 'button',
      buttonType: 'button',
      class: 'smallButton',
      click:'alert()'
    },
    {
      type: 'input',
      name: 'paso',
      placeholder: 'Paso',
      divClass: 'oneIntputText'
    },
    {
      label: 'Añadir paso',
      name: 'addPaso',
      type: 'button',
      buttonType: 'button',
      class: 'smallButton',
      click: () => {
        this.test()
      }
    },
  
    {
      label: 'Guardar',
      name: 'submit',
      type: 'button',
      class: 'bigButton',
      buttonType: 'submit'
    },
  ];

  formSubmitted(value) {
    console.log(value);
  }
  constructor(   private loginService: LoginService,
  private alertService: AlertService) { }

  ngOnInit() {
  }
  
 test(){
  alert('yujuuu');
}
  
}
