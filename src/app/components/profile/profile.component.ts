import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() persona!: Persona;
  
  image: string = `https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg?h=1ece2f3c&itok=nJJsShQi`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
