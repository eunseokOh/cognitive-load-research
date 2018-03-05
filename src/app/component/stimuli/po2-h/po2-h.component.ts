import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
import { CommonsService } from '../../../service/commons.service'

@Component({
  selector: 'app-po2-h',
  templateUrl: './po2-h.component.html',
  styleUrls: ['./po2-h.component.css']
})
export class Po2HComponent implements OnInit {
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
    this.router.navigateByUrl("/stimuli-PO2-H2")
  }

}
