import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {

    @Input() quantity!: number;

    @Input() totalProds !: number;

    @Input() totalValue !: number;

    @Input() price !: number;

    @Input() isDisabled : boolean = false;

    @Output() quantityChange : EventEmitter<number> = new EventEmitter<number>();

    @Output() totalProdsChange : EventEmitter<number> = new EventEmitter<number>();

    @Output() totalValueChange : EventEmitter<number> = new EventEmitter<number>();

    upQuantity(): void {
        this.isDisabled = false;
        this.quantity++;
        this.totalProds++;
        this.totalValue += this.price;
        this.quantityChange.emit(this.quantity);
        this.totalProdsChange.emit(this.totalProds);
        this.totalValueChange.emit(this.totalValue);
    }
    
    downQuantity(): void {
        if(this.quantity > 1) {
            this.quantity--;
            this.totalProds--;
            this.totalValue -= this.price;
            this.quantityChange.emit(this.quantity);
            this.totalProdsChange.emit(this.totalProds);
            this.totalValueChange.emit(this.totalValue);
        } else {
            this.isDisabled = true;
        }
    }
    
    onlyNumbers(event: KeyboardEvent) : void {
        if(event.keyCode < 48 || event.keyCode > 57) {
            event.preventDefault();
            return;
        }
        this.quantityChange.emit(this.quantity);
    }
}
