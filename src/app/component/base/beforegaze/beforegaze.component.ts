import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beforegaze',
  templateUrl: './beforegaze.component.html',
  styleUrls: ['./beforegaze.component.css']
})
export class BeforegazeComponent implements OnInit {
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:true,
      showBorder:true
  }
  constructor() { }

  ngOnInit() {
  }




}
