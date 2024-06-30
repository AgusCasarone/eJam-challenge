import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'payment-info',
  standalone: true,
  imports: [],
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.scss'
})
export class PaymentInfoComponent implements OnInit {

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
