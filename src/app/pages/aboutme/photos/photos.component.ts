import {Component} from "@angular/core";
import {photo} from "./photo.model";


@Component({
  selector: "photos",
  templateUrl: "photos.html",
  styleUrls: ["photos.css"],
})
export class PhotosComponent {

  private originalSize = false;
  private originalPhoto: string;

  private photos: photo[] =[
    {
      photoMini: "./app/photos/IMG_20170128_143218.jpg",
      url: "https://drive.google.com/uc?id=0B7Z3XgBhBGBxVEUyT2NGSXpNMnM"
    },
    {
      photoMini: "./app/photos/IMG_20170128_143506.jpg",
      url: "https://drive.google.com/uc?id=0B7Z3XgBhBGBxcVlzSzNEMWZhSjg"
    },
    {
      photoMini: "./app/photos/IMG_20170128_144830.jpg",
      url: "https://drive.google.com/uc?id=0B7Z3XgBhBGBxaURzUUVHUl9JYjA"
    },
  ];

  private getOriginalSize(photo:photo): void {
    this.originalSize = true;
    this.originalPhoto = photo.url;
    console.log(this.originalPhoto);
  }

  private noOriginal(): void {
    this.originalSize = false;
  }
}
