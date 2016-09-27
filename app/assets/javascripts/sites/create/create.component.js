angular.module('site.create').
component('createView', {
  templateUrl: 'sites/create/create.template.html',
  controller: [
  '$scope',
  'dataService',

  function ($scope, dataService) {
    $scope.addSite = function(){
      var o = {
          name: $scope.name,
          description: $scope.description,
          tags: $scope.tags
      };

      dataService.post('return', o).then(function(ob) { alert(ob);});

    }
      $scope.models = {
          selected: null,
          templates: [
              {type: "item", id: 2},
              {type: "container", id: 1, columns: [[], []]}
          ],
          dropzones: {
              "A": [
                  {
                      "type": "container",
                      "id": 1,
                      "columns": [
                          [
                              {
                                  "type": "item",
                                  "id": "1"
                              },
                              {
                                  "type": "item",
                                  "id": "2"
                              }
                          ],
                          [
                              {
                                  "type": "item",
                                  "id": "3"
                              }
                          ]
                      ]
                  },
                  {
                      "type": "item",
                      "id": "4"
                  },
                  {
                      "type": "item",
                      "id": "5"
                  },
                  {
                      "type": "item",
                      "id": "6"
                  }
              ],
              "B": [
                  {
                      "type": "item",
                      "id": 7
                  },
                  {
                      "type": "item",
                      "id": "8"
                  },
                  {
                      "type": "container",
                      "id": "2",
                      "columns": [
                          [
                              {
                                  "type": "item",
                                  "id": "9"
                              },
                              {
                                  "type": "item",
                                  "id": "10"
                              },
                              {
                                  "type": "item",
                                  "id": "11"
                              }
                          ],
                          [
                              {
                                  "type": "item",
                                  "id": "12"
                              },
                              {
                                  "type": "container",
                                  "id": "3",
                                  "columns": [
                                      [
                                          {
                                              "type": "item",
                                              "id": "13"
                                          }
                                      ],
                                      [
                                          {
                                              "type": "item",
                                              "id": "14"
                                          }
                                      ]
                                  ]
                              },
                              {
                                  "type": "item",
                                  "id": "15"
                              },
                              {
                                  "type": "item",
                                  "id": "16"
                              }
                          ]
                      ]
                  },
                  {
                      "type": "item",
                      "id": 16
                  }
              ]
          }
      };

      $scope.$watch('models.dropzones', function(model) {
          $scope.modelAsJson = angular.toJson(model, true);
      }, true);
  }]
});