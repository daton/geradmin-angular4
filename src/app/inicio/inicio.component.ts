import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
login:string;
 password:string;

 

  ngOnInit() {
  }
constructor(private router:Router){

 }

  navegar(){
    console.log('jajajaja'+this.login);
    if(this.login==='admin'&& this.password==="test2017"){
      this.router.navigate(["/examenes"], {skipLocationChange:true});
    }else{
      this.router.navigate(["/inicio"],{skipLocationChange:true});
    }
}
}
