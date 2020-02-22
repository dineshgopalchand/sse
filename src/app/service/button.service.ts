import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  private buttonList = [1, 2, 3, 4];
  private boxToShow: number[] = [];
  private subject = new BehaviorSubject([]);
  constructor() {
    this.updateBoxList();
  }

  updateBoxList(boxNumber?: number) {
    if (boxNumber) {
      const indexVal = this.boxToShow.indexOf(boxNumber);
      if (indexVal !== -1) {
        this.boxToShow.splice(indexVal, 1);
      } else {
        this.boxToShow.push(boxNumber);
        this.boxToShow = this.boxToShow.sort();
      }
    } else {
      this.boxToShow = [...this.buttonList];
      console.log(this.boxToShow);
    }
    this.subject.next(this.boxToShow);
  }
  get boxList(): Observable<number[]> {
    return this.subject;
  }
}
