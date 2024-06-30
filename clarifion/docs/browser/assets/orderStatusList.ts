import { OrderStatus } from "../../src/app/interfaces/order-status";

export const orderStatusList: OrderStatus[] = [
  {
    iconUrl: 'assets/icons/tick-circle.png',
    titleMd: 'Step 1 : Cart Review',
    titleSm: 'Cart Review',
    isActive: false,
    order: 1
  },
  {
    iconUrl: 'assets/icons/tick-circle.png',
    titleMd: 'Step 2 : Checkout',
    titleSm: 'Checkout',
    isActive: false,
    order: 2
  },
  {
    iconUrl: 'assets/icons/circle-3.png',
    titleMd: 'Step 3 : Special Offer',
    titleSm: 'Special Offer',
    isActive: true,
    order: 3
  },
  {
    iconUrl: 'assets/icons/circle-4.png',
    titleMd: 'Step 4 : Confirmation',
    titleSm: 'Confirmation',
    isActive: false,
    order: 4
  }
]
