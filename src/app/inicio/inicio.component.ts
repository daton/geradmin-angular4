import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CorreoService} from '../correo.service';
import {ProfesorService} from '../profesor.service';
import {Profesor} from '../profesor';
import {Plantel} from '../plantel';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[CorreoService,ProfesorService ]
})
export class InicioComponent implements OnInit {
login:string;
 password:string;
estaOculta:boolean=true;
mensaje:string='nada';
profesor:Profesor;
 

  ngOnInit() {

    this.obtenerProfesor();
  }
constructor(private router:Router, private service:CorreoService, private servicioProfesor:ProfesorService){

 }
 obtenerCorreo(){
   return this.service.getCorreo()
   .subscribe(mensaje=>this.mensaje=mensaje);
 }

 obtenerProfesor(){
   return this.servicioProfesor.getProfesor()
   .subscribe(profesor=>this.profesor=profesor);
 }

  registrar(){
   
    this.router.navigate(["/examenes"], {skipLocationChange:true});
    this.estaOculta=true;
    console.log('A ver que pasa'+this.profesor.clave);
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
