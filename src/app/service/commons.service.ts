import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonsService {

  private showNextBtn: boolean = false;
  private cPage: string = null;
  private stimuli_H = {
    pageName : null,
    userAnswer : null
  }
  private h2Value = null;
  private showScroll = false;
  showScrollChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.showScrollChange.subscribe((value)=>{
      this.showScroll = value;
    })
   }

  onlyInputNumbers(event) {
    if (parseInt(event.data)) {

    } else {
      let tmpVal: string = event.target.value;
      event.target.value = tmpVal.replace(/[^0-9]/g, '');
    }
  }
  getCpage() {
    return this.cPage;
  }

  setCpage(cPage) {
    this.cPage = cPage;
  }

  getShowNextBtn() {
    return this.showNextBtn;
  }

  setShowNextBtn(showNextBtn: boolean) {
    this.showNextBtn = showNextBtn;
  }



   getShowScroll(){
    return this.showScroll;
  }

  setShowScroll(value){
    //alert(value)
    this.showScrollChange.next(value);
    
  }

  getRadioBtnValue(eleName) {
    var radios = document.getElementsByName(eleName);

    for (var i = 0, length = radios.length; i < length; i++) {
      let tmpRadio = <HTMLInputElement>radios[i];
      if (tmpRadio.checked) {
        return tmpRadio.value;
      }
    }
  }

  setStimuli_H(pageName, userAnswer){
    this.stimuli_H.pageName = pageName;
    this.stimuli_H.userAnswer = userAnswer;
  }

  getStimuli_H(){
    return this.stimuli_H;
  }

  getH2value(){
    return this.h2Value;
  }
  setH2Value(value){
    this.h2Value = value;
  }

  h2InputCheck(value){
    let formNodes = document.getElementById("h-form").childNodes;
    
    for(let i=0; i<formNodes.length; i++){
      let tmpNode = <HTMLElement>formNodes[i];
      
      if(tmpNode instanceof HTMLElement){
        if(tmpNode.querySelector("input").value == value){
          
          tmpNode.querySelector("input").checked = true;
        }
      }

      
    }

  
  }

  getTimeString(){
    let dt = new Date();
    let year = dt.getFullYear();
    let month = dt.getMonth()+1;
    let day = dt.getDate();
    let hour = dt.getHours();
    let minute = dt.getMinutes();
    let sec = dt.getSeconds();

    //return year+"-"+this.itostr(month)+"-"+this.itostr(day)+"  "+this.itostr(hour)+":"+this.itostr(minute)+":"+this.itostr(sec);
    return this.itostr(hour)+":"+this.itostr(minute)+":"+this.itostr(sec);
  }

  itostr(integer){
    return integer < 10 ? "0"+integer : integer;
  }


}
