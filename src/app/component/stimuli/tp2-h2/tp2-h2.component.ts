import { Component, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'
import { CommonsService } from '../../../service/commons.service'
import { DbService } from '../../../service/db.service'

@Component({
  selector: 'app-tp2-h2',
  templateUrl: './tp2-h2.component.html',
  styleUrls: ['./tp2-h2.component.css']
})
export class Tp2H2Component implements OnInit {
  @Output()
  outputData = null;
  constructor(private router:Router, private comService: CommonsService, private db:DbService) {

    let currentUrl = this.router.url
    let curUrl = currentUrl.replace("/stimuli-","").replace(/1/gi,"").replace(/2/gi,"");
    

    if (this.comService.getShowNextBtn() && (this.comService.getCpage() ==curUrl) ) {
      this.outputData = {
        alertMsg: null,
        showNextBtn: true,
        showBorder: true
      }
    }else{
      this.outputData = {
        alertMsg: null,
        showNextBtn: false,
        showBorder: true
      }
    }
   }

   ngOnInit() {
    let inputs = document.querySelectorAll('input');
    for(let i=0; i<inputs.length; i++){
      inputs[i].addEventListener("click",(event)=>{
        let tmpInputEle = <HTMLInputElement>event.target;
        
        this.comService.setStimuli_H("stimuli-TP2-H2",tmpInputEle.value);
        this.db.insertTestAction(tmpInputEle.value, this.router.url.replace("/",""));
      })
    }

    if(this.comService.getH2value() != null){
      this.comService.h2InputCheck(this.comService.getH2value());
    }

  }
  moveH1(){
    this.router.navigateByUrl("/stimuli-TP2-H");
  }

  changevalue(event){
    this.comService.setH2Value(event.target.value)
  }
}
