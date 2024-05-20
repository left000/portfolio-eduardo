import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {


  @Input() persona!: Persona;

  constructor(private http: HttpClient) { }

  
  downloadPdf() {
    const filePath = 'assets/Lorenzo_Eduardo_Furio_CV.pdf';
  
    this.http.get(filePath, { responseType: 'blob' }).subscribe(blob => {
      const urlBlob = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = urlBlob;
      a.download = 'Lorenzo_Eduardo_Furio_CV.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(urlBlob);
      document.body.removeChild(a);
    });
  }


}
