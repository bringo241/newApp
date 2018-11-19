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
  @Output() countChange = new EventEmitter<number>();

  list: Button[];
  history: GraphData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDatas();
  }

  onClick(list): void {
    if (!this.count) {
      this.count = 0;
    }
    if (!this.history) {
      this.history = '';
    }
    if (list.operator === '+') {
      this.count = this.count + 1;
    } else if (list.operator === '-') {
      this.count = this.count - 1;
    }
    //console.log(this.history);
    // this.history += this.count.toString();
    /*this.history.datas.push({
      date: new Date();
      data: this.count
    });*/

  }

  getDatas(): void {
    this.list = this.dataService.getButtons();
  }
}
