import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

//quand on met @ avant quelque choce elle devient un decorateur
//les decorateurs viennent aporter des modification a une classe
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
  buttonText!: string;
  constructor(private faceSnapService: FaceSnapService,
              private router: Router){}
  ngOnInit() {
    this.buttonText = 'J\'aime!'
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
  onViewFacesnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
