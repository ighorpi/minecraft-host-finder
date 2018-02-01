import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ShodanSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShodanSearchProvider {
  private ShodanKey = 'YOUR_SHODAN_KEY';
  private ShodanQuery = 'minecraft';
  private ShodanURL = 'https://api.shodan.io/shodan/host/search?key='+ this.ShodanKey +'&query=' + this.ShodanQuery;
  
  constructor(public http: HttpClient) {
    console.log('Hello ShodanSearchProvider Provider');
  }
  public getHostSearch() {
    return this.http.get(this.ShodanURL);
  }
// https://api.shodan.io/shodan/host/search?key={YOUR_API_KEY}&query={query}&facets={facets}
}
