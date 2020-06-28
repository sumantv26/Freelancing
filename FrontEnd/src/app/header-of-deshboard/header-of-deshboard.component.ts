import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-of-deshboard',
  templateUrl: './header-of-deshboard.component.html',
  styleUrls: ['./header-of-deshboard.component.css']
})
export class HeaderOfDeshboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 toggle(){
  var ul=document.getElementsByClassName("ul")[0]
  ul.setAttribute("display","flex")
  alert("flex")

 }

 check(val){
  localStorage.setItem("searchResult",val)
  this.router.navigate(['/searchResult'])
 }

 logout(){
  localStorage.setItem("login","empty")
  this.router.navigate(["/mainpage/home"])
 }
 gotoHome(){
  this.router.navigate(["/mainpage/home"])
 }

}
