import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() persona!: Persona;
  
  image: string = '/assets/1679999446687.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
