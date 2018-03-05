import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions} from '@angular/http'

@Injectable()
export class DbService {
  private uuid:string = null;
  //private DEFAULT_URL:string = "http://221.139.32.62:55100/"
  private DEFAULT_URL:string = "http://localhost:8080/"
  constructor(private _http:Http) { }

  setUser(){ //유저등록
    this.uuid = this.generateUuid();

    let queryString = "user";
    let urlSearchParams = new URLSearchParams();

    urlSearchParams.set('userId', this.uuid);
    
    return this._http.post(this.DEFAULT_URL + queryString, urlSearchParams).subscribe(res=>{
      //console.log(res)
    })
    //console.log(this.uuid);
  }

  updateUser(name, birth, gender){//유저인포에서 받은 정보 update
    let queryString = "user";
    let urlSearchParams = new URLSearchParams();

    urlSearchParams.set('userId', this.uuid);
    urlSearchParams.set('userName', name);
    urlSearchParams.set('userBirth', birth);
    urlSearchParams.set('userGender', gender);
    
    return this._http.put(this.DEFAULT_URL + queryString+"?price=hello", urlSearchParams).subscribe(res=>{
      //console.log(res)
    })
  }

  // insertExamQuestion(cPage, checkExam){
    
  // }
  
  cautionCall(pageName){
    let queryString = "caution";
    let urlSearchParams = new URLSearchParams();

    urlSearchParams.set('userId', this.uuid);
    urlSearchParams.set('pageName', pageName);

    return this._http.post(this.DEFAULT_URL + queryString, urlSearchParams).subscribe(res=>{
      //console.log(res)
    })
  }


  

  pageAccess(pageName){
    let queryString = "page-log";
    let urlSearchParams = new URLSearchParams();

    urlSearchParams.set('userId', this.uuid);
    urlSearchParams.set('pageName', pageName);

    return this._http.post(this.DEFAULT_URL + queryString, urlSearchParams).subscribe(res=>{
      //console.log(res)
    })
  }

  insertTestAnswer(userAnswer, pageName, rightAnswer?){
    let queryString = "test";
    let urlSearchParams = new URLSearchParams();

    urlSearchParams.set('userId', this.uuid);
    urlSearchParams.set('pageName', pageName);
    if(rightAnswer) urlSearchParams.set('rightAnswer', rightAnswer);
    urlSearchParams.set('userAnswer', userAnswer);
   
    return this._http.post(this.DEFAULT_URL + queryString, urlSearchParams).subscribe(res=>{
      //console.log(res)
    })
  }

  insertTestAction(userAnswer, pageName){
    let queryString = "test-action";
    let urlSearchParams = new URLSearchParams();

    urlSearchParams.set('userId', this.uuid);
    urlSearchParams.set('pageName', pageName);
    urlSearchParams.set('userAnswer', userAnswer);

    return this._http.post(this.DEFAULT_URL + queryString, urlSearchParams).subscribe(res=>{
      //console.log(res)

      

      
      
    })
  }

  generateUuid() {

    function uid() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    let tmpUuid = '';
    for(let i=0; i<8; i++){
      tmpUuid += uid();

      
    }
    return tmpUuid;

    
  }




//   getCategoryPictureList(): any {
//     let queryString = "categoryPictureList";
    
//     return this._http.get(
//         this.DEFAULT_URL + queryString)
//     .map((res: Response) => res.json());
// }

// getPictureList(categoryNo): any {
//     let queryString = "getCaptureList";
    
//     let urlSearchParams = new URLSearchParams();
//     urlSearchParams.set('categoryNo', categoryNo);

//     let requestOptions = new RequestOptions();
//     requestOptions.search = urlSearchParams;
//     return this._http.get(
//         this.DEFAULT_URL + queryString, requestOptions)
//     .map((res: Response) => res.json());
// }
// getChannelData(path) {
//   return this._http.get(this.DEFAULT_URL + path)
//          .map((res: Response) => res.json());
// } // getChannelData(path)

// getChannelList(channelNo) {
//   let queryString = "channelList";

//   let urlSearchParams = new URLSearchParams();
//   urlSearchParams.set('getChannelListKey', channelNo);

//   let requestOptions = new RequestOptions();
//   requestOptions.search = urlSearchParams;

//   return this._http.get(this.DEFAULT_URL + queryString, requestOptions)
//          .map((res: Response) => res.json());
// } // getChannelList(channelNo)

// getChannelDetailInfo(channelNo) {
//   let queryString = "channelInfo";
//   let urlSearchParams = new URLSearchParams();
//   urlSearchParams.set('channelNo', channelNo);
//   urlSearchParams.set('userId', this.esEvent.getCurrentUserId());

//   let requestOptions = new RequestOptions();
//   requestOptions.search = urlSearchParams;

//   return this._http.get(this.DEFAULT_URL + queryString, requestOptions)
//          .map((res: Response) => res.json());
// } // getChannelDetailInfo(channelNo)

// updateSubscribeData(channelNo: number, increase: boolean): any {
//   let queryString = "channelSubNo";
//   let urlSearchParams = new URLSearchParams();

//   urlSearchParams.set('channelNo', channelNo.toString());
//   urlSearchParams.set('increase', increase.toString());
//   urlSearchParams.set('userId', this.esEvent.getCurrentUserId());

//   return this._http.post(this.DEFAULT_URL + queryString, urlSearchParams)
//          .map((res: Response) => res);
// } // updateSubscribeData(channelNo: number, increase: boolean)

// getChannelRelationVideoList(channelNo: number, videoGroupNo: number){
//   let queryString = "channelRelationVideoList";
//   let urlSearchParams = new URLSearchParams();
//   urlSearchParams.set('channelNo', channelNo.toString());
//   urlSearchParams.set('videoGroupNo', videoGroupNo.toString());

//   let requestOptions = new RequestOptions();
//   requestOptions.search = urlSearchParams;

//   return this._http.get(this.DEFAULT_URL + queryString, requestOptions).map((res: Response) => res.json());
// } // getChannelRelationVideoList(channelNo: number, videoGroupNo: number)

}
