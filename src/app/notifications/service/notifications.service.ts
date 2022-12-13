import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }


getOptions(){
  return ['All Notifications', 'Create a new Notification'];
}


}
