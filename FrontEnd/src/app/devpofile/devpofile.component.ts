import { Component, OnInit } from '@angular/core';
import { DevdataService } from '../devdata.service';

@Component({
  selector: 'app-devpofile',
  templateUrl: './devpofile.component.html',
  styleUrls: ['./devpofile.component.css']
})
export class DevpofileComponent implements OnInit {
  emailProp;
  nameProp;
  categoryProp;
  experienceProp;
  degreeProp;
  
  constructor(private devs:DevdataService) { }

  ngOnInit(): void {
    var email=localStorage.getItem("devemail")
    this.devs.GetDevData().subscribe(res=>{
      if(res.status="ok"){
        res.data.forEach(element => {
          if(element.email==email){
            this.emailProp=element.email;
            this.nameProp=element.name;
            this.experienceProp=element.experience;
            this.degreeProp=element.degree;
            this.categoryProp=element.category;
            console.log(this.emailProp,this.nameProp,this.experienceProp,this.degreeProp,this.categoryProp)
          }
        });
      }
    })
  }


}
