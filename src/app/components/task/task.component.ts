import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  isHidden: boolean;
  constructor() {
    this.isHidden = false
  }

  ngOnInit(): void {
  }

  onHidden() {
    this.isHidden = false
  }

  offHidden() {
    this.isHidden = true
  }

}
