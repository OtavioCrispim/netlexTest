import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { TopWordsComponent } from "./top-words/top-words.component";
import { WordFrequencyComponent } from "./word-frequency/word-frequency.component";
import { WordSentencesComponent } from "./word-sentences/word-sentences.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: 'login',
   component: LoginComponent,
   data: {title: 'Login'}
  },
  {
    path: 'word-frequency',
    component: WordFrequencyComponent,
    data: {title: 'Word Frequency'}
  },
  {
    path: 'word-sentences',
    component: WordSentencesComponent,
    data: {title: 'Word Sentences'}
  },
  {
    path: 'top-words',
    component: TopWordsComponent,
    data: {title: 'Top Words'}
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
