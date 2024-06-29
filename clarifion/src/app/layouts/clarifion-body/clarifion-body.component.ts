import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderStatusComponent } from "../../views/order-status/order-status.component";
import { ItemDetailComponent } from "../../views/item-detail/item-detail.component";
import { isPlatformBrowser } from '@angular/common';
import { CustomerReviewComponent } from "../../views/customer-review/customer-review.component";
import { SatisfactionGuaranteeComponent } from "../../views/satisfaction-guarantee/satisfaction-guarantee.component";

@Component({
    selector: 'clarifion-body',
    standalone: true,
    templateUrl: './clarifion-body.component.html',
    styleUrl: './clarifion-body.component.scss',
    imports: [
        RouterOutlet,
        OrderStatusComponent,
        ItemDetailComponent,
        CustomerReviewComponent,
        SatisfactionGuaranteeComponent
    ]
})
export class ClarifionBodyComponent implements OnInit{

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
