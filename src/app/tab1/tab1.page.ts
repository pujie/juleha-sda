import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { PersonAddComponent } from '../person-add/person-add.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    private modal: ModalController
  ){
  }
  async addPerson(){
    const _modal = await this.modal.create({
      component:PersonAddComponent,
      componentProps:{}
    })
    return await _modal.present()
  }
}
