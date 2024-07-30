import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup | any;
 
  values ={name:'',password:'',email:''};

  constructor(private fb:FormBuilder,private router:Router,private service:AuthServiceService){

  }
  ngOnInit(){
   this.registerForm= this.fb.group({
      name: ['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }

  onSubmit(){
        console.log(this.registerForm.value)
        this.service.save(this.values.name,this.values.email,this.values.password).subscribe(response=>{
          console.log('input values received',this.values);
          if(response.message==='User details created Successfully'){
              alert('User Details Created Successfully');
              const userName=this.values.name;
              this.router.navigate(['/home'], {queryParams:{userName}});
          }else{
            console.error("Error while navigating to home page");
          }
         /* console.error("error while registering values"); */
          

        }
        );
  }

}
