import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostDetailsComponent } from './post-details/post-details.component';
import { InstagramApiService } from './instagram-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FEIT Workshop';
  pageNumber: number=1;
  posts: Post[] = [];

  constructor(public dialog: MatDialog, private apiService: InstagramApiService) {
   
    this.getPosts();
  }

  onClick(post: Post){
    const dialogRef = this.dialog.open(PostDetailsComponent, {
      width: '750px',
      height: '700px',
      data: {clickedPost: post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onLoadLess()
  {
    this.pageNumber--;
    if (this.pageNumber<1)
    this.pageNumber=1;
    this.getPosts();
  }
  onLoadMore(){
    this.pageNumber++;
    this.getPosts();
  }

  getPosts(){
    this.apiService.getPosts(this.pageNumber).subscribe((receivedPosts)=>{
      this.posts = receivedPosts;
    });
  }
}
