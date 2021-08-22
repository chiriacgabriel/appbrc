import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReloadPageService {

  constructor(private router: Router) {
  }

  reload(): void {
    const currentUrl = this.router.url;

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]).then();
    });
  }


  skipLocation(url: string): void {
    this.router.navigateByUrl(url, {skipLocationChange: false}).then();
  }
}
