import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent {
  faPlusCircle = faPlusCircle;
  faPen = faPen;
  faTimesCircle = faTimesCircle;

  itemToBuy = {
    name: "",
    id: 0
  };
  itemsToBuy = [];
  
  addNewItem() {
    if (this.itemToBuy.id == 0) {
      this.itemsToBuy.unshift({
        id: (new Date()).getTime(),
        name: this.itemToBuy.name
      });
    }
    
    this.itemToBuy = {
      name: "",
      id: 0
    };
  }
  
  updateItem(itemToUpdate) {
    this.itemToBuy = itemToUpdate;
  }
  
  deleteItem(itemToDelete) {
    for (let i = 0; i < this.itemsToBuy.length; i++) {
      if (itemToDelete.id == this.itemsToBuy[i].id) {
        this.itemsToBuy.splice(i, 1);
      }
    }
  }
  
  markItemBought(item) {
    for (var i = 0; i < this.itemsToBuy.length; i++) {
      if (item.id == this.itemsToBuy[i].id) {
        if (this.itemsToBuy[i].bought) {
          this.itemsToBuy[i].bought = false;
        }
        else {
          this.itemsToBuy[i].bought = true;
        }
      }
    }
  }
}
