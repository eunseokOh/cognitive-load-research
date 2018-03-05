import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShowXComponent } from '../show-x/show-x.component'
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-gaze',
  templateUrl: './gaze.component.html',
  styleUrls: ['./gaze.component.css']
})
export class GazeComponent implements OnInit, OnDestroy {

  constructor(public dialog: MatDialog) { }
  @Output()
  outputData = {
    alertMsg: null,
    showNextBtn: false,
    showBorder: false
  }
  tmpSettimeout = null;
  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    setTimeout(()=>{
      this.openDialog();
    },0)
    
  }
  ngOnDestroy(){
    if(this.tmpSettimeout){
      clearTimeout(this.tmpSettimeout);
      this.tmpSettimeout = null;
    }
  }
  openDialog(): void {

    let dialogRef = this.dialog.open(ShowXComponent, {
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      backdropClass: "gaze-dialog"
    });

    this.tmpSettimeout = setTimeout(()=>{
      dialogRef.close()
      this.parentEventHandler.emit({"nextPage":true});
      this.tmpSettimeout = null;
    }, 10000);

    // dialogRef.afterClosed().subscribe(result => {

    // });
  }
}
