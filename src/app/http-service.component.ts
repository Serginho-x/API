import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { map, tap } from 'rxjs/operators';

@Injectable()

export class HttpTestService {
  private API_URL = 'http://localhost:4000/api';
  constructor (private _http: HttpClient ) {}

     get(): Observable<Post[]> {
      return this._http.get<Post[]>(`${this.API_URL}/post`);
      }

     createPost(post: Post): Observable<Post> {
        return this._http.post<Post>(`${this.API_URL}/post`, post);
      }

      updatePost(id, postParams): Observable<Post> {
        return this._http.put<Post>(`${this.API_URL}/companies/${id}`, postParams);
      }

      deletePost(id): Observable<any> {
        return this._http.delete<any>(`${this.API_URL}/companies/${id}`);
      }
    }

