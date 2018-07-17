import{ Component, Input} from '@angular/core';

@Component({
    selector:'tarjeta-evento',
    templateUrl:'./tarjeta-evento.component.html',
    styleUrls:['./tarjeta-evento.component.css']
})

export class TarjetaEventoComponent{
    @Input() evento
}