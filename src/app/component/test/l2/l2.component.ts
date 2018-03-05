import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'

@Component({
  selector: 'app-l2',
  templateUrl: './l2.component.html',
  styleUrls: ['./l2.component.css']
})
export class L2Component implements OnInit, OnDestroy {
  timeout:boolean = false;
  tmpTimeout = null;
  langList = [
    '구',
    '두',
    '수',
    '제',
    '화',
    '남',
    '친',
    '고',
    '급',
    '디',
    '자',
    '인',
    '사',
    '이',
    '즈',
  ]

  inputLangList = [];
  ngOnDestroy(){
    if(this.tmpTimeout) clearTimeout(this.tmpTimeout);
  }
  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('langInputForm') langInputForm:ElementRef;
  

  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true
  }
  constructor(private db:DbService) { 
    //this.langList = this.shuffle(this.langList);
  }

  ngOnInit() {
    this.tmpTimeout = setTimeout(()=>{
      this.timeout = true;
      let tmpInterval = setInterval(() => {
        let firstIpt = <HTMLInputElement> document.getElementById("firstIpt");
        if(firstIpt){
          firstIpt.focus();
          clearInterval(tmpInterval);
        }
      }, 200);
      this.tmpTimeout = setTimeout(()=>{
        this.inputLangs();
        this.tmpTimeout = null;
      },1000*20)
    },1000*30);
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  inputLangs(){
    let forms = <HTMLFormElement> this.langInputForm.nativeElement;
    for(let i=0; i<forms.elements.length; i++){
      let item = <HTMLInputElement>forms.elements.item(i);
      if(item != null){
          this.inputLangList.push(item.value);
        //
      }
    }
    //console.log(this.inputLangList);
    //console.log(this.langList);
    this.db.insertTestAnswer(this.inputLangList.toString(), "test-L2", this.langList.toString());
    this.parentEventHandler.emit({"nextPage":true});
  }

}
