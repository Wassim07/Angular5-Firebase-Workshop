import { Component, OnInit } from '@angular/core';

import { UploadService } from '../../services/upload.service';
import { Upload } from '../../utils/upload';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'uploads-list',
  templateUrl: './uploads-list.component.html',
  styleUrls: ['./uploads-list.component.css'],
})
export class UploadsListComponent implements OnInit {

  uploads: Observable<Upload[]>;
  showSpinner = true;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe(() => this.showSpinner = false);
  }
}