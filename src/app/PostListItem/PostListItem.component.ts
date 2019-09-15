import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-PostListItem',
  templateUrl: './PostListItem.component.html',
  styleUrls: ['./PostListItem.component.scss']
})
export class PostListItemComponent implements OnInit {

  
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() index: number;

  constructor( private postsService: PostsService) { }

  ngOnInit() {
  }
  
  onDeletePost(index: number) {
    this.postsService.removePost(this.index);
  };


  onDontLoveIt() {
    this.loveIts--;
    console.log('Not love ' + this.loveIts);
  }

  onLoveIt() {
    this.loveIts++;
    console.log('love ' + this.loveIts);
  }



}
