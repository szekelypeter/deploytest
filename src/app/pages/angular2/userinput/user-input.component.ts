import {Component, OnInit} from "@angular/core";

@Component({
  selector: "user-input",
  templateUrl: "user-input.html",
  styleUrls: ["user-input.css"],
})
export class UserInputComponent {

  userInputs = '';
  userInputConts = '';

  onKey(value: string) {
    this.userInputConts = value;
  }


  newUserInput(value: string) {
    this.userInputs = value;
  }


}
