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
    if (this.pageNumber== 11)
    this.pageNumber=1;
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
    if (this.light){
    document.getElementById("brm").style.backgroundColor="#37474F";
    document.getElementById("parent").style.backgroundColor="#263238";
    document.getElementById("parent").style.width="100%";
    document.getElementById("parent").style.height="2000%";
    document.getElementById("ramka").style.backgroundColor="#607D8B";
    document.getElementById("pink").style.backgroundColor="#607D8B";
    document.getElementById("floyd").style.backgroundColor="#607D8B";
    document.getElementById("pink").style.boxShadow="0px 0px 0px";
    document.getElementById("floyd").style.boxShadow="0px 0px 0px";
    document.getElementById("ramka").style.boxShadow="0px 0px 0px";
  }
    else
    {
    document.getElementById("brm").style.backgroundColor="#FF1744";
    document.getElementById("parent").style.backgroundColor="#EDE7F6"; 
     document.getElementById("parent").style.width="100%";
     document.getElementById("parent").style.backgroundSize="1%";
    document.getElementById("parent").style.height="2000%";
    document.getElementById("ramka").style.backgroundColor="rgb(240, 186, 222)";
    document.getElementById("pink").style.backgroundColor="rgb(212, 189, 255)";
    document.getElementById("floyd").style.backgroundColor="rgb(212, 189, 255)";
    document.getElementById("pink").style.boxShadow="5px 5px 5px gray";
    document.getElementById("floyd").style.boxShadow="5px 5px 5px gray";
    document.getElementById("floyd").style.boxShadow="5px 5px 5px gray";
    }
    this.light=!this.light; 
}
  loginf()
{
  alert("You are logged in!");
}
}
