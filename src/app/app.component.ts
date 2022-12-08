import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ListObject } from './list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  list: ListObject[] = [];
  title = 'innovapost solution';

  subscription: Subscription = new Subscription();

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.subscription = this.appService
      .getList()
      .subscribe((list: ListObject[]) => {
        this.list = list;
        console.log('list data', this.list);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
