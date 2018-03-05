import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  @Output()
  outputData = {
    alertMsg: null,
    showNextBtn:true,
    showBorder:true,
    showHeader:false
}
  constructor() { }

  ngOnInit() {
  }

}
