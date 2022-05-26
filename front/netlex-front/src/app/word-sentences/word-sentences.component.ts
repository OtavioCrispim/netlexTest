import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordFrequencyService } from '../word-frequency/service/word-frequency.service';
import { WordSentencesService } from './service/word-sentences.service';

@Component({
  selector: 'app-word-sentences',
  templateUrl: './word-sentences.component.html',
  styleUrls: ['./word-sentences.component.css']
})
export class WordSentencesComponent implements OnInit {

  constructor(
    private wordSentencesService: WordSentencesService,
    private wordFrequencyService: WordFrequencyService,
    private route: Router) { }


  inputString: string = "";
  dataSource: any = [];
  stringArray: string[] = [];
  countString: any[number];
  resultString: any;

  ngOnInit() {
  }

  async getWordFrequncy(){
    var json = {
      "word": this.inputString
    }

    this.wordFrequencyService.wordFrequency(json).toPromise().then(
      result =>{
        this.countString = result;
        this.resultString = this.inputString;
      },
      error => {this.route.navigate(['/login'])}
    )
  }

  async getWordSentences(){
    var json = {
      "word": this.inputString
    }

    await this.wordSentencesService.wordSentences(json).toPromise().then(
      result=> {
        this.dataSource = result;

        let regex = new RegExp(`${this.inputString}`, 'gmui');
        this.dataSource.map((element: string, index: number) => {
        //this.dataSource.push(element)
        setTimeout(() => {
          document.querySelectorAll('#word-sentence')[index].innerHTML = `${index+1}. ${element.replace(regex, `<b>${element.match(regex)}</b>`)}`;
        }, 100);
    });
      },
      error => {this.route.navigate(['/login'])}
    );
  }

  async verify(){
    await this.getWordFrequncy();
    await this.getWordSentences();
  }
}
