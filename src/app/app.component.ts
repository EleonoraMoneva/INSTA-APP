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
    //Session2
    // this.posts = [
    //   { id: 1,  photoUrl:  'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    //   { id: 2,  photoUrl:  'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    //   { id: 3,  photoUrl:  'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'       },
    //   { id: 4,  photoUrl:  'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    //   { id: 5,  photoUrl:  'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    //   { id: 6,  photoUrl:  'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'       },
    //   { id: 7,  photoUrl:  'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    //   { id: 8,  photoUrl:  'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    //   { id: 9,  photoUrl:  'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'       },
    //   { id: 10, photoUrl:  'https://material.angular.io/assets/img/examples/shiba1.jpg' }
    // ];
    
    //Session3
    // this.apiService.getPosts().subscribe((receivedPosts)=>{
    //   this.posts = receivedPosts;
    // });

    //Session4
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
      // // this.animal = result;
    });
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
