import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ClarifionBodyComponent } from "../clarifion-body/clarifion-body.component";

@Component({
    selector: 'clarifion-main-layout',
    standalone: true,
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    imports: [
        RouterModule,
        NavBarComponent,
        HeaderComponent,
        FooterComponent,
        ClarifionBodyComponent
    ]
})
export class MainLayoutComponent {

}
