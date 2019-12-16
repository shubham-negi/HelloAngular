import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckInternetService } from '../shared/services/check-internet.service';
import { Router } from '@angular/router';
import { HttpErrorService } from '../shared/services/http-error.service';

@Component({
  selector: 'app-fake-apis',
  templateUrl: './fake-apis.component.html',
  styleUrls: ['./fake-apis.component.css'],
  providers: [
    CheckInternetService,
    HttpErrorService
  ]
})
export class FakeApisComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private testConnection: CheckInternetService,
    private router: Router,
    private errorService: HttpErrorService) { }

  ngOnInit() {
    this.testConnection.isOnline().subscribe(isOnline => {
      if (isOnline) {
        console.log('YOU ARE ONLINE');
        this.getFoods().subscribe(
          data => {
            console.log(data);
            // refresh the list
            this.getFoods();
            return true;
          },
          error => {
            this.errorService.handle(error);
          }
        );
      } else {
        this.router.navigate(['offline']);
        console.log('YOU ARE OFFLINE');
      }
    });


  }

  getFoods() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto1/');
  }

}
