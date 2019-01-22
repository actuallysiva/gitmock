import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  user: any;
  repos: any;
  gists: any;
  username: any;
  constructor(private router: Router, private http: GithubService) {
    console.log('userview component started...');
  }

  ngOnInit() {
    this.user = false;
  }
  search(): any {
    this.http.updateUsername(this.username);
    this.http.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.http.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
    this.http.getGists().subscribe(gists => {
      this.gists = gists;
      console.log(this.gists);
    });
  }

}
