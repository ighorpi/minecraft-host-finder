import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ShodanSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShodanSearchProvider {
  private ShodanKey = 'SHODAN_KEY';
  private ShodanQuery = 'minecraft';
  private ShodanURL = 'https://api.shodan.io/shodan/host/search?key='+ this.ShodanKey +'&query=' + this.ShodanQuery;
  
  constructor(public http: HttpClient) {
    console.log('Hello ShodanSearchProvider Provider');
  }
  public getHostSearch() {
    return this.http.get(this.ShodanURL);
  }
/*   public getHostsSTest(){
    return {
      "matches":[
        {"product": "Minecraft", "hash": -184834280, "ip": 757122919, "isp": "Choopa, LLC", "transport": "tcp", "hostnames": ["45.32.199.103.vultr.com"], "data": "Minecraft Server\n\nPlayers: 0 online - 100 maximum\nVersion: Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x (protocol 340)\nDescription: {u'text': u'', u'extra': [{u'color': u'white', u'text': u'Infinity'}, {u'color': u'aqua', u'text': u'[MC] The greatest MC SV!'}]}", "asn": "AS20473", "port": 25565, "version": "Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x", "location": {"city": "Dallas", "region_code": "TX", "area_code": 214, "longitude": -96.8207, "country_code3": "USA", "latitude": 32.7825, "postal_code": "75207", "dma_code": 623, "country_code": "US", "country_name": "United States"}, "timestamp": "2018-01-31T20:01:40.753700", "domains": ["vultr.com"], "org": "Choopa, LLC", "os": null, "_shodan": {"crawler": "62861a86c4e4b71dceed5113ce9593b98431f89a", "id": null, "module": "minecraft", "options": {}}, "ip_str": "45.32.199.103"},
        {"product": "Minecraft", "hash": -184834280, "ip": 757122919, "isp": "Choopa, LLC", "transport": "tcp", "hostnames": ["45.32.199.103.vultr.com"], "data": "Minecraft Server\n\nPlayers: 0 online - 100 maximum\nVersion: Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x (protocol 340)\nDescription: {u'text': u'', u'extra': [{u'color': u'white', u'text': u'Infinity'}, {u'color': u'aqua', u'text': u'[MC] The greatest MC SV!'}]}", "asn": "AS20473", "port": 25565, "version": "Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x", "location": {"city": "Dallas", "region_code": "TX", "area_code": 214, "longitude": -96.8207, "country_code3": "USA", "latitude": 32.7825, "postal_code": "75207", "dma_code": 623, "country_code": "US", "country_name": "United States"}, "timestamp": "2018-01-31T20:01:40.753700", "domains": ["vultr.com"], "org": "Choopa, LLC", "os": null, "_shodan": {"crawler": "62861a86c4e4b71dceed5113ce9593b98431f89a", "id": null, "module": "minecraft", "options": {}}, "ip_str": "45.32.199.103"}
      ]
    } */
  }

// https://api.shodan.io/shodan/host/search?key={YOUR_API_KEY}&query={query}&facets={facets}
}
