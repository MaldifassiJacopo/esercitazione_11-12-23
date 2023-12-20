import { Component } from '@angular/core';
import { scarpe } from '../models/model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-streetwear',
  templateUrl: './streetwear.component.html',
  styleUrls: ['./streetwear.component.css']
})
export class StreetwearComponent {
  scarpe: scarpe[]
  constructor(private dataService: DataService) {
    this.scarpe = this.dataService.s_Streetwear
   }
}
