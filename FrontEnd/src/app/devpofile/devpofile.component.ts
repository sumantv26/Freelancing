import { Component, OnInit } from '@angular/core';
import { DevdataService } from '../devdata.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-devpofile',
  templateUrl: './devpofile.component.html',
  styleUrls: ['./devpofile.component.css']
})
export class DevpofileComponent implements OnInit {
  // send email info
  clientemail;
  emailsubject;
  emailcontent;


  id;
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

  imgSource;
  
  constructor(private devs:DevdataService ) { }

  ngOnInit(): void {
    var email=localStorage.getItem("devemail")
    this.devs.GetDevData().subscribe(res=>{
      if(res.status="ok"){
        res.data.forEach(element => {
          if(element.email==email){
            this.id=element.id
            this.imgSource="http://3.128.254.247/"+element.email+"_profile.jpg"
            this.emailProp=element.email;
            this.nameProp=element.name[0].toUpperCase()+element.name.slice(1);
            this.experienceProp=element.experience+" year";
            this.degreeProp=element.degree.toUpperCase();
            this.categoryProp=element.category[0].toUpperCase()+element.category.slice(1)+ " Developer";

            this.rateProp=element.rate+" $"
            this.locProp=element.location[0].toUpperCase()+element.location.slice(1)
            this.lanProp=element.category[0].toUpperCase()+element.category.slice(1)
            this.titleProp=element.title[0].toUpperCase()+element.title.slice(1)
            this.disProp=element.discription[0].toUpperCase()+element.discription.slice(1)
            this.UnameProp=element.university.toUpperCase()
            this.skillsArr=element.skills.split(",")

            this.instaUrl=element.instaUrl
            this.facebookUrl=element.facebookUrl
            
            this.twitterUrl=element.twitterUrl
            console.log(this.emailProp,this.nameProp,this.experienceProp,this.degreeProp,this.categoryProp ,this.id)
          }
        });
      }
    })
  
    console.log(this.nameProp)
  }

  sendEmail(){
      // this.devs.save()
      this.devs.sendMail({clientemail:this.clientemail,devemail:this.emailProp,emailsubject:this.emailsubject,emailcontent:this.emailcontent}).subscribe(res=>{
        alert(res.err)
      })
      // , "ucvcxvuefudusgao" , "sumantv26@gmail.com", "this is just to Test Node mailer this is subject", `this is content   <h3>Hi</h3><br><h6>Following is the link to rest your password</h6><a href="http://localhost:4200/newpassword">Reset Password</a>` 
    }
}
