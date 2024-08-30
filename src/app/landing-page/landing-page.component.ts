import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink,
    UpperCasePipe
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  navigateButtonText!:string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navigateButtonText = 'Continuer vers FaceSnap';
  }

  onNavigateToFaceSnaps(): void {
    this.router.navigateByUrl('facesnaps');
  }


}
