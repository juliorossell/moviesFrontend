import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, delay, map, Subject, takeUntil, tap } from 'rxjs';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MoviesService } from 'src/app/shared/services/micro-services/movies-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  movieList: IMovie[] = [];
  loadingPage = false;
  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.loadMovies();
  }

  ngOnDestroy(): void {
      this.destroy$.unsubscribe();
  }

  private loadMovies(){
    this.loadingPage = true;
    this.moviesService.getMovies().pipe(
      delay(500),
      takeUntil(this.destroy$),
      map((res: any) => this.movieList = res.body),
      tap(()=> this.loadingPage = false),
      catchError(async(err) => {
        console.error(err)
      })

    )
    .subscribe();
  }

}
