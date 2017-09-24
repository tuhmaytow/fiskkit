var app = angular.module('app', ['ui.tree']);
  app.controller('myController', function($scope) {
    $scope.comment = {};

    $scope.collapseAll = function() {
      $scope.$broadcast('angular-ui-tree:collapse-all');
    };

    $scope.expandAll = function() {
      $scope.$broadcast('angular-ui-tree:expand-all');
    };

    $scope.toggleDropdown = function(node) {
      node.showForm = !node.showForm;
    };

    $scope.newComment = function(parentNode, comment) {
      comment.children = [];
      comment.showForm = false;
      comment.parentId = parentNode.id;
      if (parentNode.children && parentNode.children.length >= 0) {
        parentNode.children.push(comment);
        parentNode.showForm = false;
        $scope.comment = {};
      }
    };

    $scope.data = [{
          id: 0,
          parentId: null,
          username: "",
          sentence: 'Dessert pie tootsie roll wafer muffin lollipop cake marshmallow sweet. Cotton candy lollipop gingerbread. Tiramisu cake caramels. Danish brownie chocolate.',
          children: [{
            id: 1,
            parentId: 0,
            username: "Harry",
            sentence: 'What are you talking about?',
            children: []
          }, {
            id: 2,
            parentId: 0,
            username: "Ann",
            sentence: "It's the Lorem Ipsum Cupcake.",
            children: [{
              id: 3,
              parentId: 3,
              username: "Ron",
              sentence: "That's funny!",
              children: [{
                id: 4,
                parentId: 4,
                username: "Mario",
                sentence: "I heard the movie was scary",
                children: []
              }]
            }, {
              id: 5,
              parentId: 3,
              username: "Luigi",
              sentence: "I think it was overrated!",
              children: []
            }]
          }, {
            id: 6,
            parentId: 0,
            username: "Sheldon",
            sentence: "Definitely want to see that movie.",
            children: []
          }, {
            id: 7,
            parentId: 0,
            username: "Leonard",
            sentence: "Onto another topic guys",
            children: [{
              id: 8,
              parentId: 8,
              username: "Howard",
              sentence: "Yeah.. this thread is getting kinda boring.",
              children: [{
                id: 9,
                parentId: 9,
                username: "Raj",
                sentence: "LOL!",
                children: [{
                  id: 10,
                  parentId: 10,
                  username: "Penny",
                  sentence: "blah blah blah!",
                  children: []
                }]
              }]
            }, {
              id: 11,
              parentId: 8,
              username: "Bernadette",
              sentence: "You guys are too funny.",
              children: []
            }]
          }, {
            id: 12,
            parentId: 0,
            username: "Amy",
            sentence: "Yeah this is just a random thread for people to share their opinions.",
            children: []
          }],
        }, {
          id: 13,
          parentId: null,
          username: "",
          sentence: 'Spicy jalapeno bacon ipsum dolor amet short ribs beef ribs t-bone kielbasa, chicken kevin andouille hamburger prosciutto ham hock shank. Fatback swine pastrami, flank short ribs prosciutto beef tri-tip.',
          children: [{
            id: 14,
            parentId: 2,
            username: "Joe",
            sentence: "Another lorem ipsum, eh?",
            children: []
          }, {
            id: 15,
            parentId: 2,
            username: "John",
            sentence: "This time it's the Bacon one",
            children: [{
              id: 16,
              parentId: 4,
              username: "Matt",
              sentence: "Didn't know that there's a variety of them",
              children: [{
                id: 17,
                parentId: 5,
                username: "Rick",
                sentence: "There's also a Harry Potter one",
                children: []
              }]
            }, {
              id: 18,
              parentId: 4,
              username: "Bart",
              sentence: "Ohhhh I love Harry Potter!",
              children: []
            }]
          }, {
            id: 19,
            parentId: 2,
            username: "Homer",
            sentence: "Who doesn't, Bart??",
            children: []
          }, {
            id: 20,
            parentId: 2,
            username: "Stan",
            sentence: "Definitely the best movie ever!",
            children: [{
              id: 21,
              parentId: 9,
              username: "Kyle",
              sentence: "I wouldn't say best movie ever.",
              children: [{
                id: 22,
                parentId: 10,
                username: "Cartman",
                sentence: "I mean, I like Harry Potter, but I agree with Kyle here. There are better movies out there.",
                children: [{
                  id: 23,
                  parentId: 11,
                  username: "Kenny",
                  sentence: "Just like how everyone thinks Star Wars is the best movie.",
                  children: []
                }]
              }]
            }, {
              id: 24,
              parentId: 9,
              username: "Nick",
              sentence: "Never liked Star Wars",
              children: []
            }]
          }, {
            id: 25,
            parentId: 2,
            username: "Kevin",
            sentence: "Me too! Not interested in re-watching it.",
            children: []
          }],
        }];
      });
