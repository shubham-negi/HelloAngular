import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fake-apis',
  templateUrl: './fake-apis.component.html',
  styleUrls: ['./fake-apis.component.css']
})
export class FakeApisComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getFoods().subscribe(
      data => {
        console.log(data);
        // refresh the list
        this.getFoods();
        return true;
      },
      error => {
        console.error("Error saving food!");
        return Observable.throw(error);
      }
    );;
  }

  getFoods() {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/ditto/');
  }


}
