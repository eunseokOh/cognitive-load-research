import { Component, OnInit, Output, EventEmitter, ViewChild,ElementRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @ViewChild('iptName') name:ElementRef;
  @ViewChild('iptBirth') birth:ElementRef;

  gender = null;


  showCheckForms:boolean = true;

  @Output()
  outputData = {
      alertMsg: "인적사항을 확인해주십시오",
      showNextBtn:false,
      showBorder:true,
      checkInfo:true
  }

  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();
  constructor(public snackBar: MatSnackBar, private commons:CommonsService, private dbService:DbService) { }

  ngOnInit() {
  }

  checkForms(){
    let name = this.name.nativeElement.value;
    let birth = this.birth.nativeElement.value;
    let gender = null;
    let elementRadioGenders = document.getElementsByName('gender');
    for(let i = 0; i < elementRadioGenders.length; i++){
      let tmpRadio = <HTMLInputElement>elementRadioGenders[i];
      if(tmpRadio.checked){
        gender = tmpRadio.value;
        break;
      }

    }
    if(name &&  birth && gender){
      this.showCheckForms = false;
      this.parentEventHandler.emit({"nextPage":true});
      this.dbService.updateUser(name, birth, gender);
    }else if(!name){
      this.openSnackBar("이름을 입력해주세요","확인");
    }else if(!birth){
      this.openSnackBar("생년월일을 입력해주세요","확인");
    }else if(this.gender == null){
      
      this.openSnackBar("성별을 선택해주세요","확인");
    }
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1500,
    });
  }

  keyEvent(event){
    
    this.commons.onlyInputNumbers(event);
  }

}
