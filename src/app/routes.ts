import{Routes} from '@angular/router';
import { ListaEventosComponent } from './events/eventsCard/lista-eventos.component';
import { NewEvent } from './events/newEvent/newEvent.component';
import { EventDetail } from './events/EventDetails/EventsDetails.component';



export const appRutas:Routes=[
    {path:'eventos/:id', component: EventDetail},
    {path:'nuevo', component: NewEvent},
    {path:'eventos', component: ListaEventosComponent},
    {path:'',redirectTo:'eventos',pathMatch:'full'}
];

