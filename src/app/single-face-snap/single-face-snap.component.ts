import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
  buttonText!: string;
  constructor(private faceSnapService: FaceSnapService,
              private route : ActivatedRoute){}
  ngOnInit() {
    this.buttonText = 'J\'aime!'
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFacesnapById(faceSnapId)
  }

  onSnap(){
    if(this.buttonText  ==  'J\'aime!'){
     
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'Je n\'aime plus!')
      this.buttonText =  'Je n\'aime plus!'

    }else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'J\'aime!')
      this.buttonText  =  'J\'aime!'
    }
  }
}
