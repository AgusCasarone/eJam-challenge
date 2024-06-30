import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { OrderStepComponent } from "./order-step/order-step.component";

@Component({
    selector: 'order-status',
    standalone: true,
    templateUrl: './order-status.component.html',
    styleUrl: './order-status.component.scss',
    imports: [OrderStepComponent]
})
export class OrderStatusComponent implements OnInit {

  isSmallScreen: boolean = false;

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


}
