import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-interestedcustomer',
  templateUrl: './interestedcustomer.component.html',
  styleUrls: ['./interestedcustomer.component.css']
})
export class InterestedcustomerComponent implements OnInit {
  title = 'AssistPurchase';
  list=[];
  referenceForm: FormGroup;
  //[{"id":"MRN001","name":"Tom","password":"Tom123","email":"Tom@gmail.com"},{"id":"MRN002","name":"Hary","password":"Harry123","email":"Harry@gmail.com"}];
  constructor(@Inject("logger") loggerService:any,private panservice:SignupService,private router:Router) { }

  

  ngOnInit(): void {
    this.fetchList();
    
  }
  
  fetchList(){
    this.panservice.getList2().subscribe((result)=>{
      this.list=result;
      console.log(result);
    })
  }
  onSubmit(){
    
  this.router.navigate(['./product'])
}

}
