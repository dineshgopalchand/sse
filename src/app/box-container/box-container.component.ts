import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../service/button.service';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.scss']
})
export class BoxContainerComponent implements OnInit {
  boxList: number[] = [];

  constructor(private buttonService: ButtonService) { }

  ngOnInit() {
    this.buttonService.boxList
      .subscribe(data => {
        this.boxList = data;
      });
  }
  updateButtonList(num: number) {
    this.buttonService.updateBoxList(num);
  }
  resetBox() {
    this.buttonService.updateBoxList();
  }

}
