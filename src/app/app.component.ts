import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  lastSnap!:FaceSnap;
  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnap(
        'The Chuck',
        'I\'m the chuck',
        'https://img.goodfon.com/original/1920x1080/6/3b/missing-in-action-bez-vesti.jpg',
        new Date(),
        100
      ),
      new FaceSnap(
        'The duck',
        'I\'m the duck',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Female_mallard_duck_J2.jpg/800px-Female_mallard_duck_J2.jpg?20130425081342',
        new Date(),
        500
      )
    ];
      this.faceSnaps[1].setLocation('The world!');
  }

}
