import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
import { CommonsService } from '../../../service/commons.service'

@Component({
  selector: 'app-to2-h',
  templateUrl: './to2-h.component.html',
  styleUrls: ['./to2-h.component.css']
})
export class To2HComponent implements OnInit {
  showScroll;

  @Output()
  outputData = null;
  constructor(private router:Router, private comService: CommonsService) {
    //this.showScroll = comService.showScroll;
    this.showScroll = comService.getShowScroll();
    comService.showScrollChange.subscribe(value=>{
      this.showScroll = value;
    })
    
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
    this.router.navigateByUrl("/stimuli-TO2-H2")
  }

}
