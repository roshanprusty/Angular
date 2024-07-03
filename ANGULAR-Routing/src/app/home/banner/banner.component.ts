import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  getSearchValue(inputEl: HTMLInputElement) {
    const searchValue = inputEl.value.trim();
    this.router.navigate(['/courses'], { 
      queryParams: { search: searchValue },
      queryParamsHandling: 'merge' 
    });
  }
}
