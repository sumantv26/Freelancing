import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-header',
  templateUrl: './search-result-header.component.html',
  styleUrls: ['./search-result-header.component.css']
})
export class SearchResultHeaderComponent implements OnInit {

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
  // this.router.navigateByUrl('/searchResult', { skipLocationChange: true });
   this.router.navigate(["/http://localhost:4200/searchResult"]);
 }

}
