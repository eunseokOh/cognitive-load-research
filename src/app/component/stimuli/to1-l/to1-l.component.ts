import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'
@Component({
  selector: 'app-to1-l',
  templateUrl: './to1-l.component.html',
  styleUrls: ['./to1-l.component.css']
})
export class To1LComponent implements OnInit {
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true
  }  
  isFormHidden = true;
  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();

  tmpTimeout = null;
  tmpTimeout2 = null;
  constructor(private comService:CommonsService, private db:DbService) { }

  ngOnInit() {
    this.tmpTimeout = setTimeout(()=>{
      this.tmpTimeout = null;
      this.parentEventHandler.emit({"showNextBtn":true});
    },1000*3*60);

    let inputs = document.querySelectorAll('input');
    for(let i=0; i<inputs.length; i++){
      inputs[i].addEventListener("click",(event)=>{
        let tmpInputEle = <HTMLInputElement>event.target;
        this.db.insertTestAction(tmpInputEle.value, "stimuli-TO1-L"); 
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
    this.db.insertTestAnswer(radioVal,"stimuli-TO1-L");
  }

}
