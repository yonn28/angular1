import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EventosService} from '../services/events.service';


@Component({
    selector:'new-Event',
    templateUrl:'./newEvent.componet.html',
    styleUrls:['./newEvent.component.css']
})

export class NewEvent {
    constructor(
        private router: Router,
        private EventService:EventosService
      ) { }
    
      evento={
        id:this.EventService.maxId()+1,
        nombre:'Coferencia Angular',
        fecha:'20/08/2018',
        imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description:'Un Super evento de Angular',
        ciudad:'Bogota'
      }
      ngOnInit() {
      }
    
      cancelar(){
        console.log('cancelar');
        this.router.navigate(['/eventos']);
      }
      save(){
        this.EventService.pushEvento(this.evento.id,this.evento.nombre,this.evento.fecha,this.evento.imageUrl,
            this.evento.description,this.evento.ciudad);
            console.log(this.evento.nombre);
            this.router.navigate(['/eventos']);
      }
    
}


