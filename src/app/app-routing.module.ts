import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import {ProductComponent} from './product/product.component'; 
import { OprationComponent } from './opration/opration.component';
import { ForloopComponent } from './forloop/forloop.component';
import { MultableComponent } from './multable/multable.component';

const routes: Routes = [
  {path:'', component:ProductComponent},
  {path:'register', component:RegisterComponent},
  {path:'opration', component:OprationComponent},
  {path:'forloop', component:ForloopComponent}, 
  {path:'multable',component:MultableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
