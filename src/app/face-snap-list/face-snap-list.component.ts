import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapServices } from '../services/face-snaps.service';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
/**
 *
 */

export class FaceSnapListComponent implements OnInit,OnDestroy {
  constructor(private faceSnapsService : FaceSnapServices) {}
  private destroy$! : Subject<boolean>;
  faceSnaps!: FaceSnap[];
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)).subscribe();

  }
  ngOnDestroy(): void {
      this.destroy$.next(true);
  }
}
