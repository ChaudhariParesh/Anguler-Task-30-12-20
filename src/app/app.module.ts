import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { OprationComponent } from './opration/opration.component';
import { FormsModule } from '@angular/forms';
import { ForloopComponent } from './forloop/forloop.component';
import { WithoutandcssComponent } from './withoutandcss/withoutandcss.component';
import { PadheComponent } from './padhe/padhe.component';
import { MultableComponent } from './multable/multable.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegisterComponent,
    OprationComponent,
    ForloopComponent,
    WithoutandcssComponent,
    PadheComponent,
    MultableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
