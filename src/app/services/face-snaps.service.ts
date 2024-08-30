import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapServices {
  private faceSnaps : FaceSnap[] =  [
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
    ).withLocation('The world!'),
    new FaceSnap(
      'The duck',
      'I\'m the duck',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Female_mallard_duck_J2.jpg/800px-Female_mallard_duck_J2.jpg?20130425081342',
      new Date(),
      500
    )
  ];
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

}
