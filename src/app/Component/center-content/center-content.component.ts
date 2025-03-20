import { Component } from '@angular/core';
import { TodaySalesComponent } from '../today-sales/today-sales.component';
import { VisitorComponent } from '../visitor/visitor.component';
import { RevenueComponent } from '../revenue/revenue.component';
import { CustomerComponent } from '../customer/customer.component';
import { TargetComponent } from '../target/target.component';
import { TopComponent } from '../top/top.component';
import { SalesMapComponent } from '../sales-map/sales-map.component';
import { VolumeComponent } from '../volume/volume.component';

@Component({
  selector: 'app-center-content',
  imports: [TodaySalesComponent,
    VisitorComponent,
    RevenueComponent,
    CustomerComponent,
    TargetComponent,
    TopComponent,
    SalesMapComponent,
    VolumeComponent],
  templateUrl: './center-content.component.html',
  styleUrl: './center-content.component.css'
})
export class CenterContentComponent {

}
