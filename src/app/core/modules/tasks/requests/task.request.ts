export interface TaskRequest {
  title: string;
  description?: string;
  startDate?: string;
  dueDate?: string;
  typeId?: string;
  stageId?: string;
  boardId?: string;
  assignee?: string;
}
