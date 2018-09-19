import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faPen = faPen;
  faTimesCircle = faTimesCircle;

  constructor() {}

  ngOnInit() {}
}
