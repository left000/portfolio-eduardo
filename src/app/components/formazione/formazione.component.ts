import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-formazione',
  templateUrl: './formazione.component.html',
  styleUrls: ['./formazione.component.css']
})

export class FormazioneComponent implements OnInit {

  @Input() persona!: Persona; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
