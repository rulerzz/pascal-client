import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  makeHttpCallstoLoremIpsum(){
    return this.httpClient.get('https://baconipsum.com/api/?type=meat-and-filler');
  }
}
