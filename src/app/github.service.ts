import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/models/user.model';
import GitHub from 'github-api';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url = 'https://api.github.com';
  public client_id = 'b9f852b68d03c62e1c3a';
  public client_secret = '2b0dc37cdc52d360c067a89be2c04f4b8cb4a8d8';
  private username;
  private password;

  constructor(private http: HttpClient) {
    console.log('Github service Started...');
   }
   setAuth(username, password) {
    // tslint:disable-next-line:prefer-const
    this.username = username;
    this.password = password;
  }
   getAuth() {
    // tslint:disable-next-line:prefer-const
    let passwordAuth = new GitHub({
      username: this.username,
      password: this.password
    });
    return passwordAuth.getUser();
  }
   getUser() {
     // tslint:disable-next-line:max-line-length
     return this.http.get(`${this.url}/users/${this.username} ?client_id=${this.client_id} &client_secret= ${this.client_secret}`);
   }
   getRepos() {
     // tslint:disable-next-line:max-line-length
     return this.http.get(`${this.url}/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
   }
   getGists() {
     return this.http.get(`${this.url}/users/${this.username}/gists`);
   }
   updateUsername(username: any) {
     this.username = username;
   }
}
