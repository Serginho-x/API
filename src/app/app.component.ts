import { Component, OnInit} from '@angular/core';
import { HttpTestService} from './http-service.component';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  implements OnInit {
  posts: Post[];
  constructor(private _http: HttpTestService) {}

    ngOnInit() {
        this.getPosts();
    }

    getPosts(): void {
      this._http.get()
      .subscribe(post => this.posts = post);
    }

    add(name: string): void {
      if (!name) {return; }
      this._http.createPost({name} as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
    }

    delete(post: Post): void {
      this.posts = this.posts.filter(p => p !== post);
      this._http.deletePost(post).subscribe();
    }
}
