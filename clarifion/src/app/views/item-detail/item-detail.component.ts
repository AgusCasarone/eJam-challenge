import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ItemTitleComponent } from "./item-title/item-title.component";
import { ItemMainPictureComponent } from "./item-main-picture/item-main-picture.component";
import { ItemDescriptionComponent } from "./item-description/item-description.component";
import { ItemPayComponent } from "./item-pay/item-pay.component";
import { isPlatformBrowser } from '@angular/common';
import { CustomerReviewComponent } from "../customer-review/customer-review.component";
import { SatisfactionGuaranteeComponent } from "../satisfaction-guarantee/satisfaction-guarantee.component";

@Component({
    selector: 'item-detail',
    standalone: true,
    templateUrl: './item-detail.component.html',
    styleUrl: './item-detail.component.scss',
    imports: [
      ItemTitleComponent,
      ItemMainPictureComponent,
      ItemDescriptionComponent,
      ItemPayComponent,
      CustomerReviewComponent,
      SatisfactionGuaranteeComponent
    ]
})
export class ItemDetailComponent implements OnInit{

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
