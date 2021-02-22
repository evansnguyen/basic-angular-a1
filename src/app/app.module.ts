import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningalertsComponent} from './warningalerts/warningalerts.component';
import { SuccessalertsComponent } from './successalerts/successalerts.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessalertsComponent,
    WarningalertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
