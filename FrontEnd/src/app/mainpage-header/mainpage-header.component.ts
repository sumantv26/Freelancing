import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage-header',
  templateUrl: './mainpage-header.component.html',
  styleUrls: ['./mainpage-header.component.css']
})
export class MainpageHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 toggle(){
  var ul=document.getElementsByClassName("ul")[0]
  ul.setAttribute("display","flex")
  alert("flex")

 }

}
