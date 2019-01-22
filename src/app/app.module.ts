import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Manual imports
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { GithubService } from './github.service';
import { UserviewComponent } from './userview/userview.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserviewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'userview', component: UserviewComponent},
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path: '**', component: LoginComponent}
    ])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
