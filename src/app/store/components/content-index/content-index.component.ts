import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-index',
  templateUrl: './content-index.component.html',
  styleUrls: ['./content-index.component.css']
})
export class ContentIndexComponent implements OnInit {
  color:string = '#00B2E3';

  constructor() { }

  ngOnInit(): void {
  }

}
