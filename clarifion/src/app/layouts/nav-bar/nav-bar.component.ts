import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavButton } from '../../interfaces/nav-button';

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

  navButtons: NavButton[] = [
    {
      title: '30-DAY SATISFACTION GUARANTEE',
      iconUrl: 'guarantee.png',
      order: 1
    },
    {
      title: 'Free delivery on orders over $40.00',
      iconUrl: 'delivery.png',
      order: 2
    },
    {
      title: '50.000+ HAPPY CUSTOMERS',
      iconUrl: 'heart.png',
      order: 3
    },
    {
      title: '100% Money Back Guarantee',
      iconUrl: 'refound.png',
      order: 4
    }
  ]

  ngOnInit(): void {
  }

}
