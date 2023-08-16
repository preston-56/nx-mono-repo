import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {range} from '@org/utils'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  ngOnInit(): void {
    console.log(range(40,45));
  }
}
