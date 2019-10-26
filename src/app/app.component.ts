import { Component } from '@angular/core';
import {EmailService} from './email.service';
import construct = Reflect.construct;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task = {
    title: 'Review applications',
    assignee: null
  }

  constructor() {
  }


}
