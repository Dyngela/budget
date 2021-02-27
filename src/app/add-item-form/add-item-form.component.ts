import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item-models';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean = true;
  compare: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(this.item.description != ''){
      //if item has a value, an existing object an been passed into the component. So we dont create but edit 
      this.isNewItem = false;
    }else{
      this.isNewItem = true;
      this.item = new BudgetItem('', 0);
    }
    
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
