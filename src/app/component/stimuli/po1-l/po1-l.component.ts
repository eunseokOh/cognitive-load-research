import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'

@Component({
  selector: 'app-po1-l',
  templateUrl: './po1-l.component.html',
  styleUrls: ['./po1-l.component.css']
})
export class Po1LComponent implements OnInit, OnDestroy {
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true
  }  
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
        this.db.insertTestAction(tmpInputEle.value, "stimuli-PO1-L"); 
      })
    }
  }

  ngOnDestroy(){
    if(this.tmpTimeout){
      clearTimeout(this.tmpTimeout);
      this.tmpTimeout = null;
    }
    
    let radioVal = this.comService.getRadioBtnValue("exam");
    this.db.insertTestAnswer(radioVal,"stimuli-PO1-L");
  }

  

}
