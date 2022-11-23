import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  isHidden: boolean = false;
  constructor() { }

  onHidden(pBolean: boolean) {
    this.isHidden = pBolean
  }

}
