import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Button } from '../datas';
import { GraphData } from '../linedata';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()  count = 0;

  list: Button[];
  history: GraphData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDatas();
  }

  onClick(list): void {

    if (list.operator === '+') {
      this.count = this.count + 1;
    } else if (list.operator === '-') {
      this.count = this.count - 1;
    }
  }

  getDatas(): void {
    this.list = this.dataService.getButtons();
  }
}
