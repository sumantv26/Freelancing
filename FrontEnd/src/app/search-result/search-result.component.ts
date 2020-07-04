import { Component, OnInit } from '@angular/core';
import { DevdataService } from '../devdata.service';
import { SearchinteractionService } from '../searchinteraction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  text;
  found=false;
  public searchResult=[];
  searchValue;
  category;

  datakeywords=['data','datacience','data science']
  
  constructor(private devs:DevdataService ,private interaction:SearchinteractionService ,private router:Router) { }

  ngOnInit(): void {

    var found=false;

    this.category=localStorage.getItem("searchResult").toLowerCase();
    var arr=this.category.split(" ")
    this.devs.GetDevData().subscribe((response)=>{
      if(response.status=="ok"){
       response.data.forEach(element => {
         for(let i=0 ; arr.length>i;i++){
           console.log(element.category,arr[i])
           var catarray=element.category.split(" ")
           for(let j=0 ; catarray.length>j;j++){
            if(arr[i]==catarray[j])
            { this.searchResult.push({name:element.name,email:element.email,cat:element.category[0].toUpperCase()+element.category.slice(1)})
            console.log(this.searchResult)
            found=true
              }
             console.log(found)
             console.log(this.searchResult)
           }
      
        }
        //  console.log(this.category.split(","))
       });
      }

        if(found){
          // this.text="No more data "
        }
        else{
          this.text="No Data Found"
        }
      }
        )
        
  }
  sendData(d){
      localStorage.setItem("devemail",d)
      this.router.navigate(["/devprofile"])
      if("data" in this.datakeywords){
        console.log("He")
      }
  }

}

