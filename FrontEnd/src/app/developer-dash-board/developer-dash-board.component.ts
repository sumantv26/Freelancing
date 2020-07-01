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

  isDevData=false;
  buttonText="SAVE";

  categoryList=['web','app']
  variable;
  variableColor="red";
  email="";
  name=""
  categoryProp="";
  experienceProp="1";
  degreeProp=""
  rateProp="";
  locProp="";
  lanProp;
  titleProp="";
  disProp="";
  UnameProp="";
  skillsProp="";

// url
facebookUrl="https://www.facebook.com/";
instaUrl="https://www.instagram.com/";
twitterUrl="https://twitter.com/";

profile;
found=false;
  constructor(private ds:DevdataService, private router:Router) { }


  ngOnInit(): void {
    this.email=localStorage.getItem("email")
    this.name=localStorage.getItem("name")[0].toUpperCase()+localStorage.getItem("name").slice(1)
    this.ds.GetDevData().subscribe(res=>{
      if(res.status="ok"){
        
        res.data.forEach(element => {
          // console.log("in onit")
          // console.log(element.email)

          if(element.email==this.email){
            this.isDevData=true
            console.log(element.email)
            this.buttonText="UPDATE"
            this.disProp=element.discription
            this.titleProp=element.title
            this.categoryProp=element.category
            this.experienceProp=element.experience
            this.degreeProp=element.degree
            this.rateProp=element.rate
            this.locProp=element.location
            this.lanProp=element.language
            this.UnameProp=element.university
            this.skillsProp=element.skills
            this.facebookUrl=element.facebookUrl;
            this.instaUrl=element.instaUrl
            this.twitterUrl=element.instaUrl

          }
        });

      }
    })

  }
  getProfile(e)
  {
      this.profile=e.target.files[0];
  }




  save(cat,exp,uname,deg,skills,rate,loc,lan,title,dis){

    if(cat!="" && exp!=""  && uname!=""  && deg!=""  && skills!=""  && rate!=""  && loc!=""  && lan!=""  && title!=""  && dis!="" && this.profile!=undefined){
      
      var form = new FormData();
      // for (var i=0; i<this.gallery.length;i++)
      // {
      //   form.append("gallery",this.gallery[i], this.gallery[i]['name']);
      // }
      form.set('name', this.name);   
      form.set('category', cat);
      form.set('experience', exp);
      form.set('university', uname);
      form.set('degree', deg);
      form.set('skills', skills);
      form.set('rate', rate);
      form.set('location', loc);
      form.set('language', lan);
      form.set('title', title);    
      form.set('discription',dis);
      form.set('facebookUrl', this.facebookUrl);
      form.set('instaUrl', this.instaUrl);
      form.set('twitterUrl', this.twitterUrl);
      form.set('email', this.email);
      form.set('profile', this.profile);
      
      
     


     if(this.isDevData==false){
      this.ds.uploadImg(form).subscribe((d)=>{
        if(d.status=="ok")
         {
          this.variable="Data saved Successfull You will redirect to home in 3 seconds"
          this.variableColor="green"
          setTimeout(() => {
            this.router.navigate(['/mainpage/home']);
          }, 3000);
         }
         else{
           this.variable="Data Is Already saved"
           setTimeout(() => {
            this.router.navigate(['/mainpage/home']);
          }, 3000);
           this.variableColor="red"
         }
        
        });
     }
     else{
      this.ds.updateData({
        name:this.name,  
        email:this.email,
        category:cat,
        experience:exp, 
        university:uname,
        degree:deg,
        skills: skills,
        rate:rate,
        location:loc,
        language:lan,
        title:title,
        discription:dis,
        facebookUrl:this.facebookUrl,
        instaUrl:this.instaUrl,
        twitterUrl:this.twitterUrl
      }).subscribe(res=>{
        if(res.status=="ok"){
            alert("data updated!")
        }
        else{
          alert("data not updated!")
        }
        // console.log(res)
      })
     }


    }
    else{
      alert("please fill all fields")
    }

  



  //   var found=false;

  //   this.catagoryProp=cat
  //   this.experienceProp=exp
  //   this.degreeProp=deg
  //   this.rateProp=rate
  //   this.locProp=loc
  //   this.lanProp=lan
  //   this.titleProp=title
  //   this.disProp=dis
  //   this.UnameProp=uname

  //   var skillsArray=skills.split(",")
  //   console.log(skillsArray)
  //  if(this.email!=""){
  //     console.log("in if")
  //         this.ds.GetDevData().subscribe(res=>{
  //           if(res.status=="ok"){
  //           res.data.forEach(element => {
  //             console.log(element.email,this.email)
  //             if(element.email==this.email){
  //               console.log(element.email)
  //               found=true
  //             }
  //           });
  //           console.log(found,res.status)
  //           this.insertData(found,res,skillsArray)
  //         }
  //         else
  //        {
  //         this.insertData(found,res,skillsArray)
  //        }
  //         })

          // console.log(found)
   
    // }
  }

  // insertData(found,res,skillsArray){
  //   if(found  && res.status=="ok"){
  //     alert("you already gave your data ")
  //     this.router.navigate(['/mainpage/home']);
  //   }
  //   else {
  //     this.ds.save({
  //       name:this.name, 
  //       email:this.email, 
  //       category:this.catagoryProp,
  //       experience:this.experienceProp, 
  //       university:this.UnameProp,
  //       degree:this.degreeProp,
  //       skills: skillsArray,
  //       rate:this.rateProp,
  //       location:this.locProp,
  //       language:this.lanProp,
  //       title:this.titleProp,
  //       discription:this.disProp,
  //       facebookUrl:this.facebookUrl,
  //       instaUrl:this.instaUrl,
  //       twitterUrl:this.twitterUrl

        
  //     })
  //     .subscribe((response)=>{
  //       if(response.status=="ok")
  //       {
  //           // alert("Data saved Successfull You will redirect to home in 3 seconds");
  //           // 
        
  //           this.variable="Data saved Successfull You will redirect to home in 3 seconds"
  //           setTimeout(() => {
  //             this.router.navigate(['/mainpage/home']);
  //           }, 3000);
  //           console.log(this.catagoryProp,this.experienceProp,this.degreeProp)
  //       }
  //     }) 
  //   }
  // }

}

