import { Component, OnInit } from '@angular/core';
import { cocktailData, Question } from '../models/cocktail.model';
import { CocktailService } from '../services/cocktail-service.service';

@Component({
  selector: 'app-stack-question',
  templateUrl: './stack-question.component.html',
  styleUrls: ['./stack-question.component.css']
})
export class StackQuestionComponent implements OnInit {
  question: any;
  length: number;
  config: any;
  filterString: any = ''; 
  filterKey: any = ['url', 'title', 'answers']; 
  fields = [
    {
      title: 'Question Id'
    },
    {

      title: 'user id'

    },
    {

      title: 'Is answered'

    },
    {

      title: 'Creation date'

    },
    {

      title: 'Answers'

    },
    {

      title: 'score'

    },
    {

      title: 'last activity date'

    },
    {

      title: 'Title'

    },
    {

      title: 'link'

    },
    {

      title: 'Accepted answer id'

    },
    {

      title: 'View count'

    },
    {

      title: 'Tags'

    },
    {

      title: 'user type'

    },
    {

      title: 'Accept rate'

    },
    {

      title: 'last edit date'

    },
    {

      title: 'creation date'
    }
  ];

  constructor(private cocktailService: CocktailService) {
    this.config = {
      input: '',
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: 1,
      from: 1,
      to: 10,
    };
  }

  ngOnInit() {
    this.getData();
  }

  //this function is for to display the list on the basis of search parameter
  searchItemFun() {
    if (this.config.input === '') {
      return;
    }
    this.filterString += this.filterKey[0] + '=' + this.config.input;
    this.getData();
  }

  resetItemFun() {
    // this.filterString = '?';
    if (this.config.input !== '') {
      this.config.input = '';
    }
    this.config.input = '';
    this.getData();
  }

  pageChanged(event) {
    this.filterString = '?';
    this.filterString += 'page=' + event + '&&'
    this.getData();
  }

  getData() {
    const route = this.filterString;
    this.cocktailService.getCocktailData(route).subscribe((data: any) => {
      this.question = data.items;
      this.length = this.question.length;
    });
  }

}
