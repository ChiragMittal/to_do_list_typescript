
module todo{
    export interface todoScope extends ng.IScope {
        todos : TodoItem[] ,
        newTodo : string ,
        editedTodo : TodoItem ,
        vm : TodoCtrl
    }
}