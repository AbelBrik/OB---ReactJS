import { LEVELS } from "./levels.enum";

export class Task {
    title = '';
    description = '';
    isCompleted = false;
    level = LEVELS.NORMAL;

    constructor(title, description, isCompleted, level) {
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.level = level
    }
}
