import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'
@Component({
  selector: 'app-to2-l',
  templateUrl: './to2-l.component.html',
  styleUrls: ['./to2-l.component.css']
})
export class To2LComponent implements OnInit {
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true
  }  

  '다음으로 버튼을 클릭하면 화면이 전체화면으로 전한됩니다. 화면 중앙에 나타나는 "X"를 응시하십시오.'
  isFormHidden = true;
  tmpTimeout2 = null;
  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();

  tmpTimeout = null;
  constructor(private comService:CommonsService, private db:DbService) { }

  ngOnInit() {
    this.tmpTimeout = setTimeout(()=>{
      this.tmpTimeout = null;
      this.parentEventHandler.emit({"showNextBtn":true});
    },1000*60*3)

    let inputs = document.querySelectorAll('input');
    for(let i=0; i<inputs.length; i++){
      inputs[i].addEventListener("click",(event)=>{
        let tmpInputEle = <HTMLInputElement>event.target;
        this.db.insertTestAction(tmpInputEle.value, "stimuli-TO2-L"); 
      })
    }

    this.tmpTimeout2 = setTimeout(()=>{
      this.isFormHidden = false;
      this.tmpTimeout2 = null;

      
      
      
    },1000*60)

    
  }

  ngOnDestroy(){
    if(this.tmpTimeout){
      clearTimeout(this.tmpTimeout);
      this.tmpTimeout = null;
    }


    if(this.tmpTimeout2){
      clearTimeout(this.tmpTimeout2);
      this.tmpTimeout2 = null;
    }
    
    let radioVal = this.comService.getRadioBtnValue("exam");
    this.db.insertTestAnswer(radioVal,"stimuli-TO2-L");
  }


}
