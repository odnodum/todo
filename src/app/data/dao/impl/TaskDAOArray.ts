import {TaskDAO} from "../interface/TaskDAO";
import {Category} from "../../../model/Category";
import {Observable} from "rxjs";
import {Priority} from "../../../model/Priority";
import {Task} from 'src/app/model/Task';

export class TaskDAOArray implements TaskDAO {
  add(T): Observable<Task> | undefined {
    return undefined;
  }

  delete(id: number): Observable<Task> | undefined {
    return undefined;
  }

  get(id: number): Observable<Task> | undefined {
    return undefined;
  }

  getAll(): Observable<Task[]> | undefined {
    return undefined;
  }

  getCompletedCountInCategory(category: Category): Observable<number> | undefined {
    return undefined;
  }

  getTotalCount(): Observable<number> | undefined {
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> | undefined {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> | undefined {
    return undefined;
  }

  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> | undefined {
    return undefined;
  }

  update(T): Observable<Category> | undefined {
    return undefined;
  }

}
