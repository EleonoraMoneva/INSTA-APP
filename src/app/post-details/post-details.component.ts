import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  clickedPost: Post;
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postComments: PostComment[] = [];
  newComment: PostComment;
  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<PostDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

      this.newComment= { id: this.data.clickedPost.id, 
                      accountName: '@FLV.MCA', 
                      comment: '',
                      photoUrl: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
                      fullName: 'Filip Vilevski'};

      this.postComments = [
        { id: 1,  fullName: 'John Doe'      , accountName: '@JohnDoe'          , comment: 'Awesome Dog',                     photoUrl:  'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png' },
        { id: 2,  fullName: 'Tom Fisher'    , accountName: '@Fisher'           , comment: 'Love it!!!',                      photoUrl:  'https://images.clipartlogo.com/files/istock/previews/1020/102071463-flat-design-avatar-male-character-icon-vector.jpg' },
        { id: 3,  fullName: 'Criss Cena'    , accountName: '@CCena5'           , comment: 'Nice one',                        photoUrl:  'https://cdn3.vectorstock.com/i/1000x1000/39/87/smiling-men-avatar-profile-cartoon-character-flat-vector-9613987.jpg' },
        { id: 4,  fullName: 'Bo Jeej'       , accountName: '@BoJeej'           , comment: 'How old is it?',                  photoUrl:  'https://cdn5.vectorstock.com/i/1000x1000/53/24/profile-icon-male-emotion-avatar-man-cartoon-vector-15175324.jpg' },
        { id: 5,  fullName: 'Nopal Ken'     , accountName: '@NoKen'            , comment: 'Very good looking one',           photoUrl:  'https://cdn4.vectorstock.com/i/1000x1000/76/73/cartoon-man-character-male-profile-image-vector-15327673.jpg' },
        { id: 6,  fullName: 'Blok Stepansen', accountName: '@BStep'            , comment: 'Beautiful',                       photoUrl:  'https://previews.123rf.com/images/zrestudiorus/zrestudiorus1610/zrestudiorus161000006/66876109-profile-icon-male-avatar-man-hipster-style-fashion-cartoon-guy-beard-glasses-portrait-casual-person-.jpg' },
        { id: 7,  fullName: 'Kristan Adgar' , accountName: '@Kristan.Adgar3'   , comment: 'It has nice skin',                photoUrl:  'https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170616048/80929474-cartoon-man-character-male-profile-image-vector-illustration.jpg' },
        { id: 8,  fullName: 'Alan Wishper'  , accountName: '@A.Wishper'        , comment: 'I cannot wait to see it in real', photoUrl:  'https://static.vecteezy.com/system/resources/previews/000/649/749/non_2x/vector-head-of-cute-little-girl-avatar-character.jpg' },
        { id: 9,  fullName: 'William Jes'   , accountName: '@WJes'             , comment: 'You are lucky one',               photoUrl:  'https://image.freepik.com/vecteurs-libre/personnage-avatar-belle-tete-femme_24877-36776.jpg' },
        { id: 10, fullName: 'Milton Thomas' , accountName: '@MiltonThomas2'    , comment: 'Great !!! :)',                    photoUrl:  'https://image.freepik.com/free-vector/young-man-head-with-beard-avatar-character_24877-36786.jpg' }
      ];
    }

    onComment(){
      this.postComments.push(this.newComment);
      this.newComment.comment='';
    }
}
