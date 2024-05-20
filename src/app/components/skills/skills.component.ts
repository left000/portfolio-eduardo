import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  @Input() persona!: Persona; 

  constructor() { }

  ngOnInit(): void {
  }

}
