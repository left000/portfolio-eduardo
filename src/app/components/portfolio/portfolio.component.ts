import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  @Input() persona!: Persona; 

  constructor() { }

  ngOnInit(): void {
  }

}
