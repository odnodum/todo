import {TaskDAO} from "../interface/TaskDAO";
import {Category} from "../../../model/Category";
import {Observable, of} from "rxjs";
import {Priority} from "../../../model/Priority";
import {Task} from 'src/app/model/Task';
import {TestData} from "../../TestData";

class T {
}

export class TaskDAOArray implements TaskDAO {


    getAll(): Observable<Task[]> {
        return of(TestData.tasks);
    }

    get(id: number): Observable<Task> | undefined {
        return undefined;
    }


    add(arg0: T): Observable<Task> | undefined {
        return undefined;
    }

    delete(id: number): Observable<Task> | undefined {
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

    update(arg0: T): Observable<Task> | undefined {
        return undefined;
    }

}
