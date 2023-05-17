
import {Observable} from 'rxjs';
import {Category} from "../../../model/Category";

export interface CommonDAO<T> {

  getAll(): Observable<Category[]> | undefined;

  get(id: number): Observable<Category> | undefined;

  update(arg0: T): Observable<Category> | undefined;

  delete(id: number): Observable<Category> | undefined;

  add(arg0: T): Observable<Category> | undefined;

}
