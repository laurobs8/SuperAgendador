import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {

  gitInfo: any;
  user: any;

  constructor(private githubService: GithubService) {

    this.githubService.getRepos().subscribe(
      gitInfo => {
        this.gitInfo = gitInfo;
        // debugger
        console.log(this.gitInfo);
      }
    );

    this.githubService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }
  ngOnInit() {
  }
}
