/// <reference path='./_all.ts' />

module todo {
    export class TodoCtrl {
        private todos : TodoItem[];

        public static $inject = [
			'$scope',
			'filterFilter'
        ];
        
        constructor(
            private $scope : todoScope ,
            private filterFilter
        ){

            this.todos = $scope.todos ;

            $scope.newTodo = '';
            $scope.editedTodo = null ;
            $scope.vm = this;

            $scope.$watch('todo', () => this.todosCount(), true);

        }

        todosCount(){

            this.$scope.remainingCount = this.filterFilter(this.todos, { completed: false }).length;
            this.$scope.completeCount = this.todos.length - this.$scope.remainingCount ;
            this.$scope.allChecked = ! this.$scope.remainingCount ;

        }

        addTodo(){
            var newTodo :string = this.$scope.newTodo.trim();

            if(!newTodo.length)
                return;

                this.todos.push(new TodoItem(newTodo, false));
                this.$scope.newTodo = '';    
        }

        editTodo(todoItem : TodoItem){

            this.$scope.editedTodo = todoItem;
            this.$scope.originalTodo = angular.extend({},todoItem);

        }

        done_editTodo (todoItem : TodoItem){

            this.$scope.editedTodo = null;
            this.$scope.originalTodo = null;
            todoItem.title = todoItem.title.trim();

            if(!todoItem.title){
                this.deleteTodo(todoItem);
            }

        }

        deleteTodo(todoItem : TodoItem){

            this.todos.splice(this.todos.indexOf(todoItem), 1);

        }

        clear_completedTodo (){
            this.$scope.todos = this.todos = this.todos.filter(todoItem => !todoItem.completed);
        }

        markall (todoItem : TodoItem){
            this.todos.forEach(todoItem => { todoItem.completed  });
        }

        
    }
}