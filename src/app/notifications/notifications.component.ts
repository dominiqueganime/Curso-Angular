import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './service/notifications.service';



// SELETOR: nome de acesso ao componente;
// TEMPLATE: o arquivo HTML;
// STYLE: arquivo com CSS.

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

// Informações dinâmicas: Para o componente ter acesso ao SERVIÇO, vemos declarar no construtor, e informar que o "array notifications" vai receber o dados do método "getOptions()" que esta no NotificationsService:  
  constructor(notificationsService: NotificationsService){
    this.notifications = this.service.getOptions();
  }

// Informações estáticas (ideal é fazer dinâmica junto a um servidor):
  notifications: string[] = [];

  service = new NotificationsService();

  ngOnInit(): void {

  }



}
