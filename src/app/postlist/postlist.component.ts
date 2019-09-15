import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  postSubscription: Subscription;
  postList: any[];

  constructor( private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.postList = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }



}
