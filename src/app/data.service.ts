import { Injectable } from '@angular/core';
import { Button } from './datas';
import { BUTTONS } from './datas';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { }

  getButtons(): Button[] {
    return BUTTONS;
  }
}
