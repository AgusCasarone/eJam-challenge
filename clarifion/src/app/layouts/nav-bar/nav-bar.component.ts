import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavButton } from '../../interfaces/nav-button';
import { isPlatformBrowser } from '@angular/common';

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

  navButtons: NavButton[] = [
    {
      title: '30-DAY SATISFACTION GUARANTEE',
      iconUrl: 'assets/icons/guarantee.png',
      order: 1
    },
    {
      title: 'Free delivery on orders over $40.00',
      iconUrl: 'assets/icons/delivery.png',
      order: 2
    },
    {
      title: '50.000+ HAPPY CUSTOMERS',
      iconUrl: 'assets/icons/heart.png',
      order: 3
    },
    {
      title: '100% Money Back Guarantee',
      iconUrl: 'assets/icons/refound.png',
      order: 4
    }
  ]

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
