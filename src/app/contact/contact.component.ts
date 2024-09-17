import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  plan1;
  plan2;
  plan3;

  constructor() { }

  ngOnInit(): void {
    
    var plan = localStorage.getItem("plan")

    if(plan == "1")
    {
      this.plan1 = true
    }

    if(plan == "2")
    {
      this.plan2 = true
    }

    if(plan == "3")
    {
      this.plan3 = true
    }

  }

}
