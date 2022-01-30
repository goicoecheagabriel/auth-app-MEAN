import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  contactos: string[] = ['Carlos', 'Marcos', 'Diego', 'Mariano','Carlos', 'Marcos', 'Diego', 'Mariano','Carlos', 'Marcos', 'Diego', 'Mariano'];



  constructor() { }

  ngOnInit(): void {
  }

}
