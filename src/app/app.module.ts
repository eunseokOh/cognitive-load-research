

//service
import {PageListService} from './service/page-list.service'
import {CommonsService} from './service/commons.service'
import {DbService } from './service/db.service'

//module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations'
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpModule} from '@angular/http';

//component
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { OrienMovComponent } from './component/orientations/movie/orien-mov.component'
import { EegComponent } from './component/device/eeg/eeg.component';
import { RelaxComponent } from './component/base/relax/relax.component';
import { N1Component } from './component/test/n1/n1.component';

import { DefaultGridComponent } from './component/grid/default-grid/default-grid.component';
import { InfoComponent } from './component/orientations/info/info.component';
import { HrvComponent } from './component/device/hrv/hrv.component';
import { BeforegazeComponent } from './component/base/beforegaze/beforegaze.component';
import { GazeComponent } from './component/base/gaze/gaze.component';
import { ShowXComponent } from './component/base/show-x/show-x.component';
import { EndComponent } from './component/base/end/end.component';
import { N2Component } from './component/test/n2/n2.component';
import { L1Component } from './component/test/l1/l1.component';
import { L2Component } from './component/test/l2/l2.component';
import { C1Component } from './component/test/c1/c1.component';
import { C2Component } from './component/test/c2/c2.component';
import { StartComponent } from './component/stimuli/start/start.component';
import { To1LComponent } from './component/stimuli/to1-l/to1-l.component';
import { To1HComponent } from './component/stimuli/to1-h/to1-h.component';
import { To2LComponent } from './component/stimuli/to2-l/to2-l.component';
import { To2HComponent } from './component/stimuli/to2-h/to2-h.component';
import { Tp1LComponent } from './component/stimuli/tp1-l/tp1-l.component';
import { Tp1HComponent } from './component/stimuli/tp1-h/tp1-h.component';
import { Tp2LComponent } from './component/stimuli/tp2-l/tp2-l.component';
import { Tp2HComponent } from './component/stimuli/tp2-h/tp2-h.component';
import { Po1LComponent } from './component/stimuli/po1-l/po1-l.component';
import { Po1HComponent } from './component/stimuli/po1-h/po1-h.component';
import { Po2LComponent } from './component/stimuli/po2-l/po2-l.component';
import { Po2HComponent } from './component/stimuli/po2-h/po2-h.component';
import { To1H2Component } from './component/stimuli/to1-h2/to1-h2.component';
import { To2H2Component } from './component/stimuli/to2-h2/to2-h2.component';
import { Tp1H2Component } from './component/stimuli/tp1-h2/tp1-h2.component';
import { Tp2H2Component } from './component/stimuli/tp2-h2/tp2-h2.component';
import { AlertComponent } from './component/alert/alert/alert.component';
import { StopComponent } from './component/stop/stop/stop.component';
import { Po1H2Component } from './component/stimuli/po1-h2/po1-h2.component';
import { Po2H2Component } from './component/stimuli/po2-h2/po2-h2.component';
import { StiEndComponent } from './component/stimuli/end/end.component';

//directive
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  entryComponents:[
    ShowXComponent,
    AlertComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    OrienMovComponent,
    EegComponent,
    RelaxComponent,
    N1Component,

    DefaultGridComponent,
    InfoComponent,
    HrvComponent,
    BeforegazeComponent,
    GazeComponent,
    EndComponent,
    N2Component,
    L1Component,
    L2Component,
    C1Component,
    C2Component,
    StartComponent,

    ShowXComponent,
    To1LComponent,
    To1HComponent,
    To2LComponent,
    To2HComponent,
    Tp1LComponent,
    Tp1HComponent,
    Tp2LComponent,
    Tp2HComponent,
    Po1LComponent,
    Po1HComponent,
    Po2LComponent,
    Po2HComponent,
    To1H2Component,
    To2H2Component,
    Tp1H2Component,
    Tp2H2Component,
    AlertComponent,
    StopComponent,
    Po1H2Component,
    Po2H2Component,
    StiEndComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatChipsModule,
    MatRadioModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      
      {path:'',redirectTo:'/orien-mov', pathMatch:'full'},

      {path:'orien-mov',   component : OrienMovComponent },
      {path:'orien-info',  component : InfoComponent },

      {path:'devi-eeg',    component : EegComponent },
      {path:'devi-hrv',    component : HrvComponent },

      {path:'base-relax',  component : RelaxComponent },
      {path:'base-beforegaze',  component : BeforegazeComponent },
      {path:'base-gaze',  component : GazeComponent },
      
      {path:'test-start',  component : EndComponent }, 
      {path:'test-N1',     component : N1Component },
      {path:'test-N2',     component : N2Component },
      {path:'test-L1',     component : L1Component },
      {path:'test-L2',     component : L2Component },
      {path:'test-C1',     component : C1Component },
      {path:'test-C2',     component : C2Component },

      {path:'stimuli-start', component:StartComponent },
      {path:'stimuli-TO1-L', component:To1LComponent },
      {path:'stimuli-TO1-H', component:To1HComponent },
      {path:'stimuli-TO1-H2', component:To1H2Component },
      {path:'stimuli-TO2-L', component:To2LComponent },
      {path:'stimuli-TO2-H', component:To2HComponent },
      {path:'stimuli-TO2-H2', component:To2H2Component },
      {path:'stimuli-TP1-L', component:Tp1LComponent },
      {path:'stimuli-TP1-H', component:Tp1HComponent },
      {path:'stimuli-TP1-H2', component:Tp1H2Component },
      {path:'stimuli-TP2-L', component:Tp2LComponent },
      {path:'stimuli-TP2-H', component:Tp2HComponent },
      {path:'stimuli-TP2-H2', component:Tp2H2Component },
      {path:'stimuli-PO1-L', component:Po1LComponent },
      {path:'stimuli-PO1-H', component:Po1HComponent },
      {path:'stimuli-PO1-H2', component:Po1H2Component },
      {path:'stimuli-PO2-L', component:Po2LComponent },
      {path:'stimuli-PO2-H', component:Po2HComponent },
      {path:'stimuli-PO2-H2', component:Po2H2Component },
      {path:'stimuli-end', component:StiEndComponent },

      {path:'stop', component:StopComponent},
      {path:'**',redirectTo:'/orien-mov'}
    ])
  ],
  providers: [
    PageListService,
    NgModel,
    CommonsService,
    DbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
