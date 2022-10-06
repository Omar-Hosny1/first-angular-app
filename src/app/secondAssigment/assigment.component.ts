import { Component } from '@angular/core';

@Component({
  selector: 'assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css'],
})
export class AppAssigment {
  userName = '';
  constructor() {}
  onResetUser() {
    this.userName = '';
  }
}
