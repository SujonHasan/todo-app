import { deleteTodoActionCreator, markCompleteActionCreator, markIncompleteActionCreator } from "types/actionCreatorType";
import { complete, incomplete } from "types/storeType";


interface AppPropType {
    complete: complete,
    incomplete: incomplete,
    deleteTodo: deleteTodoActionCreator,
    markComplete: markCompleteActionCreator,
    markIncomplete: markIncompleteActionCreator
}

export default AppPropType;