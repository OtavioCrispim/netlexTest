import { Component, OnInit, ElementRef } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "body",
  template:
    "<router-outlet></router-outlet>"
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    //this.localNotificationCenter();
    this.elementRef.nativeElement.removeAttribute("ng-version");
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
