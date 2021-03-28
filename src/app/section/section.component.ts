import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
 
  public sum: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  check_alert()
  {
    this.sum = 45;
  }

}
