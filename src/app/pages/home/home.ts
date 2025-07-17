import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ImageDetail } from '../../elements/image-detail/image-detail';
import { ImagesList } from '../../elements/images-list/images-list';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ImagesList, ImageDetail],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public username: WritableSignal<string>;
  public logged: WritableSignal<boolean>;
  public imgSrc: WritableSignal<string>;

  constructor() {
    this.username = signal("");
    this.logged = signal(false);
    this.imgSrc = signal("");
  }

  public onLogin() {
    if(this.username()) this.logged.set(true);
  }

  public onRandomImage(imgSrc: string): void {
    this.imgSrc.set(imgSrc);
  }

  public onSelectedImage(imgSrc: string): void {
    this.imgSrc.set(imgSrc);
  }

  public onCloseImage(): void {
    this.imgSrc.set("");
  }
}
