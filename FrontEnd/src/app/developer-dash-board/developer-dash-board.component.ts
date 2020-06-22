import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { DevdataService } from '../devdata.service';

@Component({
  selector: 'app-developer-dash-board',
  templateUrl: './developer-dash-board.component.html',
  styleUrls: ['./developer-dash-board.component.css']
})
export class DeveloperDashBoardComponent implements OnInit {

  categoryList=['web','app']

  email="";
  name=""
  catagoryProp="";
  experienceProp="";
  degreeProp=""
  constructor(private ds:DevdataService, private router:Router) { }


  ngOnInit(): void {
    this.email=localStorage.getItem("email")
    this.name=localStorage.getItem("name")
  }
  save(cat,exp,deg){
    this.catagoryProp=cat
    this.experienceProp=exp
    this.degreeProp=deg
    {   if(this.name=="" && this.email=="" && this.catagoryProp=="" && this.experienceProp=="" && this.degreeProp==""){

    }
       else
    { this.ds.save({name:this.name, email:this.email, category:this.catagoryProp,experience:this.experienceProp, degree:this.degreeProp})
        .subscribe((response)=>{
          if(response.status=="ok")
          {
              alert("Data saved Successfull ");
              // this.router.navigate(['/signin']);
              console.log(this.catagoryProp,this.experienceProp,this.degreeProp)
          }
        })
    }}
  }
  

}
