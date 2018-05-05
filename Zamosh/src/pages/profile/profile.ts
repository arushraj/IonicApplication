import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'profile-page',
    templateUrl: 'profile.html'
})

export class ProfilePage {
    pageTitle: string;
    constructor(public navCtrl: NavController) {
        this.pageTitle = 'My Profile';
    }
}