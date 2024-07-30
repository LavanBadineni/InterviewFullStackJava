import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  values = {name:'',password:''};


  constructor(private router: Router, private fb: FormBuilder, private service: AuthServiceService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    
    console.log(this.loginForm?.value);
    
    this.service.login(this.values.name, this.values.password).subscribe(
      response => {
        console.log("inside service login()");
        

        if (response.message === 'Login Successful') {
          alert('Login successful');
          const userName=this.values.name;
          this.router.navigate(['/home'], { queryParams: { userName } });
        } else {
          console.log(response.message);
          alert("Invalid Credentials");
        }
      },
      error => {
        console.error("error while login", error);
        alert('Invalid credentials' || error.message);
      }
    );
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

}
