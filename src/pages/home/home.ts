import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LifeGlobal } from '../../services/lifeGlobal';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  areas: Array<{ title: string, score: number }>;

  constructor(public navCtrl: NavController, public lifeGlobal: LifeGlobal) {

    this.areas = [];
    this.GetAreas();

  }

  public GetAreas() {

    this.areas = this.lifeGlobal.GetAllAreas();
    console.log(this.areas);

  }

  public GoToEdit(){

    this.navCtrl.push(EditPage);

  }

}
