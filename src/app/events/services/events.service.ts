import {Injectable} from '@angular/core';

@Injectable()

export class EventosService{
    obtenerEventos(){
        return Eventos;
    }
    
    obtenerEventoPorId(id: number){
        return Eventos.find( e => e.id === id);
    }
    pushEvento(id,nombre,fecha,imageUrl,description,ciudad){
        Eventos.push({id,nombre,fecha,imageUrl,description,ciudad});
    }
    deleteEvento(idToDelete){
        for (var i =0; i < Eventos.length; i++)
        if (Eventos[i].id === idToDelete) {
            Eventos.splice(i,1);
            break;
        }
    }
    maxId(){
        var idmax=0;
        for(var i=0; i<Eventos.length;i++){
            if(Eventos[i].id > idmax){
                idmax=Eventos[i].id;
            }
        }
            
        return  idmax;
    }

}

var Eventos=[

    {
        id:1,
        nombre:'Coferencia Angular',
        fecha:'20/08/2018',
        imageUrl:'https://www.offing.es/wp-content/uploads/angular.jpg',
        description:'Un Super evento de Angular',
        ciudad:'Bogota'
    },
    {
        id:2,
        nombre:'Dia del perro callejero',
        fecha:'20/08/2018',
        imageUrl:'https://1.bp.blogspot.com/-gXp6_bgyfOo/Ti4yuXOdyTI/AAAAAAAABU8/3WvEMXJkbUM/s1600/Cartel+Perro+Callejero.JPG',
        description:'Adopta un perro',
        ciudad:'Bogota'
    },
    {
        id:3,
        nombre:'Coferencia Boostrap',
        fecha:'20/08/2018',
        imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description:'Un Super evento de Angular',
        ciudad:'Bogota'
    },
    {
        id:4,
        nombre:'Coferencia javascript',
        fecha:'20/08/2018',
        imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description:'Un Super evento de Angular',
        ciudad:'Bogota'
    }, 
    {
        id: 5,
        nombre: 'Conferencia Angular',
        fecha: '20/08/2018',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 6,
        nombre: 'Conferencia React',
        fecha: '20/08/2018',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 7,
        nombre: 'Conferencia Vue',
        fecha: '20/08/2018',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 8,
        nombre: 'Conferencia Ionic',
        fecha: '20/08/2018',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 9,
        nombre: 'Conferencia Rails',
        fecha: '20/08/2018',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 10,
        nombre: 'Conferencia Rails',
        fecha: '20/08/2018',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    }

]