export interface Task{
  id: number;
  typeId: string;
  title: string;
  description: string;
  startDate: string;
  dueDate: string;
  stageId: string;
  boardId: string;
  assignee: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
}
