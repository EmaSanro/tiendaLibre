import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent  {

    @Input() max!: number;

    @Input() quantity!: number;

    @Output() quantityChange : EventEmitter<number> = new EventEmitter<number>();


    upQuantity(): void {
        if(this.quantity < this.max) {
            this.quantity++;
            this.quantityChange.emit(this.quantity);
        }
    }
    
    downQuantity(): void {
        if(this.quantity == 0)
            return;
        this.quantity--;
    }

    onlyNumbers(event: KeyboardEvent) : void {
        if(event.keyCode < 48 || event.keyCode > 57) {
            event.preventDefault();
            return;
        }
    }
}
