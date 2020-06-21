import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { AcademiaComponent } from './academia/academia.component';


const routes: Routes = [ 
  { path: "", component: MainComponent },
  { path: "enterprise", component: EnterpriseComponent },
  { path: "about", component: AboutComponent },
  { path: "academia", component: AcademiaComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
