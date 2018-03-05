import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class StiEndComponent implements OnInit {
  @Output()
  outputData = {
    alertMsg: null,
    showNextBtn:false,
    showBorder:true,
    showHeader:false,
    showWarning:false
}
  constructor() { }

  ngOnInit() {
  }

}
