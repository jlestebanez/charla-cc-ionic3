import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  photos:Array<any>
  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe( (data:Array<any>) => {
      this.photos = data.slice(1, 10)
    }, error => {
      console.log(error)
    })
  }

  showFicha(photo:any){
    this.navCtrl.push('FichaPage', {
      photo: photo
    })
  }

}
