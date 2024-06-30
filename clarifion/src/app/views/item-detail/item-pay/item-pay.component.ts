import { Component } from '@angular/core';
import { SaveComponent } from "./save/save.component";
import { ClaimDiscountComponent } from "./claim-discount/claim-discount.component";
import { PaymentInfoComponent } from "./payment-info/payment-info.component";

@Component({
    selector: 'item-pay',
    standalone: true,
    templateUrl: './item-pay.component.html',
    styleUrl: './item-pay.component.scss',
    imports: [SaveComponent, ClaimDiscountComponent, PaymentInfoComponent]
})
export class ItemPayComponent {

}
