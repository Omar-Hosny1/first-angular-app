import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from '@angular/forms';
import { AppAssigment } from './secondAssigment/assigment.component';
import { ThirdAssigment } from './thirdAssigment/thirdA.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    AlertComponent,
    AppAssigment,
    ThirdAssigment,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
