import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PerksListComponent } from "./perks-list/perks-list.component";
import { MainInfoComponent } from "./main-info/main-info.component";
import { ThumbnailComponent } from "./thumbnail/thumbnail.component";
import { DetailComponent } from "./detail/detail.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'item-description',
    standalone: true,
    templateUrl: './item-description.component.html',
    styleUrl: './item-description.component.scss',
    imports: [PerksListComponent, MainInfoComponent, ThumbnailComponent, DetailComponent]
})
export class ItemDescriptionComponent implements OnInit{

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
