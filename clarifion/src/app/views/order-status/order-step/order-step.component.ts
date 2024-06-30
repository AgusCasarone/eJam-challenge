import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OrderStatus } from '../../../interfaces/order-status';
import { orderStatusList } from '../../../../../public/assets/orderStatusList';

@Component({
  selector: 'order-step',
  standalone: true,
  imports: [],
  templateUrl: './order-step.component.html',
  styleUrl: './order-step.component.scss'
})
export class OrderStepComponent implements OnInit {

  statusList: OrderStatus[] = orderStatusList;

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
