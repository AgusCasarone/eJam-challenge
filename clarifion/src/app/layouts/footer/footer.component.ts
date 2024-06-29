import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'clarifion-footer',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  copyRight: string = 'Copyright (c) 2023 | Clarifionsupport@clarifion.com';
  security: string = 'Secure 256-bit SSL encryption.';

}
