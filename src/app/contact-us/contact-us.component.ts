import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  telInputObject = (event) => {
    console.log('telInputObject() executed!');
  }

  getNumber = (event) => {
    console.log('getNumber() executed!');
  }

  hasError = (event) => {
    console.log('hasError() executed!');
  }

  onCountryChange = (event) => {
    console.log('onCountryChange() executed!');
  }

}
