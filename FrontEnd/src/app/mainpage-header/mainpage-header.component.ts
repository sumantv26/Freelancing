import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage-header',
  templateUrl: './mainpage-header.component.html',
  styleUrls: ['./mainpage-header.component.css']
})
export class MainpageHeaderComponent implements OnInit {

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

}
