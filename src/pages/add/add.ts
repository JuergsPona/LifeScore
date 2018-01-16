import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

import { LifeGlobal } from '../../services/lifeGlobal';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  areaTitle: string = '';
  isTitleBlank: boolean = true;

  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
    public lifeGlobal: LifeGlobal) { }

  public AddNewArea() {

    this.lifeGlobal.AddNewArea(this.areaTitle);
    this.CloseModalView();

  }

  public CheckInput(event){

    // console.log(event);
    console.log(this.areaTitle);

    if(this.areaTitle != ''){

      this.isTitleBlank = false;

    }

  }

  public CloseModalView() {

    this.viewCtrl.dismiss();

  }

}
