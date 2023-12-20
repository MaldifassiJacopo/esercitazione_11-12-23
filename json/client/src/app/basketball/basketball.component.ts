import { Component } from '@angular/core';
import { scarpe } from '../models/model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballComponent {
  scarpe: scarpe[]
  constructor(private dataService: DataService) {
    this.scarpe = this.dataService.s_Basketball
   }

}
