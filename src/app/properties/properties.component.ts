import { Component } from '@angular/core';
import { Building } from '../models/Building';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  buildings: Building[] = [
    {
      id: 1,
      slug: 'parkland-north',
      name: 'Parkland North',
      address:{
        street: '4080 Living Arts Drive',
        city: 'Mississauga',
        province: 'ON',
        country: 'Canada'
      } 
    },
    {
      id: 2,
      slug: 'parkland-south',
      name: 'Parkland South',
      address:{
        street: '4090 Living Arts Drive',
        city: 'Mississauga',
        province: 'ON',
        country: 'Canada'
      } 
    }
  ]
}
