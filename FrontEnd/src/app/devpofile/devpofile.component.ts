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
  rateProp;
  locProp;
  lanProp;
  titleProp;
  disProp;

  UnameProp;
  skillsArr;

  instaUrl="";
  facebookUrl;
  twitterUrl;

  price;
  hours;
  
  constructor(private devs:DevdataService) { }

  ngOnInit(): void {
    var email=localStorage.getItem("devemail")
    this.devs.GetDevData().subscribe(res=>{
      if(res.status="ok"){
        res.data.forEach(element => {
          if(element.email==email){
            this.emailProp=element.email;
            this.nameProp=element.name[0].toUpperCase()+element.name.slice(1);
            this.experienceProp=element.experience+" year";
            this.degreeProp=element.degree;
            this.categoryProp=element.category[0].toUpperCase()+element.category.slice(1)+ " Developer";

            this.rateProp=element.rate+" $"
            this.locProp=element.location[0].toUpperCase()+element.location.slice(1)
            this.lanProp=element.category[0].toUpperCase()+element.category.slice(1)
            this.titleProp=element.title[0].toUpperCase()+element.title.slice(1)
            this.disProp=element.discription[0].toUpperCase()+element.discription.slice(1)
            this.UnameProp=element.university
            this.skillsArr=element.skills

            this.instaUrl=element.instaUrl
            this.facebookUrl=element.facebookUrl
            
            this.twitterUrl=element.twitterUrl
            console.log(this.emailProp,this.nameProp,this.experienceProp,this.degreeProp,this.categoryProp)
          }
        });
      }
    })
    console.log(this.nameProp)
  }

    addMoney(){
      // this.devs.save()
    }
}
