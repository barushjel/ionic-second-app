import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  dataInformation : any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    console.log("INIT");

    this.dataInformation = this.dataService.getPosts()
      .pipe(
        tap(posteos => {
          console.log(posteos);
        })
      );
    /*  
    .subscribe ((posts: any[]) => {
          console.log(posts);
          this.dataInformation = posts;
      });
      */
  }

}
