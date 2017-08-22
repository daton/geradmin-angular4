import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CorreoService} from '../correo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[CorreoService]
})
export class InicioComponent implements OnInit {
login:string;
 password:string;
estaOculta:boolean=true;
mensaje:string='nada';
 

  ngOnInit() {
  }
constructor(private router:Router, private service:CorreoService){

 }
 obtenerCorreo(){
   return this.service.getCorreo()
   .subscribe(mensaje=>this.mensaje=mensaje);
 }

  registrar(){
    this.router.navigate(["/examenes"], {skipLocationChange:true});
    this.estaOculta=true;
}

autenticar(){
  console.log('jajajaja'+this.login);
  if(this.login==='admin'&& this.password==="test2017"){
    this.router.navigate(["/examenes"], {skipLocationChange:true});
    this.estaOculta=true;
  // this.obtenerCorreo();


  }else{
    this.router.navigate(["/inicio"],{skipLocationChange:true});
   this.estaOculta=false;
  }
}

}
