import {CategoryDAO} from "../interface/CategoryDAO";
import {Observable} from "rxjs";
import {Category} from "../../../model/Category";

export class CategoryDAOArray implements CategoryDAO {

  add(T): Observable<Category> | undefined {
        return undefined;
    }

  delete(id: number): Observable<Category> | undefined {
        return undefined;
    }

  get(id: number): Observable<Category> | undefined {
        return undefined;
    }

  getAll(): Observable<Category[]> | undefined {
        return undefined;
    }

  search(title: string): Observable<Category[]> | undefined {
        return undefined;
    }

  update(T): Observable<Category> | undefined {
        return undefined;
    }

}
