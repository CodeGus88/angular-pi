import { Component } from '@angular/core';

@Component({
  selector: 'app-in-lime-example',
  template: `
    <p>
      Este es un ejemplo de componente inline
    </p>
    <p>{{propiedadPublica}}</p>
    <p>
    My name is: {{getName()}}
    </p>
    <p>{{getAge()>=18?"Es mayor de edad":"Es menor de edad"}}</p>
  `,
  styles: [
    `
    p{
      color: #c2c3c4;
    }
    `
  ]
})
export class InLimeExampleComponent {

  propiedadPublica = "Esto lo puede ver cualquier clase";

  private name = "Gustavo";
  private  age = 48;

  getName(){
    return this.name;
  }

  getAge(){
    return this.age;
  }

  constructor(){}
}
