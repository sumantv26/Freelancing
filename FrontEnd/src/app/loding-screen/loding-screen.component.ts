import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loding-screen',
  templateUrl: './loding-screen.component.html',
  styleUrls: ['./loding-screen.component.css']
})
export class LodingScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   this.gotologin()
   localStorage.setItem("currentUser","")
  }

  gotologin(){
    setTimeout(() => {
      this.router.navigate(['/mainpage']);
    }, 3000);
    
  }

}
