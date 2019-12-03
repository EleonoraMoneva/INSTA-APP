import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostDetailsComponent } from './post-details/post-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';

  constructor(public dialog: MatDialog) {}

  onClick(){
    const dialogRef = this.dialog.open(PostDetailsComponent, {
      width: '750px',
      height: '700px',
      data: {name: "FIco", pictureUrl: "https://material.angular.io/assets/img/examples/shiba1.jpg"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // // this.animal = result;
    });
  }
}
