import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSlideToggle } from '@angular/material';
import { PostDetailsComponent } from './post-details/post-details.component';
import { InstagramApiService } from './instagram-api.service';
import * as lazica from '../app/posts/posts.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscribe(arg0: string) {
    throw new Error("Method not implemented.");
  }

  title = 'FEIT Workshop';
  pageNumber: number=1;
  posts: Post[] = [];
  light:Boolean=true;
  dop:Boolean=false;
  masa:number=1;
 
  constructor(public dialog: MatDialog, private apiService: InstagramApiService) {

    this.getPosts();
  
  }
  onLoadLess()
  {
    this.pageNumber--;
    if (this.pageNumber<1)
    this.pageNumber=1;
    this.getPosts();
    this.masa--;
    this.apiService.getDescription(this.masa);
  }
  onLoadMore(){
    this.pageNumber++;
    if (this.pageNumber>= 11)
    this.pageNumber=10;
    this.getPosts();
    this.masa++;
    this.apiService.getDescription(this.masa);
  }

  getPosts(){
    this.apiService.getPosts(this.pageNumber).subscribe((receivedPosts)=>{
      this.posts = receivedPosts;
    });
  }
   
mode()
  {
    if (this.light)
    {
      document.getElementById("child").style.background="#341677";
      document.getElementById("brm").style.background="#000272";
      document.getElementById("pink").style.backgroundColor="#4f3b78";
      document.getElementById("floyd").style.background="#4f3b78";
      document.getElementById("lajk").style.backgroundColor="#4f3b78";
      document.getElementById("lajk").style.color="white";
      document.getElementById("lajk").style.boxShadow="0px 0px 0px";
    }
    else{
      document.getElementById("child").style.background="linear-gradient(45DEG,#405DE6,#5851DB,#833AB4,#c13584,#E1306C,#FD1D1D)";
      document.getElementById("brm").style.background="linear-gradient(45DEG,#405DE6,#5851DB,#833AB4,#c13584,#E1306C,#FD1D1D)";
      document.getElementById("pink").style.backgroundColor="#c13584";
      document.getElementById("floyd").style.backgroundColor="#c13584";
      document.getElementById("lajk").style.backgroundColor="rgb(212, 189, 255)";
      document.getElementById("lajk").style.color="black";
      document.getElementById("lajk").style.boxShadow="5px 5px 5px gray";
    }
    this.light=!this.light;
  }
  loginf()
{
  alert("You are logged in!");
}

lajkfunk()
{
}
}
