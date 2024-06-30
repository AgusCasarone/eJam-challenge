import { Component } from '@angular/core';
import { ItemPerk } from '../../../../interfaces/item-perk';
import { itemPerks } from '../../../../../../public/assets/itemPerks';

@Component({
  selector: 'clarifion-perks-list',
  standalone: true,
  imports: [],
  templateUrl: './perks-list.component.html',
  styleUrl: './perks-list.component.scss'
})
export class PerksListComponent {

  itemPerks: ItemPerk[] = itemPerks;

}
