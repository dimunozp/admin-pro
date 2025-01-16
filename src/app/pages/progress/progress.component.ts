import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress: number = 50;

  get getPercentage() {
    return `${this.progress}%`;
  }

  changePercentage(value: number): number {

    if(this.progress >= 100 && value >= 0)
      return this.progress = 100;

    if(this.progress <= 0 && value < 0)
      return this.progress = 0;

    return this.progress += value;
  }

}
