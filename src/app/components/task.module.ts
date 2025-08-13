import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import TaskComponent from './task.component';
import TaskListComponent from './task-list.component';
import { TaskState } from '../state/task.state';
import PureTaskListComponent from './pure-task-list.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TaskState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  providers: [],
})
export class TaskModule {}
