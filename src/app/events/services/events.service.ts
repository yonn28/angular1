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
        imageUrl:'data:image/jpeg;base64,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',
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