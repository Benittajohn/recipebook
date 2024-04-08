import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  [x: string]: any;
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  username: string = '';
  password: string = '';

  onSubmit() {
    const userData = {
      username: this.username,
      password: this.password,
     
     
    };
    
    (window as Window).alert('Form submitted successfully!');

    
    const userDataJSON = JSON.stringify(userData);
    localStorage.setItem('userData', userDataJSON);

    console.log('User data saved to localStorage:', userData);

    

    this.router.navigate(['**']);

    
  }
 

}
