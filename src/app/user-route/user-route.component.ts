import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-route',
  templateUrl: './user-route.component.html',
  styleUrls: ['./user-route.component.css']
})
export class UserRouteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  start: string = '';
  destination: string = '';
  // clickme() {
  //   console.log('it does nothing',this.start,this.destination);

  // }


}
