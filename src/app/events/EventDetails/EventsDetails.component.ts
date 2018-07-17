import {Component} from '@angular/core';
import {EventosService} from '../services/events.service';
import{ActivatedRoute} from '@angular/router';
import{Location} from '@angular/common';

@Component({
    selector:'event-details',
    templateUrl:'./EventDetails.component.html',
    styleUrls:['./EventDetails.component.css']
})

export class EventDetail{
    evento
    constructor(
        private route:ActivatedRoute,
        private EventoService:EventosService,
        private location:Location
      ) { }

    ngOnInit() {
        const id:number = +this.route.snapshot.params['id'];
        console.log(id);
        this.evento = this.EventoService.obtenerEventoPorId(id);
    }
    goBack():void{
      this.location.back();
    }
    delete():void{
        const id:number = +this.route.snapshot.params['id'];
        this.EventoService.deleteEvento(id);
        this.location.back();
    }
      /*
      ngOnInit(): void {
        this.getHero();
      }
      getHero():void{
        const id=+this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(hero => this.hero=hero);
      }

      */
}