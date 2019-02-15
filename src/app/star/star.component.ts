import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  star: Array = [];

  constructor(private gitHubService: GithubService) {
    this.gitHubService.getStar().subscribe(
      star => {
        this.star = star;
        console.log(this.star);
      }
    );
  }
  ngOnInit() {

  }
}
