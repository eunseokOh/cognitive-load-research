import { Component, OnInit, Output } from '@angular/core';
import { PageListService } from '../../../service/page-list.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true,
      showHeader:false,
      showWarning:false
  }
  

  constructor(private pgService:PageListService, private route:Router) { 
    
  }

  ngOnInit() {
    
  }

  previousPage(){
    let stopPage = this.pgService.getStopPage();
    this.route.navigateByUrl(stopPage);
  }
  
}
