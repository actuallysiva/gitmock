import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user;
  private gists;
  private repos;
  private followers;
  private name;
  private description;
  private homepage;
  constructor(private router: Router, private http: GithubService) {
    this.http.getAuth().getProfile((err, response) => {
      // do some stuff
      if (err) {
        this.router.navigate(['/login']);
      } else {
        this.user = response;
        this.getGists();
        this.getRepos();
        this.getFollowers();
      }
    });
  }

  ngOnInit() {
  }
  getGists() {
    this.http.getAuth().listGists((err, response) => {
      // do some stuff
      if (err) {
        alert('Unable to fetch gists.');
      } else {
        this.gists = response;
      }
    });
  }
  getRepos() {
    this.http.getAuth().listRepos((err, response) => {
      // do some stuff
      if (err) {
        alert('Unable to fetch Repos.');
      } else {
        this.repos = response;
      }
    });
  }
  getFollowers() {
    this.http.getAuth()._request('GET', '/user/followers', null, (err, response) => {
      // do some stuff
      if (err) {
        alert('Unable to fetch Repos.');
      } else {
        this.followers = response;
      }
    });
  }
  createRepo() {
    const repo = {
      name: this.name,
      description: this.description,
      homepage: this.homepage
    };
    this.http.getAuth().createRepo(repo, function(err, response) {
      // do some stuff
      if (err) {
        alert('Unable to create repo. Please try again.');
      } else {
        console.log(response);
      }
    });
  }

}
