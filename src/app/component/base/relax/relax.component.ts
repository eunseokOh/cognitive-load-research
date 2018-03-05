import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-relax',
  templateUrl: './relax.component.html',
  styleUrls: ['./relax.component.css']
})
export class RelaxComponent implements OnInit {
  @Output()
  outputData = {
      alertMsg: "다음 화면을 보며 편안한 상태를 유지해주세요",
      showNextBtn:true
  }
  constructor() { }

  ngOnInit() {
  }

}
