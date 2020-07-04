import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-header',
  templateUrl: './search-result-header.component.html',
  styleUrls: ['./search-result-header.component.css']
})
export class SearchResultHeaderComponent implements OnInit {

  currentUser;
 isUser=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentUser=localStorage.getItem("currentUser")//[0].toUpperCase()+localStorage.getItem("login").slice(1)
    // this.currentUser=currentUser[0].toUpperCase()+currentUser.slice(1)
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
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

 }

 check(val){
  localStorage.setItem("searchResult",val)
  // this.router.navigateByUrl('/searchResult', { skipLocationChange: true });
  //  this.router.navigate(["/http://localhost:4200/searchResult"]);
   window.location.href = "http://13.59.163.207/searchResult"
 }

 gotoDeshboard()
 {

   this.router.navigate(["dev-dashboard"])
   console.log(this.currentUser)
 }

}
