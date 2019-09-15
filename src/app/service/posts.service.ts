import { Subject } from 'rxjs';
import { Post } from '../model/post.model';


export class PostsService {

postsSubject = new Subject <any[]>();

private  posts = [
    {
      index: 0,
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl libero, euismod non tellus eu, venenatis tempus lacus. Nulla ac faucibus magna, at mattis tellus. Duis magna arcu, accumsan id lectus vel, feugiat imperdiet sapien. Quisque dapibus dui non congue imperdiet. Donec at lorem ut erat. ',
    loveIts: 12,
      create_at: new Date
    },
    {
      index: 1,
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl libero, euismod non tellus eu, venenatis tempus lacus. Nulla ac faucibus magna, at mattis tellus. Duis magna arcu, accumsan id lectus vel, feugiat imperdiet sapien. Quisque dapibus dui non congue imperdiet.',
    loveIts: 0,
      created_at: new Date
    },
    {
      index: 2,
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl libero, euismod non tellus eu, venenatis tempus lacus. Nulla ac faucibus magna, at mattis tellus. Duis magna arcu, accumsan id lectus vel, feugiat imperdiet sapien. Donec at lorem ut erat.',
      loveIts: 16,
      created_at: new Date 
    }
  ];

emitPosts() {
  this.postsSubject.next(this.posts.slice());
}

createNewPost(post: Post) {
  this.posts.push(post);
  this.emitPosts();

}

removePost(index: number) {
  this.posts.splice(index, 1);
  this.emitPosts();
}

loveIt(index: number) {
  this.posts[index].loveIts++;
  console.log(this.posts[index].title);
  console.log(`loveNumber: ${ this.posts[index].loveIts }`);
  this.emitPosts();
}

dontLoveIt(index: number) {
  this.posts[index].loveIts--;
  console.log(this.posts[index].title);
  console.log(`loveNumber: ${ this.posts[index].loveIts }`);
  this.emitPosts();
}

}



