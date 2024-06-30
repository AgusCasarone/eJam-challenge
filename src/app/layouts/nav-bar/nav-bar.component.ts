import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavButton } from '../../interfaces/nav-button';
import { isPlatformBrowser } from '@angular/common';
import { navButtons } from '../../../../public/assets/navButtons';

@Component({
  selector: 'clarifion-nav-bar',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  image: string = './delivery.png'
  currentIndex: number = 0;
  isSmallScreen: boolean = false;

  navButtons: NavButton[] = navButtons;

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

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

  nextButton(): void {
    if (this.currentIndex < this.navButtons.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevButton(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.navButtons.length - 1;
    }
  }

}
