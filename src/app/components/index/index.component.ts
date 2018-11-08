import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  users: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
        console.log('res');
        this.users = res;
      }, err => {
        console.log(err)
      })
  }

}
