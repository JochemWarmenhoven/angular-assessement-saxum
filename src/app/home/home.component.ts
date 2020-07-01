import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  registered = false;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.registered = params['registered'];
    });
  }
}
