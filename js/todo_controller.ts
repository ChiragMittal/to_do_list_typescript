
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

        }

        
    }
}