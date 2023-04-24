import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linding-page',
  templateUrl: './linding-page.component.html',
  styleUrls: ['./linding-page.component.scss']
})
export class LindingPageComponent implements OnInit {
  constructor(private router: Router){ }

  ngOnInit(): void {
    
  }
  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

}

