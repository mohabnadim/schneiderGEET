import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quicstart-content',
  templateUrl: './quicstart-content.component.html',
  styleUrls: ['./quicstart-content.component.scss']
})
export class QuicstartContentComponent implements OnInit {
   public accordianView: boolean;

  constructor() {
    this.accordianView = false;
  }

  ngOnInit() {
  }
accView() {
 this.accordianView = true;
}
normalView() {
  this.accordianView = false;
 }
}
