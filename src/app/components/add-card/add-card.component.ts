import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  @Input() counter:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
