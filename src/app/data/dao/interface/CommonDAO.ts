
import {Observable} from 'rxjs';
import {Category} from "../../../model/Category";

export interface CommonDAO<T> {

  getAll(): Observable<Category[]> | undefined;

  get(id: number): Observable<Category> | undefined;

  update(T): Observable<Category> | undefined;

  delete(id: number): Observable<Category> | undefined;

  add(T): Observable<Category> | undefined;

}
