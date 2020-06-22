import { Component, OnInit } from '@angular/core';
import { SearchinteractionService } from '../searchinteraction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage-home',
  templateUrl: './mainpage-home.component.html',
  styleUrls: ['./mainpage-home.component.css']
})
export class MainpageHomeComponent implements OnInit {

  constructor(private interaction: SearchinteractionService,private router:Router) { }

  ngOnInit(): void {
  }
  sendMsg(val){
    this.interaction.sendSearchValue("web")
    localStorage.setItem("searchResult",val)
    this.router.navigate(['/searchResult'])
   
  }
}
