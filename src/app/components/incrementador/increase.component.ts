import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-incrementador',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './increase.component.html',
  styles: ``
})
export class IncreaseComponent {

  @Input('value') progress: number = 40;
  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  changePercentage(value: number): number {

    if(this.progress >= 100 && value >= 0){
      this.changeValue.emit(100);
      return this.progress = 100;
    }


    if(this.progress <= 0 && value < 0){
      this.changeValue.emit(0);
      return this.progress = 0;
    }

    this.progress += value;
    this.changeValue.emit(this.progress);
    return this.progress;
  }

}
