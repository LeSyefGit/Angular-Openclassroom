import { Component, OnInit, Input } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  content: string;
  loveIts: number = 0;
  created_at: Date = new Date();

  constructor() {
    this.loveIts = 0;
   }

  ngOnInit() {
  }

  getLoveIts() {
    return this.loveIts;
  }
  getTitle(){
    return this.title;
  }

  love(){
    this.loveIts ++ ;
    console.log(this.loveIts +'hello its working')
  }
  dontLove(){
    this.loveIts-- ;
    console.log(this.loveIts +'hello its working')
  }

  getColor() {
    if(this.loveIts > 0) {
      return '#64FA87';   
    } else if(this.loveIts < 0) {
      return '#FF4956';
    }else if(this.loveIts == 0){
      return 'white';
    }
  }

}