import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  page = 'Profile';
  user: any;

  constructor(private gitHubService: GithubService) {

    this.gitHubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  ngOnInit() {
  }

}
