import { UploadService } from './services/upload.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UploadsListComponent } from './uploads/uploads-list/uploads-list.component';
import { UploadsComponent } from './uploads/uploads.component';
import { UploadDetailComponent } from './uploads/upload-detail/upload-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    UploadsListComponent,
    UploadsComponent,
    UploadDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireDatabaseModule,
    AngularFireStorageModule, // imports firebase/auth, only needed for auth features

    MatProgressBarModule,
    MatButtonModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
