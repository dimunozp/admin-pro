import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IncreaseComponent} from "../../components/incrementador/increase.component";

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [
    FormsModule,
    IncreaseComponent
  ],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  process1 : number = 25;
  process2 : number = 35;

  get getProgress1(): string {
    return `${this.process1}%`;
  }

  get getProgress2(): string {
    return `${this.process2}%`;
  }


}
