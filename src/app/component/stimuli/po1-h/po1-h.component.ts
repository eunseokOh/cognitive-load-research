import { Component, OnInit, Output } from '@angular/core';
import { CommonsService } from '../../../service/commons.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-po1-h',
  templateUrl: './po1-h.component.html',
  styleUrls: ['./po1-h.component.css']
})
export class Po1HComponent implements OnInit {
  showScroll:boolean = false;

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

  ngOndestroy(){
    
  }

  moveH2(){
    this.router.navigateByUrl("/stimuli-PO1-H2")
  }

}
