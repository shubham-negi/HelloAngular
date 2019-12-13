import { Component, ViewChild, ElementRef, NgZone, Renderer } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloAngular';

  @ViewChild('spinnerElement', null)
  spinnerElement: ElementRef;

  constructor(private router: Router,
              private ngZone: NgZone,
              private renderer: Renderer) {
    this.router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        // setTimeout(() => {
        //   this.renderer.setElementStyle(
        //     this.spinnerElement.nativeElement,
        //     'opacity',
        //     '1'
        //   );
        //   }, 1000);
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'display',
          'block'
        );

      });
      console.log('show spinner!');
    } else if (event instanceof NavigationEnd) {
      setTimeout(() => this._hideSpinner(), 1000);
    } else if (event instanceof NavigationCancel) {
      this._hideSpinner();
    } else if (event instanceof NavigationError) {
      this._hideSpinner();
    }
  }

  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'display',
        'none'
      );
    });
    console.log('hide spinner called!');
  }

}
