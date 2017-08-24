import { Component,ViewChild, OnInit } from '@angular/core';
import {Wizard} from "clarity-angular";
import {Router} from '@angular/router';


@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {

  @ViewChild("wizardlg") wizardLarge: Wizard;

  lgOpen: boolean = true;

  perfil:string='Alumno';
  noEsProfesor:boolean=true;

  constructor(private router:Router) { }

  ngOnInit() {
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
}
