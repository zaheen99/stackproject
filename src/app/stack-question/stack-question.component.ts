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
  collection = { count: 0, data: [] };
  filterKey: any = ['url','title', 'answers'];
  searchText;
  fields = [
    {
      field: 'Question Id',
      title: 'Question Id',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'user id',
      title: 'user id',
      width: '3%',
      code: false,
      sort: false
    },
    {
      field: 'Is answered',
      title: 'Is answered',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'Creation date',
      title: 'Creation date',
      width: '8%',
      code: false,
      sort: false
    },
    {
      field: 'Answers',
      title: 'Answers',
      width: '3%',
      code: false,
      sort: false
    },
    {
      field: 'score',
      title: 'score',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'last activity date',
      title: 'last activity date',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'Title',
      title: 'Title',
      width: '10%',
      code: false,
      sort: false
    },
    {
      field: 'link',
      title: 'link',
      width: '10%',
      code: false,
      sort: false
    },
    {
      field: 'Accepted answer id',
      title: 'Accepted answer id',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'View count',
      title: 'View count',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'Tags',
      title: 'Tags',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'user type',
      title: 'user type',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'Accept rate',
      title: 'Accept rate',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'last edit date',
      title: 'last edit date',
      width: '5%',
      code: false,
      sort: false
    },
    {
      field: 'creation date',
      title: 'creation date',
      width: '5%',
      code: false,
      sort: false

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
