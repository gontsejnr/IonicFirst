import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name; 
  surname;
  age;
  gender;

  constructor(private router: Router) {}

  nav(){
    this.router.navigateByUrl('detail');

    console.log(this.name)
    console.log(this.surname)
    console.log(this.age)
    console.log(this.gender)
  }
}
