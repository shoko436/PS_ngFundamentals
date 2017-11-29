import { Component } from '@angular/core'
import { EventService } from './shared/event.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[]
  constructor(private eventService: EventService, private toastrSvc:ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(name: string) {
    this.toastrSvc.success(name)
  }
}