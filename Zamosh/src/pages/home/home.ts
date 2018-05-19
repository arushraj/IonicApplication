import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http'

//App Service
import { AppConstant } from "../../_shared/app-constant";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  banners: any;
  rateCardList: any;
  loader;
  constructor(public navCtrl: NavController, private http: HTTP, private loading: LoadingController, private appConstant: AppConstant) {

    //this.getdata();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.banners = this.appConstant.getBannerList();
  }

  getdata() {
    this.rateCardList = '';
    this.loader = this.loading.create({ content: 'Loading rate list...' });
    this.loader.present();
    let url: any = this.appConstant.getAPIURL(this.appConstant.APP_URL_NAME.SERVICERATEURL);
    //let url: any = this.appConstant.getAPIURL('http://localhost:8080/notes');
    this.http.get(url.URL, {}, {}).then(data => {
      console.log(JSON.stringify(data));
      if (data)
        this.rateCardList = data.data;
      this.loader.dismiss();
    }).catch(error => {
      console.log(JSON.stringify(error));
      this.rateCardList = error;
      this.loader.dismiss();
    });
  }

  // postdata() {
  //   this.http.get('http://zamosh.com/check_user.php', { "phone_number": "7602757972" }, {}).then(data => {
  //     if (data)
  //       this.rateCardList = data.data;
  //   }).catch(error => {
  //     console.log(error);
  //     this.rateCardList = error;
  //   })
  // }

}
