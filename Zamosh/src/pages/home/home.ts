import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: Array<{ image: string, title: string, subTitle: string }>;
  constructor(public navCtrl: NavController) {
    this.cards = [
      { image: 'card-amsterdam.png', title: 'Amsterdam', subTitle: '41 Listings' },
      { image: 'card-madison.png', title: 'Madison', subTitle: '28 Listings' },
      { image: 'card-portland.png', title: 'Portland', subTitle: '37' },
      { image: 'card-saopaolo.png', title: 'São Paulo', subTitle: '41 Listings' },
      { image: 'card-sf.png', title: 'San Francisco', subTitle: '54 Listings' }
    ];
  }

}
