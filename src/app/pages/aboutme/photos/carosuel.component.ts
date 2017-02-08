import {Component, Input, Output, EventEmitter, OnDestroy} from "@angular/core";

import {photo} from "./photo.model";
@Component ({
    selector: "carousel",
    template: `<div class="carousel">
                    <div class="image-holder" *ngFor="let photo of photosOf; let i = index;" [ngClass]="position[i]" (click)="onOpenClick(carouselItem)">
                          <span class="helper"></span>
                          <img src="{{photo.photoMini}}">   
                    </div>
               </div>`,
  styleUrls: ["photos.css"]
})
export class CarouselComponent implements OnDestroy {

    private position: string[] = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight"];
  private photosCome: photo[];
    private photosOf: photo[];
    private _stopCarousel: boolean = false;

    @Input() set photos(photos: photo[]) {
        this.photosCome = photos;
        this.loadLists();
        this.carousel(-1);
    }

    @Output() openClick: EventEmitter<photo> = new EventEmitter();


    private onOpenClick(item: photo) {
        this.openClick.emit(item);
    }

    private loadLists() {
      this.photosOf= this.photosCome;
        let positionLength = this.position.length;
        let highlightedLength = this.photosOf.length;
        if (positionLength > highlightedLength) {
            let multiple = (Math.floor(positionLength / highlightedLength));
            for (let j = 0; j < multiple; j++) {
                for (let i = 0; i < highlightedLength; i++) {
                    this.photosOf.push(this.photosOf[i]);
                }
            }
        }
        for (let i = 0; i < (this.photosOf.length - positionLength); i++) {
            this.position.push("eight");
        }
    }

    private carousel(index: number) {
        index++;
        let last = this.position.pop();
        this.position.unshift(last);
        if (index > this.photosOf.length) {
            index -= this.photosOf.length;
        }
        if (this._stopCarousel === false) {
            setTimeout(() => this.carousel(index), 10000);
        }

    }

    ngOnDestroy(): void {
        this._stopCarousel = true;
    }

}
