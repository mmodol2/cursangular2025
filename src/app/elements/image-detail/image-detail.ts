import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-image-detail',
  imports: [],
  templateUrl: './image-detail.html',
  styleUrl: './image-detail.css'
})
export class ImageDetail {
  public imgSrc: InputSignal<string> = input.required<string>();
  public closeImage: OutputEmitterRef<void> = output();

  public onCloseImage(): void {
    this.closeImage.emit();
  }
}
