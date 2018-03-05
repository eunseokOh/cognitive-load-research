import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'

@Component({
  selector: 'app-l1',
  templateUrl: './l1.component.html',
  styleUrls: ['./l1.component.css']
})
export class L1Component implements OnInit, OnDestroy {
  timeout:boolean = false;
  tmpTimeout = null;
  langList = [
    '인',
    '급',
    '즈',
    '구',
    '화',
    '자',
    '사',
    '이',
    '친',
    '디',
    '수',
    '남',
    '구',
    '고',
    '제'
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
  constructor( private db:DbService) { 
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
    var currentIndex = array.length, temporaryValue, randomIndex;
  
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

    this.db.insertTestAnswer(this.inputLangList.toString(), "test-L1", this.langList.toString());
    this.parentEventHandler.emit({"nextPage":true});
  }

}
