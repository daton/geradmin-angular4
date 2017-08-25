import { Component,ViewChild, OnInit } from '@angular/core';
import {Wizard} from "clarity-angular";
import {Router} from '@angular/router';
import {ClaveService} from '../clave.service';
import {Estatus} from '../estatus';


@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css'],
  providers:[ClaveService]
})
export class ExamenesComponent implements OnInit {

  @ViewChild("wizardlg") wizardLarge: Wizard;

  lgOpen: boolean = true;

  perfil:string='Alumno';
  miClave:string;
  noEsProfesor:boolean=true;
  estatus:Estatus;
  oculta:boolean=true;

  constructor(private router:Router, private servicioClave:ClaveService) {

  this.oculta=true;
   }

  ngOnInit() {
    this.estatus=new Estatus(false);

  }


obtenerClave(){
  this.getClave();
  console.log('Hola'+this.estatus.success);

}
navegarInicio(){
  this.router.navigate(["/inicio"],{skipLocationChange:true});
}

verPerfil(){
  console.log('hola');
  if(this.perfil==='Profesor'){
    console.log('Eres profesor');
    this.noEsProfesor=false;

  }else{
    console.log('No eres profesor');
    this.noEsProfesor=true;
    }

 
  }


 getClave(){
   this.servicioClave.getClave(this.miClave)
   .subscribe(estatus=>this.estatus=estatus);
     
   }

   hacerAlgo(){
     console.log('asasasas');
    // this.=this.estatus.success;
   }
   estaInvalidada():boolean{
this.oculta=this.estatus.success;
return !this.estatus.success;

   }

 
  
}

