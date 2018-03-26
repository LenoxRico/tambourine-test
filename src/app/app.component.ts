import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
	}

  showBook(){
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
  }

  hideBook(){
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
  }

}
