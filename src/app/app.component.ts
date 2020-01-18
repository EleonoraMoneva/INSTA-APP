import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSlideToggle } from '@angular/material';
import { PostDetailsComponent } from './post-details/post-details.component';
import { InstagramApiService } from './instagram-api.service';
import { ConstantsService } from './common/services/constants.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FEIT Workshop';
  pageNumber: number=1;
  posts: Post[] = [];
  light:Boolean=true;

  constructor(public dialog: MatDialog, private apiService: InstagramApiService) {
   
    this.getPosts();
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
    if (this.pageNumber== 11)
    this.pageNumber=1;
    this.getPosts();
  }

  getPosts(){
    this.apiService.getPosts(this.pageNumber).subscribe((receivedPosts)=>{
      this.posts = receivedPosts;
    });
  }
   
  mode()
  {
    if (this.light){
    document.getElementById("brm").style.backgroundColor="#37474F";
    document.getElementById("parent").style.backgroundColor="#263238";
    document.getElementById("parent").style.width="100%";
    document.getElementById("parent").style.height="2000%";
    document.getElementById("ramka").style.backgroundColor="#607D8B";
  }
    else
    {
    document.getElementById("brm").style.backgroundColor="#FF1744";
    document.getElementById("parent").style.backgroundColor="#EDE7F6"; 
     document.getElementById("parent").style.width="100%";
     document.getElementById("parent").style.backgroundSize="1%";
    document.getElementById("parent").style.height="2000%";
    document.getElementById("ramka").style.backgroundColor="rgb(240, 186, 222)";
    }
    this.light=!this.light;
    
}
}
