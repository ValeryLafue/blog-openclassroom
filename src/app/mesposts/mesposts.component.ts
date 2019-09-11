import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mesposts',
  templateUrl: './mesposts.component.html',
  styleUrls: ['./mesposts.component.scss']
})
export class MespostsComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onDontLoveIt() {
    this.loveIts--;
    console.log('Not love ' + this.loveIts);
  }

  onLoveIt() {
    this.loveIts++;
    console.log('love ' + this.loveIts);
  }

}
