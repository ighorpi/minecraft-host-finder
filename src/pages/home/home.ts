import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShodanSearchProvider } from '../../providers/shodan-search/shodan-search';
import 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private hosts:any = {
    matches:[]
  };

  constructor(public navCtrl: NavController,
              public shodan: ShodanSearchProvider) {
              this.setHosts();
              }
  setHosts():void {
    this.shodan.getHostSearch().subscribe(data => {
    this.hosts = data;
    console.log(data)
    });

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
    this.setHosts();
  }
  
}
