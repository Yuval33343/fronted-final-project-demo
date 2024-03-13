import { TaskDuration } from "../../services/task-duration.service";

export class HouseholdTask {
constructor(
public id : number,
public name: string,
public description: string,
public duration: TaskDuration) {}
}

