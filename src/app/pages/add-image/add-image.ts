import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-image',
  imports: [FormsModule],
  templateUrl: './add-image.html',
  styleUrl: './add-image.css'
})
export class AddImage {
  public imgData: WritableSignal<any> = signal({
    'authors': "",
    'date': '',
    'explanation': '',
    'url': '',
    'title': ''
  });

  constructor(private _router: Router) {}

  public onAddImage(): void {
    let imgs = localStorage.getItem("IMAGES");
    let images: any[] = [];
    if(imgs != null) {
      images = JSON.parse(imgs);
    }

    images.push(this.imgData());
    localStorage.setItem("IMAGES", JSON.stringify(images));

    this._router.navigate(['/home']);
  }
}
