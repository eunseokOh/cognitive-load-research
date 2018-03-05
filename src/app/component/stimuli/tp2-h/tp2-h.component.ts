import { Component, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'
import { CommonsService } from '../../../service/commons.service'

@Component({
  selector: 'app-tp2-h',
  templateUrl: './tp2-h.component.html',
  styleUrls: ['./tp2-h.component.css']
})
export class Tp2HComponent implements OnInit {
  @Output()
  outputData = null;
  constructor(private router:Router, private comService: CommonsService) {

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
  }

  moveH2(){
    this.router.navigateByUrl("/stimuli-TP2-H2")
  }

}
