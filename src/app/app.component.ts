import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  aboutMeRoute = false;
  angular2Route = false;

  activeRoute(event): void {
    switch (event) {
      case "angular2":
        this.angular2Route = true;
        this.aboutMeRoute = false;
        console.log(this);
        break;
      case "aboutMe":
        this.angular2Route = false;
        this.aboutMeRoute = true;
        break;
      default:
        this.angular2Route = false;
        this.aboutMeRoute = false;
        console.log(this);
        break;
    }
  }
}
