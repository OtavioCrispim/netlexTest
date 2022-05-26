import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopWordsService } from './service/top-words.service';

@Component({
  selector: 'app-top-words',
  templateUrl: './top-words.component.html',
  styleUrls: ['./top-words.component.css']
})
export class TopWordsComponent implements OnInit {

  constructor(
    private topWordsService: TopWordsService,
    private route: Router) { }

  count: number = 0;
  minWordLength: number = 0;
  dataSource: any = [];

  ngOnInit(): void {
  }

  async getTopWords(){
    var json = {
      "count": this.count,
      "minWordLength": this.minWordLength
    }

    await this.topWordsService.topWords(json).toPromise().then(
      result=> {
        this.dataSource = result;
      },
      error => {this.route.navigate(['/login'])}
    )
  }

}
