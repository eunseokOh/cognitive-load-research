import { Injectable } from '@angular/core';

@Injectable()
export class PageListService {
  private pageList:Array<string> = null;
  private testType = '1';
  private pageType_1 = null;
  private pageType_2 = null;
  private pageType_3 = null;
  private pageType_4 = null;
  private stopPage = 'orien-mov'
  constructor() {
    this.pageType_1 = [
      '/orien-mov',
      '/orien-info',
  
      '/devi-eeg',
      '/devi-hrv',
  
      '/base-relax',
      '/base-beforegaze',
      '/base-gaze',
      '/test-start',
  
      '/test-N1',
      '/test-N2',
      '/test-L1',
      '/test-L2',
      '/test-C1',
      '/test-C2',
  
      '/stimuli-start',
      '/stimuli-TO1-L',
      '/stimuli-TO2-L',
      '/stimuli-TP1-L',
      '/stimuli-TP2-L',
      '/stimuli-PO1-L',
      '/stimuli-PO2-L',
      '/stimuli-end'
    ]

    this.pageType_2 = [
      '/orien-mov',
      '/orien-info',
  
      '/devi-eeg',
      '/devi-hrv',
  
      '/base-relax',
      '/base-beforegaze',
      '/base-gaze',
      '/test-start',
  
      '/test-N1',
      '/test-N2',
      '/test-L1',
      '/test-L2',
      '/test-C1',
      '/test-C2',
  
      '/stimuli-start',
      '/stimuli-PO1-L',
      '/stimuli-PO2-L',
      '/stimuli-TP1-L',
      '/stimuli-TP2-L',
      '/stimuli-TO1-L',
      '/stimuli-TO2-L',
      '/stimuli-end'
    ]

    this.pageType_3 = [
      '/orien-mov',
      '/orien-info',
  
      '/devi-eeg',
      '/devi-hrv',
  
      '/base-relax',
      '/base-beforegaze',
      '/base-gaze',
      '/test-start',
  
      '/test-N1',
      '/test-N2',
      '/test-L1',
      '/test-L2',
      '/test-C1',
      '/test-C2',
  
      '/stimuli-start',
      '/stimuli-TO1-H',
      '/stimuli-TO2-H',
      '/stimuli-TP1-H',
      '/stimuli-TP2-H',
      '/stimuli-PO1-H',
      '/stimuli-PO2-H',
      '/stimuli-end'
    ]

    this.pageType_4 = [
      '/orien-mov',
      '/orien-info',
  
      '/devi-eeg',
      '/devi-hrv',
  
      '/base-relax',
      '/base-beforegaze',
      '/base-gaze',
      '/test-start',
  
      '/test-N1',
      '/test-N2',
      '/test-L1',
      '/test-L2',
      '/test-C1',
      '/test-C2',
  
      '/stimuli-start',
      '/stimuli-PO1-H',
      '/stimuli-PO2-H',
      '/stimuli-TP1-H',
      '/stimuli-TP2-H',
      '/stimuli-TO1-H',
      '/stimuli-TO2-H',
      '/stimuli-end'
    ]


    this.pageList = this.pageType_1;
   }


  setTestType(testType){
    this.testType = testType;
    
    if(testType == 1){
      this.pageList = this.pageType_1;
    }else if(testType == 2){
      this.pageList = this.pageType_2;
    }else if(testType == 3){
      this.pageList = this.pageType_3;
    }else if(testType == 4){
      this.pageList = this.pageType_4;
    }
  }

  getPageList(currentUrl) {
    for(let i in this.pageList){
      if(this.pageList[i] == currentUrl){
        return this.pageList[parseInt(i)+1]
      }
    }
  }

  getStopPage(){
    return this.stopPage;
  }

  setStopPage(page){
    this.stopPage = page;
  }
}
