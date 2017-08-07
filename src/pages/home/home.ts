import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   user: Object = {};

  constructor(public navCtrl: NavController) {

    

  }

login(user) {

       console.log(user);

    }


}
