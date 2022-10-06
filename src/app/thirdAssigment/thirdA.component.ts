import { Component } from '@angular/core';

@Component({
  selector: 'tAssigment',
  templateUrl: './thirdA.component.html',
  styleUrls: ['./thirdA.component.css'],
})
export class ThirdAssigment {
  showPassword: boolean = false;
  items: number[] = [];
  counter: number = 0;

  constructor() {}

  onAddItem() {
    this.counter++;
    this.items.push(this.counter);
  }

  reverseShowPassword() {
    this.onAddItem();
    this.showPassword = !this.showPassword;
  }
}
