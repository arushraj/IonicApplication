import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HTTP } from '@ionic-native/http'

//Components
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { BookingsPage } from '../pages/bookings/bookings';
import { MyBookingPage } from '../pages/bookings/myBooking/myBooking';
import { BookingHistoryPage } from '../pages/bookings/bookingHistory/bookingHistory'
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

//Services
import { AppConstant } from '../_shared/app-constant';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    BookingsPage,
    MyBookingPage,
    BookingHistoryPage,
    ProfilePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    BookingsPage,
    MyBookingPage,
    BookingHistoryPage,
    ProfilePage,
    HomePage,
    TabsPage
  ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppConstant
  ]
})
export class AppModule { }
