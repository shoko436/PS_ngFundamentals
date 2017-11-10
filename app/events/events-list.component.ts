import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl:'app/events/events-list.component.html'
})
export class EventsListComponent{
    event = {
        id:1,
        name:'Angular Connect',
        date:'8/11/2017',
        time:'10:00 am',
        price:100.00,
        imageUrl:'app/assets/images/angularconnect-shield.png',
        location:{
            address:'Periferico sur',
            city:'Guadalajara',
            country:'Mexico'
        }
    }
}