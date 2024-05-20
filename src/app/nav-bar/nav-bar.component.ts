import { Component, Input, OnInit } from '@angular/core';
import { Anagrafica, Persona } from '../model/persona';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() persona!: Persona;

  constructor() { }

  ngOnInit(): void {
  }

}
