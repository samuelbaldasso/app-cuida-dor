import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.scss'],
})
export class Quiz2Component implements OnInit {
  isTrue: any;

  constructor(private router: Router) {}

  ngOnInit() {
    }

  selectedButton1() {
    this.isTrue = true;
        setTimeout(()=> {
          this.router.navigateByUrl('/quiz3');
        }, 2000);
      }

  selectedButton2(){
    this.isTrue = false;
    const but = document.querySelector('.btn2');
    but.classList.remove('hide');
  }
}
