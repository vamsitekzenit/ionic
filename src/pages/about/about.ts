import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import {NgZone} from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [[Camera]]
})
export class AboutPage {

  
public base64Image: string;
  
  constructor(public navCtrl: NavController,private camera: Camera) {
    
    this.base64Image = "https://placehold.it/150x150";
  }

   
   takepic(){

        this.camera.getPicture({
            quality : 75,
            destinationType : this.camera.DestinationType.DATA_URL,
            sourceType : this.camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false
        }).then(imageData => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }

   }
  


