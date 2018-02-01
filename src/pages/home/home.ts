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
    this.hosts = this.shodan.getHostSearch().subscribe(data => {
    this.hosts = data;
    console.log(data)
    });
  }
  
/*   setHostsT():void {
   this.hosts = {
     "matches":[
        {"product": "Minecraft", "hash": -184834280, "ip": 757122919, "isp": "Choopa, LLC", "transport": "tcp", "hostnames": ["45.32.199.103.vultr.com"], "data": "Minecraft Server\n\nPlayers: 0 online - 100 maximum\nVersion: Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x (protocol 340)\nDescription: {u'text': u'', u'extra': [{u'color': u'white', u'text': u'Infinity'}, {u'color': u'aqua', u'text': u'[MC] The greatest MC SV!'}]}", "asn": "AS20473", "port": 25565, "version": "Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x", "location": {"city": "Dallas", "region_code": "TX", "area_code": 214, "longitude": -96.8207, "country_code3": "USA", "latitude": 32.7825, "postal_code": "75207", "dma_code": 623, "country_code": "US", "country_name": "United States"}, "timestamp": "2018-01-31T20:01:40.753700", "domains": ["vultr.com"], "org": "Choopa, LLC", "os": null, "_shodan": {"crawler": "62861a86c4e4b71dceed5113ce9593b98431f89a", "id": null, "module": "minecraft", "options": {}}, "ip_str": "45.32.199.103"},
        {"product": "Minecraft", "hash": -184834280, "ip": 757122919, "isp": "Choopa, LLC", "transport": "tcp", "hostnames": ["45.32.199.103.vultr.com"], "data": "Minecraft Server\n\nPlayers: 0 online - 100 maximum\nVersion: Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x (protocol 340)\nDescription: {u'text': u'', u'extra': [{u'color': u'white', u'text': u'Infinity'}, {u'color': u'aqua', u'text': u'[MC] The greatest MC SV!'}]}", "asn": "AS20473", "port": 25565, "version": "Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x", "location": {"city": "Dallas", "region_code": "TX", "area_code": 214, "longitude": -96.8207, "country_code3": "USA", "latitude": 32.7825, "postal_code": "75207", "dma_code": 623, "country_code": "US", "country_name": "United States"}, "timestamp": "2018-01-31T20:01:40.753700", "domains": ["vultr.com"], "org": "Choopa, LLC", "os": null, "_shodan": {"crawler": "62861a86c4e4b71dceed5113ce9593b98431f89a", "id": null, "module": "minecraft", "options": {}}, "ip_str": "45.32.199.103"},
      ]
    }
    this.setPurr();
  } */

  setPurr():void {
    this.hosts = this.hosts.matches.matches;
  }
}
