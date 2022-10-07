import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  messages: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.messages = this.dataService.getPosts();
    // .subscribe((posts: any) => {
    //   console.log('%c⧭', 'color: #00e600', posts);
    //   this.messages = posts;
    // });
  }

  clickListener(id: number) {
    console.log('%c⧭', 'color: #733d00', 'Click en: ', id);
  }
}
