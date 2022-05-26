import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordFrequencyService } from './service/word-frequency.service';

@Component({
  selector: 'app-word-frequency',
  templateUrl: './word-frequency.component.html',
  styleUrls: ['./word-frequency.component.css']
})
export class WordFrequencyComponent implements OnInit {

  constructor(
    private wordFrequencyService: WordFrequencyService,
    private route: Router) { }

  inputString: any;
  dataSource: any;
  resultString: any;

  ngOnInit(): void {
  }

  async getWordFrequncy(){
    var json = {
      "word": this.inputString
    }

    this.wordFrequencyService.wordFrequency(json).toPromise().then(
      result =>{
        this.dataSource = result;
        this.resultString = this.inputString
      },
      error => {this.route.navigate(['/login'])}
    )
  }

}
