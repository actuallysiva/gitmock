import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';
import GitHub from 'github-api';
import Requestable from 'github-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
 constructor(private router: Router, private http: GithubService) { }

  ngOnInit() {
  }
  login() {
    const username = this.username;
    const password = this.password;
    if (username && password) {
      this.http.setAuth(username, password);
      const user = this.http.getAuth();
      user.getProfile((err, response) => {
        if (err) {
          alert('Wrong Username & password');
        } else {
          this.router.navigate(['/profile']);
        }
      });
    }
    // tslint:disable-next-line:prefer-const
    // let passwordAuth = new GitHub({
    //   username: this.username,
    //   password: this.password
    // });
    // passwordAuth.getRateLimit().getRateLimit()
    // .then(function(resp) {
    //     console.log('Limit remaining: ' + resp.data.rate.remaining);
    //     // date constructor takes epoch milliseconds and we get epoch seconds
    //     console.log('Reset date: ' + new Date(resp.data.rate.reset * 1000));
    // }).catch(function(error) {
    //     console.log('Error fetching rate limit', error.message);
    // });
    // const me = passwordAuth.getUser((error, user) => {
    //   console.log(user);
    // });
    // console.log(me);
    // const repo = {
    //   'name': 'Hello-World',
    //   'description': 'This is your first repository',
    //   'homepage': 'https://github.com',
    //   'private': false,
    //   'has_issues': true,
    //   'has_projects': true,
    //   'has_wiki': true
    // };
    // me.createRepo(repo, function(err, response) {
    //   // do some stuff
    //   console.log(response);
    // });
    // me.getProfile(function(err, notifcations) {
    //   // do some stuff
    //   console.log(notifcations);
    // });
    // console.log(user.getProfile((profile) => {
    //   console.log(profile);
    // }));
  }
}
