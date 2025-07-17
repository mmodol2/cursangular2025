import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-images-information',
  imports: [],
  templateUrl: './images-information.html',
  styleUrl: './images-information.css'
})
export class ImagesInformation {
  public images: WritableSignal<any[]>;

  constructor() {
    let imgs = localStorage.getItem("IMAGES");
    if(imgs != null) {
      this.images = signal(JSON.parse(imgs));
    } else {
      this.images = signal([]);
    }
  }
}
