import { Component, OnInit  } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  constructor(private router: Router) { }
  ngOnInit() {
 }
 addEmployee(): void {
   this.router.navigate(['/main']);
}
login():void {
  this.router.navigate(['./login']);
}
}
