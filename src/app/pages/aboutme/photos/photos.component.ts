import {Component} from "@angular/core";


@Component({
  selector: "photos",
  templateUrl: "photos.html",
  styleUrls: ["photos.css"],
})
export class PhotosComponent {

  private photos: string[] = [
    "https://drive.google.com/uc?id=0B7Z3XgBhBGBxVEUyT2NGSXpNMnM",
    "https://drive.google.com/uc?id=0B7Z3XgBhBGBxcUNRVkd0UnJFWnM",
    "https://drive.google.com/uc?id=0B7Z3XgBhBGBxS1Q5WGF4eUxxamM",
  ]
}
