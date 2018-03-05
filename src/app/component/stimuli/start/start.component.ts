import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageListService } from '../../../service/page-list.service'
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Output()
  outputData = {
    alertMsg: null,
    showNextBtn:false,
    showBorder:true,
    showHeader:false
}

@Output()
parentEventHandler:EventEmitter<any> = new EventEmitter<any>();

  constructor(private pgService:PageListService) { }
  private testType = '1';
  ngOnInit() {

  }
  
  setTestType(type){
    this.pgService.setTestType(type);
    this.parentEventHandler.emit({"showNextBtn":true});
  }

}
