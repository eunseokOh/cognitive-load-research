import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-eeg',
  templateUrl: './eeg.component.html',
  styleUrls: ['./eeg.component.css']
})
export class EegComponent implements OnInit {
  @Output()
  outputData = {
      alertMsg: "진행자의 안내에 따라 뇌파 측정 기기를 착용해주십시오",
      showNextBtn:true
  }
  constructor() { }

  ngOnInit() {
  }

}
