import { Component, OnInit, Output, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router'
import { DbService } from '../../../service/db.service'
import { PageListService } from '../../../service/page-list.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<AlertComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private router:Router, private db:DbService, private pgService:PageListService) { }

  ngOnInit() {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl("/stop");
    this.db.cautionCall(this.data["pageName"]);
    this.pgService.setStopPage(this.router.url);
  }
}
