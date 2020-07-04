import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage-header',
  templateUrl: './mainpage-header.component.html',
  styleUrls: ['./mainpage-header.component.css']
})
export class MainpageHeaderComponent implements OnInit {

  currentUser="";
 isUser=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    // localStorage.setItem('login',"default")
     this.currentUser=localStorage.getItem("currentUser")//[0].toUpperCase()+localStorage.getItem("login").slice(1)
    //  this.currentUser=currentUser[0].toUpperCase()+currentUser.slice(1)
     if(this.currentUser=="")
     {
      this.isUser=true
     }
     else
     {
       this.isUser=false
     }
     console.log("hi" +this.currentUser+"hi")
  }

 toggle(){
  // var ul=document.getElementsByClassName("ul")[0]
  // ul.setAttribute("display","flex")
  // alert("flex")

  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

 }

 check(val){
  localStorage.setItem("searchResult",val)
  this.router.navigate(['/searchResult'])
  console.log("hi" +this.currentUser+"hi")
 }

 gotoDeshboard()
 {

   this.router.navigate(["dev-dashboard"])
   console.log(this.currentUser)
 }

}
