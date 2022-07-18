import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeMenu:boolean = false
  counter:number = 0;

  constructor(private readonly storeService: StoreService) { }

  ngOnInit(): void {

    this.storeService.myCard$.subscribe(products=> this.counter= products.length)
  }

  showMenu(){
    this.activeMenu = !this.activeMenu;

  }

}
