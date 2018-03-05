import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { PageListService } from '../app/service/page-list.service'
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { DbService } from './service/db.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AlertComponent} from './component/alert/alert/alert.component'
import {CommonsService} from './service/commons.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  alertMsg = null;
  showBorder: boolean = false;
  showNextBtn: boolean = false;
  showTestPg:boolean = false;
  showHeader:boolean = true;
  tmpSubscribeList = [];
  showStimuliPg:boolean = false;
  showWarning:boolean = true;
  checkInfo = false;
  firstLastCharH:boolean = true;

  tmpNextShowBtnTimeout = null;
  showL = true;
  cUrl:string = null;
  constructor(private pgListService: PageListService, private router: Router, private db:DbService, public dialog: MatDialog, private comService:CommonsService) {
    db.setUser();
  }

  onActivate(event) {
    
    this.alertMsg = event.outputData.alertMsg == null ? 'null' : event.outputData.alertMsg;
    this.showNextBtn = event.outputData.showNextBtn;
    this.showBorder = event.outputData.showBorder;
    this.showHeader = event.outputData.showHeader == null ? true : event.outputData.showHeader;
    this.showWarning = event.outputData.showWarning == null ? true : event.outputData.showWarning;

    let currentUrl = this.router.url
    this.cUrl = currentUrl;
    this.db.pageAccess(currentUrl);

    if(currentUrl.indexOf("test") >= 0){
      if(currentUrl.indexOf("start") < 0){
        document.getElementById("inner-contents").className = "inner-contents-full-screen"
      }else{
        document.getElementById("inner-contents").className = "inner-contents-screen"
      }
      
      //this.showTestPg = true;
      this.paginActive(currentUrl.replace("/test-",""));

    }else if(currentUrl.indexOf("stimuli") >= 0 && currentUrl.indexOf("stimuli-start") < 0 && currentUrl.indexOf("stimuli-end") < 0 ){
      document.getElementById("inner-contents").className = "inner-contents-full-screen"
      this.showStimuliPg = true;
      let curUrl = currentUrl.replace("/stimuli-","").replace(/1/gi,"").replace(/2/gi,"");
      this.paginActive(curUrl);
      
      let lastUrlChar = curUrl.charAt(curUrl.length-1);
      if(lastUrlChar == 'H'){
        let shortUrl = this.cUrl.replace("/stimuli-","");
         
        if(shortUrl == "TO1-H" || shortUrl == "TO2-H"){
          
          setTimeout(()=>{
            this.comService.setShowScroll(true);
          },1000*60)
          
        }
        this.showL = false;
        if(curUrl !=  this.comService.getCpage()){
          if(this.tmpNextShowBtnTimeout) clearTimeout(this.tmpNextShowBtnTimeout);
          this.tmpNextShowBtnTimeout = setTimeout(()=>{
            this.tmpNextShowBtnTimeout = null;
            this.showNextBtn = true;
            this.comService.setShowNextBtn(true);
          },1000*60*3) //
        }
        this.comService.setCpage(curUrl);    
      }else if(lastUrlChar == 'L'){
        this.showL = true;
        if(this.tmpNextShowBtnTimeout) clearTimeout(this.tmpNextShowBtnTimeout);
        this.comService.setCpage(null); 
        this.comService.setShowNextBtn(false);
        //this.comService.setIsStimuliFirst(true);
      }
    }else{
      document.getElementById("inner-contents").className = "inner-contents-screen"
    }if (event.parentEventHandler) {
      
      this.tmpSubscribeList.push(event.parentEventHandler.subscribe(res => {
      
        let tmpKey = Object.keys(res);
        if (tmpKey[0] == "nextPage") {
          this.nextPage();
        }else if(tmpKey[0] =="showNextBtn"){
          this.showNextBtn = true;
        }
      })); 
    }

  }

  paginActive(id){
   
    let pg_a = document.querySelectorAll(".pg-a");
    let tmpSetinterval = setInterval(()=>{
      if(pg_a){
        clearInterval(tmpSetinterval);
        for(let i=0; i<pg_a.length; i++){
          if(pg_a[i].classList.contains("p-active")){
            pg_a[i].classList.remove("p-active");
            break;
          }
        }
        document.getElementById(id).classList.add("p-active");
      }
    },100)
  }

  ngOnDestroy() {
    for (let i in this.tmpSubscribeList) {
      this.tmpSubscribeList[i].unsubscribe();
    }
  }

  onDeActivate(event) {
    this.alertMsg = 'null';
    this.showBorder = false;
    this.showTestPg = false;
    this.checkInfo = false;
    this.showStimuliPg = false;
   
  }

  nextPage() {
    this.comService.setShowScroll(false);
      this.comService.setH2Value(null);
      let tmpCurl = this.router.url;
      let cUrl = null;
      if(tmpCurl.indexOf("stimuli") > 0){
        cUrl = tmpCurl.replace(/\d$/,"");
        let curUrl = this.router.url.replace("/stimuli-","").replace(/1/gi,"").replace(/2/gi,"");
        let lastUrlChar = curUrl.charAt(curUrl.length-1);
        if(lastUrlChar == 'H'){
          this.db.insertTestAnswer(this.comService.getStimuli_H().userAnswer,tmpCurl.replace("/",""))
        }
      }else{
        cUrl = tmpCurl;
      }
      let path = this.pgListService.getPageList(cUrl);
      this.router.navigateByUrl(path);
  }

  movePage(path){
    
    this.router.navigateByUrl(path);
  }

  warning(){
    let dialogRef = this.dialog.open(AlertComponent, {
      width: '250px',
      data:{"pageName":this.cUrl}
    });
    
  }


}


