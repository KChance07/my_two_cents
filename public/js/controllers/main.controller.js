(function() {
  angular.module('my_two_cents')
  .controller("Main.Controller", MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope){
    $scope.posts = PostService.getAll();
    $scope.selectPost = selectPost;
    $scope.createPost = createPost;
    $scope.deletePost = deletePost;
    $scope.editPost = editPost;
    $scope.savePost = savePost;
    $scope.newPost = newPost;
    $scope.selectedPost = [];
    $scope.selectedIndex =  0;
    $scope.postSelected = false;
    $scope.enteringPost = false;
    $scope.blankPost = {};

    $scope.$watch(function(){
      return PostService.getAll();
    }, function(){
      $scope.posts = PostService.getAll();
    });
    function selectPost(post, index) {
      if($scope.enteringPost) {$scope.enteringPost = false}
      $scope.postSelected = true;
      $scope.selectedPost = post;
      $scope.selectedIndex = index;
    }
    function newPost() {
      if($scope.postSelected) {$scope.postSelected = false;}
      $scope.enteringPost = true;
      $scope.blankPost = {};
    }
    function createPost(newPost) {
      PostService.create(newPost);
      selectPost(newPost, $scope.post.length)
    }
    function deletePost(index) {
      PostService.delete(index);
      $scope.postSelected = false;
      $scope.enteringPost = false;
      $scope.albums = PostService.get();
    }
    function editPost(post) {
      post.isBeingEdited = true;
    }
    function savePost(index, editedPost) {
      PostService.update(index, editedPost);
      editedPost.isBeingEdited = false;
    }
  }
}());
