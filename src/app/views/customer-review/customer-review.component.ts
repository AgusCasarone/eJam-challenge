import { Component } from '@angular/core';
import { UserIdentityComponent } from "./user-identity/user-identity.component";
import { UserReviewComponent } from "./user-review/user-review.component";

@Component({
    selector: 'customer-review',
    standalone: true,
    templateUrl: './customer-review.component.html',
    styleUrl: './customer-review.component.scss',
    imports: [UserIdentityComponent, UserReviewComponent]
})
export class CustomerReviewComponent {

}
