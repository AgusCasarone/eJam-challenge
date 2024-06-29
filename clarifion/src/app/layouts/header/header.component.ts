import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'clarifion-header',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isSmallScreen: boolean = false;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth < 768;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth < 768;
    }
  }

}
