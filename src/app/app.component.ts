import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-openclassroom';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl libero, euismod non tellus eu, venenatis tempus lacus. Nulla ac faucibus magna, at mattis tellus. Duis magna arcu, accumsan id lectus vel, feugiat imperdiet sapien. Quisque dapibus dui non congue imperdiet. Donec at lorem ut erat. ',
      loveIts: 12,
      created_at: 'Wed Sep 12 2019 00:18:13'
    },
    {
      title: 'Mon deuxième post ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl libero, euismod non tellus eu, venenatis tempus lacus. Nulla ac faucibus magna, at mattis tellus. Duis magna arcu, accumsan id lectus vel, feugiat imperdiet sapien. Quisque dapibus dui non congue imperdiet.',
      loveIts: 0,
      created_at: 'Wed Sep 11 2019 14:48:13'
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl libero, euismod non tellus eu, venenatis tempus lacus. Nulla ac faucibus magna, at mattis tellus. Duis magna arcu, accumsan id lectus vel, feugiat imperdiet sapien. Donec at lorem ut erat.',
      loveIts: 99,
      created_at: 'Wed Sep 11 2019 14:49:13'
    }
  ];
}
