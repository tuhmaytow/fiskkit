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
          text: 'Dessert pie tootsie roll wafer muffin lollipop cake marshmallow sweet. Cotton candy lollipop gingerbread. Tiramisu cake caramels. Danish brownie chocolate.',
          children: [{
            id: 1,
            parentId: 0,
            username: "Harry",
            text: 'What are you talking about?',
            children: []
          }, {
            id: 2,
            parentId: 0,
            username: "Hermoine",
            text: "It's the Lorem Ipsum Cupcake.",
            children: [{
              id: 3,
              parentId: 3,
              username: "Ron",
              text: "I don't find it fascinating, Mark. Why would it be?",
              children: [{
                id: 4,
                parentId: 4,
                username: "Mario",
                text: "Everthing about him is fascinating lol jk.",
                children: []
              }]
            }, {
              id: 5,
              parentId: 3,
              username: "Luigi",
              text: "I think Mark is right, it is fascinating somehow",
              children: []
            }]
          }, {
            id: 6,
            parentId: 0,
            username: "Sheldon",
            text: "I'm glad to have been a part of it. Epic reddit history in the making.",
            children: []
          }, {
            id: 7,
            parentId: 0,
            username: "Leonard",
            text: "Gifs should not be edited by him.",
            children: [{
              id: 8,
              parentId: 8,
              username: "Howard",
              text: "Why not him, Rose? Let him edit as many as he wants lol",
              children: [{
                id: 9,
                parentId: 9,
                username: "Raj",
                text: "Yes, he should be able to edit them as he wants :)",
                children: [{
                  id: 10,
                  parentId: 10,
                  username: "Penny",
                  text: "But not everyone has Gif editing skills, at least not great skills.",
                  children: []
                }]
              }]
            }, {
              id: 11,
              parentId: 8,
              username: "Bernadette",
              text: "Gifs suck anyways.",
              children: []
            }]
          }, {
            id: 12,
            parentId: 0,
            username: "Amy",
            text: "I heard he once tried to sell a picture of a gif back to a photographer.",
            children: []
          }],
        }, {
          id: 13,
          parentId: null,
          username: "",
          text: 'Spicy jalapeno bacon ipsum dolor amet short ribs beef ribs t-bone kielbasa, chicken kevin andouille hamburger prosciutto ham hock shank. Fatback swine pastrami, flank short ribs prosciutto beef tri-tip.',
          children: [{
            id: 14,
            parentId: 2,
            username: "Joe",
            text: "Wasn't he born with regular claws and only gained the adamantium claws (and skeleton) later?",
            children: []
          }, {
            id: 15,
            parentId: 2,
            username: "John",
            text: "I always thought his healing factor was the coolest thing about him.",
            children: [{
              id: 16,
              parentId: 4,
              username: "Matt",
              text: "Nothing cool about Wolverine in my opinion.",
              children: [{
                id: 17,
                parentId: 5,
                username: "Rick",
                text: "Don't be such a hater Angel lol. Wolverine is cool.",
                children: []
              }]
            }, {
              id: 18,
              parentId: 4,
              username: "Bart",
              text: "Heaing factor IS the best thing about the Wolverine!!!",
              children: []
            }]
          }, {
            id: 19,
            parentId: 2,
            username: "Homer",
            text: "Even he can't fully survive it on a long enough timeline. Adamantium is poisonous. Just having it in his body forces his healing factor to run nonstop.",
            children: []
          }, {
            id: 20,
            parentId: 2,
            username: "Stan",
            text: "Was adamantium being poisonous a recent plot device for the Old Man Logan series or has it always been poisonous?",
            children: [{
              id: 21,
              parentId: 9,
              username: "Kyle",
              text: "Pretty sure its a concept that has been brought up in the comics.",
              children: [{
                id: 22,
                parentId: 10,
                username: "Cartman",
                text: "I remember that series. He went after the Honor Sword, and his healing was off the charts while battling the guys holding it.",
                children: [{
                  id: 23,
                  parentId: 11,
                  username: "Kenny",
                  text: "What's an Honor Sword? I'm confused",
                  children: []
                }]
              }]
            }, {
              id: 24,
              parentId: 9,
              username: "Nick",
              text: "Of course is a concept!",
              children: []
            }]
          }, {
            id: 25,
            parentId: 2,
            username: "Kevin",
            text: "Also how deadpool's healing factor is several times faster (e.g. a gunshot wound on deadpool heals in a second or two instead of over a few minutes on wolverine) despite deadpool's healing.",
            children: []
          }],
        }];
      });
