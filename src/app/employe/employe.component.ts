import { Component } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {

  private company: String;

  constructor(){
    this.company = "";
  }

  setCompany(company: String){
    alert("Se actualizó la la empresa del empleado");
    this.company = company;
  }

  getCompany(){
    return this.company;
  }

  // showCompany(company: String){
  showCompany(){
    console.log("Presionaste")
  }

}
