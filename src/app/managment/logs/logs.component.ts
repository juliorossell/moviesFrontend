import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, delay, map, Subject, takeUntil, tap } from 'rxjs';
import { Utils } from 'src/app/shared/helpers/utils';
import { ILog } from 'src/app/shared/interfaces/log';
import { LogsService } from 'src/app/shared/services/micro-services/logs-service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  logs: ILog[] = [];
  loadingPage = false;
  constructor(
    private logService: LogsService,
  ) { }

  ngOnInit() {
    this.loadMovies();
  }

  ngOnDestroy(): void {
      this.destroy$.unsubscribe();
  }

  private loadMovies(){
    this.loadingPage = true;
    this.logService.getLogs().pipe(
      delay(500),
      takeUntil(this.destroy$),
      map((res: any) => {
        this.logs = res.body.map((item: ILog) => {
          item.updateDateFormated = Utils.convertDateFormat(item.updatedAt)
          return item;
        })
      }),
      tap(()=> this.loadingPage = false),
      catchError(async(err) => {
        console.error(err)
      })

    )
    .subscribe();
  }


}
