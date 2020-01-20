import { Component, OnInit, Input } from '@angular/core';
import { InstagramApiService } from '../instagram-api.service'
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input() pictureUrl: string; 
        desks= [];
        voda:number=1;
        desc=true;
  constructor(private apiService: InstagramApiService)
  {
  }
  ngOnInit() {  
    
    this.apiService.getDescription(this.voda).subscribe((data : any[])=>
    {console.log(data);
     this.desks=data;
    })

  
}
}
