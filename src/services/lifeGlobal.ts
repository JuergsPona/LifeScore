
import { Injectable } from '@angular/core';
import { LoadingController, ModalController, ToastController } from 'ionic-angular';

// Services

@Injectable()
export class LifeGlobal {

    loader: any;
    areas: Array<{ title: string, score: number }> = [];

    constructor(private loadCtrl: LoadingController, private toastCtrl: ToastController) { }

    public GetAllAreas() {

        console.log('getting all areas...');
        return this.areas;

    }

    public AddNewArea(name) {

        let _newArea = {
            title: name,
            score: 0,
        }

        this.areas.push(_newArea);

    }

    public EditArea(name, score) {

        let _index = this.areas.indexOf(name);
        this.areas[_index].score = score;

    }

    public SaveAreasArray(newAreas){

        this.areas = newAreas;

    }


    // Misc

    /*
     * L O A D E R
     */

    public DisplayLoader() {

        this.loader = this.loadCtrl.create({
            dismissOnPageChange: true,
        });

        this.loader.present();

    }

    public DisplayLoaderUninterrupted() {

        this.loader = this.loadCtrl.create();
        this.loader.present();

    }

    public DismissLoader() {

        this.loader.dismiss();

    }

    /*
     * T O A S T
     */


}