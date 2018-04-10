/// <reference path='./_all.ts' />
var todo;
(function (todo) {
    var TodoItem = /** @class */ (function () {
        function TodoItem(title, completed) {
            this.title = title;
            this.completed = completed;
        }
        return TodoItem;
    }());
    todo.TodoItem = TodoItem;
})(todo || (todo = {}));
/// <reference path='./_all.ts' />
/// <reference path='./_all.ts' />
var todo;
(function (todo) {
    var TodoCtrl = /** @class */ (function () {
        function TodoCtrl($scope, filterFilter) {
            var _this = this;
            this.$scope = $scope;
            this.filterFilter = filterFilter;
            this.todos = $scope.todos;
            $scope.newTodo = '';
            $scope.editedTodo = null;
            $scope.vm = this;
            $scope.$watch('todo', function () { return _this.todosCount(); }, true);
        }
        TodoCtrl.prototype.todosCount = function () {
            this.$scope.remainingCount = this.filterFilter(this.todos, { completed: false }).length;
            this.$scope.completeCount = this.todos.length - this.$scope.remainingCount;
            this.$scope.allChecked = !this.$scope.remainingCount;
        };
        TodoCtrl.prototype.addTodo = function () {
            var newTodo = this.$scope.newTodo.trim();
            if (!newTodo.length)
                return;
            this.todos.push(new todo.TodoItem(newTodo, false));
            this.$scope.newTodo = '';
        };
        TodoCtrl.prototype.editTodo = function (todoItem) {
            this.$scope.editedTodo = todoItem;
            this.$scope.originalTodo = angular.extend({}, todoItem);
        };
        TodoCtrl.prototype.done_editTodo = function (todoItem) {
            this.$scope.editedTodo = null;
            this.$scope.originalTodo = null;
            todoItem.title = todoItem.title.trim();
            if (!todoItem.title) {
                this.deleteTodo(todoItem);
            }
        };
        TodoCtrl.prototype.deleteTodo = function (todoItem) {
            this.todos.splice(this.todos.indexOf(todoItem), 1);
        };
        TodoCtrl.prototype.clear_completedTodo = function () {
            this.$scope.todos = this.todos = this.todos.filter(function (todoItem) { return !todoItem.completed; });
        };
        TodoCtrl.prototype.markall = function (todoItem) {
            this.todos.forEach(function (todoItem) { todoItem.completed; });
        };
        TodoCtrl.$inject = [
            '$scope',
            'filterFilter'
        ];
        return TodoCtrl;
    }());
    todo.TodoCtrl = TodoCtrl;
})(todo || (todo = {}));
/// <reference path='./_all.ts' />
var todo;
(function (todo_1) {
    var todo = angular.module('todo', [])
        .controller('todoCtrl', todo_1.TodoCtrl);
    // .directive('todoBlur', todoBlur)
    // .directive('todoFocus', todoFocus)
    // .directive('todoEscape', todoEscape)
})(todo || (todo = {}));
/// <reference path='../node_modules/definitely-typed-angular/angular.d.ts' />
/// <reference path='../node_modules/definitely-typed-jquery/jquery.d.ts' />
/// <reference path='todo_item.ts' />
/// <reference path='todo_interface.ts' />
/// <reference path='todo_controller.ts' />
/// <reference path='app.ts' />
//# sourceMappingURL=app.js.map