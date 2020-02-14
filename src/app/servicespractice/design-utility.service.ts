import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http: HttpClient) { }

  messageAlert() {
    alert("Thanks for subscribe.we wll get in touch with you shortly")
  }

  //product = [
  // { name: "laptop", id: "001" },
  //  { name: "Mobile", id: "002" },
  // { name: "Television", id: "003" },
  //{ name: "Washing amchine", id: "004" }

  // ]

  url = 'https://jsonplaceholder.typicode.com/users';

  product(): Observable<any> {
    return this.http.get(this.url)
  }

  //userName = new Subject<any>();

  userName = new BehaviorSubject('Joshi') 

}
