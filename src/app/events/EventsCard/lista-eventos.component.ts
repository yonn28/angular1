import{Component} from '@angular/core'
import { EventosService } from '../services/events.service';


@Component({
    selector:'lista-eventos',
    template:
    `
    <div class="contenedor">
        <a *ngFor="let evento1 of eventos" routerLink="{{evento1.id}}">
            <tarjeta-evento [evento]="evento1">
            </tarjeta-evento>
        </a>
    </div>   ` 
    ,styles:[
        `
            .contenedor{
                display:flex;
                flex-wrap:wrap;
                justify-content:center;
            }
        `
    ]

})
  
export class ListaEventosComponent{
    eventos
    constructor(private eventosService:EventosService){
        this.eventos=eventosService.obtenerEventos();
    }
  
}