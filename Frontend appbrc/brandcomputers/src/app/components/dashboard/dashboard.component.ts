import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';
import {tick} from '@angular/core/testing';
import {User} from '../../model/User';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    if (this.tokenStorage.getToken() === null){
      this.router.navigateByUrl('/login').then();
    }
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/login').then();
  }

}
