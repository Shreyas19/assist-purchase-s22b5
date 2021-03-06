import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(@Inject("logger") loggerService:any,private panservice:SignupService,private router:Router) { }
  referenceForm: FormGroup;
  errorMessage=""
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.referenceForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      productname:new FormControl('', [Validators.required]),
      productseries: new FormControl('', [Validators.required]),
      productmodel: new FormControl('', [Validators.required]),
      screensize: new FormControl('', [Validators.required]),
      productweight: new FormControl('', [Validators.required]),
      portable: new FormControl('', [Validators.required]),
      monitorresolution: new FormControl('', [Validators.required]),
      measurement: new FormControl('', [Validators.required])
    });
    }
  onSubmit(){
    console.log(this.referenceForm.get("productname").value)
    if(this.referenceForm.get("productname").value==""){
      this.errorMessage="Product Name Should not be Empty ";
    }
    this.panservice.addProduct(this.referenceForm.value).subscribe((result)=>{

 

    },error=>{
      });
      if(this.referenceForm.get("productname").value!="")
        this.errorMessage="Product Added Successfully";
      
      
this.router.navigate(['./addproduct'])
  }
  onSubmit2(){
    this.router.navigate(['./product'])
  }
}
