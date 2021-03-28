import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
 
  public sum: number = 1;
  public show_hide: string = "Show Password";
  public psswdtype:string = "password";

  constructor() { }

  ngOnInit(): void {
  }

  check_alert()
  {
    this.sum = 45;
  }
  showhide(){
    if(this.show_hide == "Show Password"){
      this.show_hide = "Hide Password";
      this.psswdtype = "text";
    }
    else{
      this.show_hide = "Show Password";
      this.psswdtype = "password";
    }
    
  }


}
