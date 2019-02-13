import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {

    private username = 'laurobs8';

    constructor(private http: HttpClient) { }

    getUser() {
        return this.http.get('https://api.github.com/users/' + this.username);
    }

    getRepos() {
        return this.http.get('https://api.github.com/users/' + this.username + '/repos');
    }

}
