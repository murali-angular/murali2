import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor() { }
  headerNav = new BehaviorSubject(true); //For Menu
  goBackLink = new BehaviorSubject(''); //For Back Link
  headerContactDetails = new BehaviorSubject(false) //For Header Contact Details
  headerLoginBlock = new BehaviorSubject(true) //For Login Block
  loggedInUser = new BehaviorSubject('') //For User login
 }
}
