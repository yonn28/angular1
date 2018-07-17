import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
/*importacion de gestos para dispositivos moviles*/ 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/*contiene las importaciones de material desing*/ 
import { materialModule } from './shared/material.modules';
/*es el servicio de eventos donde esta toda la lista puede ser usada en cualquier lado*/
import { EventosService } from './events/services/events.service';
/*contiene la declaracion de componentes*/
import { ListaEventosComponent } from './events/eventsCard/lista-eventos.component';
import { TarjetaEventoComponent } from './events/eventsCard/Tarjeta-Evento.component';
import { NewEvent } from './events/newEvent/newEvent.component';
import { EventDetail } from './events/EventDetails/EventsDetails.component';
import { appToolbar } from './toolbar/toolbar.component';
/*libreria de rooteo */
import {appRutas} from './routes'
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    TarjetaEventoComponent,
    ListaEventosComponent,
    NewEvent,
    EventDetail,
    appToolbar
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialModule,
    RouterModule.forRoot(appRutas)
    
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
