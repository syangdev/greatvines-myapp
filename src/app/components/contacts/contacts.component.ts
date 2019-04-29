import { Component, OnInit } from '@angular/core';
import { SalesForceService } from 'src/app/libs/services/SalesForce.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass'],
  providers: [
    SalesForceService
  ]
})
export class ContactsComponent implements OnInit {

  private contacts;

  constructor(private salesForceSvc: SalesForceService) { }

  ngOnInit() {
    this.salesForceSvc.getContacts().then(data => {
      this.contacts = data;
    });
  }

}
