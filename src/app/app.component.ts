import { AfterViewInit, Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NotifierService } from './notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  tabGroup: any;
  constructor(private notifierService: NotifierService) {}
  ngAfterViewInit(): void {
    console.log('tabChangeEvent')
  }

  openSnackBar() {
    this.notifierService.openSnackBar()
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
  }
  title = 'tabs-default';
}
