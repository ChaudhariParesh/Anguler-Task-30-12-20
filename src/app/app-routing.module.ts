import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import {ProductComponent} from './product/product.component'; 
import { OprationComponent } from './opration/opration.component';

const routes: Routes = [
  {path:'', component:ProductComponent},
  {path:'register', component:RegisterComponent},
  {path:'opration', component:OprationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
