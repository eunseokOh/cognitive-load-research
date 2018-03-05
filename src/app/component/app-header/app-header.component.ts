import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { patch } from 'webdriver-js-extender';

import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent {
    @Input() alertMsg: string;
    // <mat-tab label="오리엔테이션"></mat-tab>
    // <mat-tab label="기기 착용"></mat-tab>
    // <mat-tab label="기저반응 측정"></mat-tab>
    // <mat-tab label="기본 검사"></mat-tab>
    // <mat-tab label="본 검사"></mat-tab>
    tabs = [
        {path:'/orien-mov', label:'오리엔테이션', cssClass:'btn btn-default btn-lg'},
        {path:'/devi-eeg', label:'기기 착용', cssClass:'btn btn-default btn-lg'},
        {path:'/base-relax', label:'기저반응 측정', cssClass:'btn btn-default btn-lg'},
        {path:'/test-start', label:'기본 검사', cssClass:'btn btn-default btn-lg'},
        {path:'/stimuli-start', label:'본 검사', cssClass:'btn btn-default btn-lg'}
    ]
    currentUrl:string = null;
    constructor(
        private router:Router
    ,   private location:Location
    ){  
        
        router.events.subscribe(res => {
            
            if(res instanceof NavigationEnd){
                if(res.urlAfterRedirects != null){
                    this.currentUrl = res.urlAfterRedirects;
                }else{
                    this.currentUrl = res.urlAfterRedirects;
                }
                this.btnActive(this.currentUrl);
            }
        });
    }

    pageMove(path){
        this.router.navigateByUrl(path);
        
    }

    btnActive(path:string){
        let tmpPath = path.substr(1,path.indexOf("-")-1);
        
        for(let i in this.tabs){
            if(this.tabs[i]['cssClass'].indexOf('active') >= 0){
                
                this.tabs[i]['cssClass'] = this.tabs[i]['cssClass'].replace(" active","");
                break;
            }
        }

        for(let i in this.tabs){
            if(this.tabs[i]['path'].indexOf(tmpPath) >= 0){
                this.tabs[i]['cssClass'] += " active";
                break;
            }
        }
    }

    
}