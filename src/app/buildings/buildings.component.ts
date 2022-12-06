import { Component, Input, OnInit } from '@angular/core';
import { Building } from '../models/Building';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  @Input()
  buildings: Building[] = [];

  ngOnInit(){
    console.log(this.buildings);
  }

  getBuildingDetail(building: Building){
    alert(building.name);
  }
}
