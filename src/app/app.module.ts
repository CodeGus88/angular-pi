import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { EmployeComponent } from './employe/employe.component';
import { InLimeExampleComponent } from './in-lime-example/in-lime-example.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    EmployeComponent,
    InLimeExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
