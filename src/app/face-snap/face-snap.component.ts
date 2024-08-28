import { Component,Input,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  userHasSnapped!: boolean;
  snapButtonText!:string;
  ngOnInit(): void {
    this.userHasSnapped=false;
    this.snapButtonText = 'Oh Snap!';
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
      this.faceSnap.removeSnap();
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnapped = false;
  }

  snap() {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
  }
}
