import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './list/detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { StudentListComponent } from './student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    DetailComponent,
    StudentListComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiceService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
