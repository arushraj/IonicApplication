import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
    selector: 'bookings-page',
    templateUrl: 'bookings.html'
})

export class BookingsPage {
    @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;
    // SwipedTabsIndicator: any = null;
    pageTitle: string;
    selectedTab: string;
    pageTabs: Array<{ id: number, tabName: string }>;

    constructor(public navCtrl: NavController) {
        this.pageTitle = 'My Bookings';
        this.pageTabs = [
            { id: 1, tabName: 'My Bookings' },
            { id: 2, tabName: 'History' }
        ];
        this.selectedTab = '1';
    }

    currentSegment(index) {
        this.SwipedTabsSlider.slideTo(index - 1, 500);
    }

    currentSlide() {
        if ((this.SwipedTabsSlider.getActiveIndex() + 1) === 1 || (this.SwipedTabsSlider.getActiveIndex() + 1) === 2)
            this.selectedTab = (this.SwipedTabsSlider.getActiveIndex() + 1).toString();
    }
}