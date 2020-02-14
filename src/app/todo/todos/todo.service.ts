import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn:'root'
})
export class TodoService{
  todos: any;
  public url = "https://jsonplaceholder.typicode.com/todos";
  constructor(public http: HttpClient) {}
  getToDo():Observable<any>{
    return this.http.get<any>(this.url).
    pipe(map(res=>res))
  }
  createTodo(data:Title): Observable<any> {
    return this.http.post(this.url, data)
  }
  handleError(error: HttpErrorResponse){
    alert(error.message);
    return throwError('Error in HTTP service');
  } 
}
