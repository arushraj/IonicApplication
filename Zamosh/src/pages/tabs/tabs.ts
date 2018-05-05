import { Component } from '@angular/core';

import { BookingsPage } from '../bookings/bookings';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs: Array<{ name: string, component: any, tabIcon: string }>;

  constructor() {
    this.tabs = [
      { name: 'Search', component: HomePage, tabIcon: 'ios-search-outline' },
      { name: 'My Bookings', component: BookingsPage, tabIcon: 'ios-list-box-outline' },
      { name: 'Profile', component: ProfilePage, tabIcon: 'ios-contact-outline' }
    ];

  }
}
