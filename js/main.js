function TodoCtrl($scope) {
  $scope.todos = [
    {text:'wash clothes', done:false},
    {text:'wash clothes', done:true},
    {text:'wash clothes', done:false},
    
    ];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:true});
    $scope.todoText = '';
  };


 $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
 
}


