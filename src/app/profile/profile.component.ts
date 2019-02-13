import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private gitHubService: GithubService) {

    this.gitHubService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
