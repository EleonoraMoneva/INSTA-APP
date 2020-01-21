import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {

  constructor(private http: HttpClient) { }

  getPosts(pageNumber: number):Observable<Post[]>{
    return this.http.get<Post[]>(`https://5e20938de31c6e0014c608c7.mockapi.io/api/v1/users?page=${pageNumber}&limit=1`)
  }
  getDescription(pageNumber: number)
  {
    return this.http.get(`http://5e20938de31c6e0014c608c7.mockapi.io/api/v1/users/${pageNumber}/descriptions`)
  }
  getUsername(pageNumber: number)
  {
    return this.http.get(`http://5e20938de31c6e0014c608c7.mockapi.io/api/v1/users/${pageNumber}/name`)
  }
  getPostComments(postId: number):Observable<PostComment[]>{
    return this.http.get<PostComment[]>(`http://5e20938de31c6e0014c608c7.mockapi.io/api/v1/users/${postId}/postComments`)
  }

  postComment(postId: number, comment: PostComment){
    return this.http.post(`http://5e20938de31c6e0014c608c7.mockapi.io/api/v1/users/${postId}/comments`, comment);
  }
}
