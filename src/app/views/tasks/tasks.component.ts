import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from 'src/app/model/Task';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  public dataSource: MatTableDataSource<Task>;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);

    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }


  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  public getPriorityColor(task: Task) {
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff';
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
