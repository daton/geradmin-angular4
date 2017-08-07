import { Component } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import { ClarityModule } from 'clarity-angular';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
 constructor(private router:Router){
      this.router.navigate(["/inicio"],{skipLocationChange:true});
 }
  
}
