import {CategoryDAO} from "../interface/CategoryDAO";
import {Observable, of} from "rxjs";
import {Category} from "../../../model/Category";
import {TestData} from "../../TestData";

class T {
}

export class CategoryDAOArray implements CategoryDAO {

  add(arg0: T): Observable<Category> | undefined {
    return undefined;
  }

  delete(id: number): Observable<Category> | undefined {
    return undefined;
  }

  get(id: number): Observable<Category> | undefined {
    return undefined;
  }

  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }

  search(title: string): Observable<Category[]> | undefined {
    return undefined;
  }

  update(arg0: T): Observable<Category> | undefined {
    return undefined;
  }

}
