import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { CommonsService } from '../../../service/commons.service'
@Component({
  selector: 'app-hrv',
  templateUrl: './hrv.component.html',
  styleUrls: ['./hrv.component.css']
})
export class HrvComponent implements OnInit, OnDestroy {
  nowTime = null;
  tmpInterval = null;
  @Output()
  outputData = {
      alertMsg: "진행자의 안내에 따라 심박변이도 측정 기기를 착용해주십시오",
      showNextBtn:true
  }
  constructor(private comService:CommonsService) { }

  ngOnInit() {
    this.tmpInterval = setInterval(()=>{
      this.nowTime = this.comService.getTimeString()
    },100);
  }

  ngOnDestroy(){
    if(this.tmpInterval) clearInterval(this.tmpInterval);
  }

}
