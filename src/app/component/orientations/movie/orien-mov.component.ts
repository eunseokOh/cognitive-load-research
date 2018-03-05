import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { CommonsService } from '../../../service/commons.service'


@Component({
    selector: 'orien-mov',
    templateUrl: './orien-mov.component.html',
})

export class OrienMovComponent implements OnInit {
    btnPlayPause: boolean = true;
    tmpTimeout = null;
    @Output()
    outputData = {
        alertMsg: "▶ 버튼을 클릭하여 오리엔테이션 영상을 시청하십시오",
        showNextBtn: false
    };

    @Output()
    parentEventHandler:EventEmitter<any> = new EventEmitter<any>();

    constructor(private comService:CommonsService) {
        
        //alert(comService.getTimeString());
        //this.change.emit(outputData);
    }

    ngOnInit() {
        let video = <HTMLVideoElement>document.getElementById('orien-video');
        this.videoEventBinding(video);
    }

    // hideVideoCtr() {
    //     console.log("hide video")
    //     let video = <HTMLVideoElement>document.getElementById('orien-video');
    //     if (!video.paused) {

    //         if (this.tmpTimeout) {
    //             clearTimeout(this.tmpTimeout);
    //             this.tmpTimeout = null;
    //         }
    //         this.tmpTimeout = setTimeout(() => {
    //             this.btnPlayPause = false;
    //             this.tmpTimeout = null;
    //         }, 3000)
    //     }

    // }

    videoEventBinding(video: HTMLVideoElement) {
        video.load();
        video.onplaying = () => {
            
            this.tmpTimeout = setTimeout(() => {
                this.btnPlayPause = false;
                clearTimeout(this.tmpTimeout);
                this.tmpTimeout = null;
            }, 3000)

        }

        video.onpause = () => {
            if (this.tmpTimeout) {
                clearTimeout(this.tmpTimeout);
                this.tmpTimeout = null;
            }

            this.btnPlayPause = true;
        }

        video.onended = () => {
            this.parentEventHandler.emit({"nextPage":true});
        }
    }

    playPauseVideo(event) {
        let video = <HTMLVideoElement>document.getElementById('orien-video');
        if (video.paused) {
            video.play();
            event.target.innerHTML = 'pause_circle_filled';
        } else {
            video.pause();
            event.target.innerHTML = 'play_circle_filled';
        }
    }

    showVideoCtr(event0) {
        if (!this.btnPlayPause) {
            this.btnPlayPause = true;
        }
    }

}