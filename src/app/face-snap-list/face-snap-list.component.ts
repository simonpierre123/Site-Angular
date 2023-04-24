import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  
  faceSnapes!: FaceSnap[];
  constructor(private faceSnapService: FaceSnapService){}

    ngOnInit(): void {
      // this.faceSnapes = this.faceSnapService.faceSnapes; //faceSnapes represente le tableau dans les service
      this.faceSnapes = this.faceSnapService. getAllFaceSnape(); //getAllFaceSnape() represente la fonction ecrit dans les serice
  }
}
