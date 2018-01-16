import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { LifeGlobal } from '../../services/lifeGlobal';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  areas: Array<{ title: string, score: number }>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public lifeGlobal: LifeGlobal,
    public modalCtrl: ModalController) {

    this.areas = [];
    this.GetAreas();

  }

  // ionViewWillDismiss(){

  //   this.lifeGlobal.

  // }

  public GetAreas() {

    this.areas = this.lifeGlobal.GetAllAreas();
    console.log(this.areas);

  }

  public GoToAdd() {

    let _modal = this.modalCtrl.create(AddPage);
    _modal.present();

  }

}
