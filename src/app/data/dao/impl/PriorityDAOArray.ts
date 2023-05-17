import {PriorityDAO} from "../interface/PriorityDAO";
import {Observable} from "rxjs";
import {Priority} from "../../../model/Priority";

export class PriorityDAOArray implements PriorityDAO {
    add(T): Observable<Priority> | undefined {
        return undefined;
    }

  delete(id: number): Observable<Priority> | undefined {
        return undefined;
    }

  get(id: number): Observable<Priority> | undefined {
        return undefined;
    }

  getAll(): Observable<Priority[]> | undefined {
        return undefined;
    }

  update(T): Observable<Priority> | undefined {
        return undefined;
    }

}
