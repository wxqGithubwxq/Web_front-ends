var time = angular.module("myTime", []);
time.config(function ($provide) {
    $provide.value("configtime", new Date());
    $provide.value("runtime", new Date());
    //for (var i = 0; i< 10000000; i++) {
    //    var y = Math.sqrt(Math.log(i));
    //}
});
time.run(function (runtime) {
    runtime.setTime(new Date().getTime());
});
time.controller("Time", ["$scope", "configtime", "runtime", function ($scope, config, run) {
    $scope.confi= config;
    $scope.runt = run;
}]);
var app = angular.module("App", ["myTime"]);
app.controller("Controller", function ($scope) {
    $scope.first = "some";
    $scope.last = "one";
    $scope.heading = "Message:";
    $scope.Message = function () {
        $scope.message = "Hello " + $scope.first + " " + $scope.last + "!";
    };
});
app.controller("change", function ($scope) {
    $scope.changeNumber = 1;
    $scope.start = 200;
    $scope.currentValue = 200;
    $scope.plus = function () {
        $scope.currentValue += $scope.changeNumber;
        $scope.differentValue();
    };
    $scope.dec = function () {
        $scope.currentValue -= $scope.changeNumber;
        $scope.differentValue();
    };
    $scope.differentValue = function () {
        $scope.different=$scope.currentValue - $scope.start;
    }
});
app.controller("sorting", ["$scope","filterFilter",function ($scope,f) {
    $scope.planes = [{ make: "Ben", model: "D8", capacity: "450" },
        { make: "Perter", model: "D3", capacity: "350" },
        { make: "Simon", model: "D4", capacity: "550" },
        { make: "Alice", model: "D5", capacity: "650" },
        { make: "Ben", model: "D14", capacity: "150" },
        { make: "Jane", model: "D56", capacity: "430" },
        { make: "Hero", model: "D26", capacity: "460" }];
    $scope.planesFilter = $scope.planes;
    $scope.reverse = true;
    $scope.column = "make";
    $scope.sort = function (column) {
        $scope.column = column;
        $scope.reverse = !$scope.reverse;
    };
    $scope.filterString = "";
    $scope.sortString = function () {
        $scope.planesFilter = f($scope.planes, $scope.filterString);
    };
}]);
app.filter("censor", function () {
    return function (input, replacement) {
        var cWords = ["bad", "evil", "dark"];
        var out = input;
        for (var i = 0; i < cWords.length; i++) {
            out = out.replace(cWords[i], replacement);
        }
        return out;
    }
});
app.controller("createFilter", ["$scope", "censorFilter", function ($scope, censorFilter) {
    $scope.text = "This is a bad boy.";
    $scope.rtext = "***";
    $scope.click = "Click dark"
    $scope.filterText = function () {
        $scope.click = censorFilter($scope.click, "it");
    };
    $scope.html = "bootstrap.html";
}]);
app.controller("formController", function ($scope) {
    $scope.someText = "";
    $scope.table = [{ name: "文许桥", stuNumber: "201401110209", totalMarks: "703" }, { name: "肖超", stuNumber: "201401110211", totalMarks: "281" }, { name: "宋刚", stuNumber: "201401110208", totalMarks: "562" }];
    $scope.cb = "";
    $scope.cameraName = "Canon";
    $scope.info = $scope.table[1];
});
app.controller("dataBinding", function ($scope) {
    $scope.colors = ["red", "blue", "yellow", "black", "purple", "green", "gray"];
    $scope.myStyle = { "background": "yellow" };
    $scope.msg = "This is a message.";
});
app.controller("focusEvent", function ($scope) {
    $scope.input = { input1: "", input2: "" };
    $scope.get = function (input) {
        $scope.input[input] = "";
    }
    $scope.lost = function (event, input) {
        var element = angular.element(event.target);
        var val = element.val();
        $scope.input[input] = val.toUpperCase();
    }
});
app.controller("keyboard", function ($scope) {
    $scope.storedString = "";
    $scope.keyboardState = "Not Pressed";
    $scope.lastKey = {};
    $scope.keyStores = [];
    $scope.up = function (event) {
        if (event.keyCode == 13) {
            var ele = angular.element(event.target);
            $scope.storedString = ele.val();
            ele.val("");
            $scope.keyboardState = "Enter Pressed";
            $scope.lastKey.keyCode = event.keyCode;
            $scope.keyStores = [];
        } else {
            $scope.lastKey.keyCode = event.keyCode;
            $scope.keyboardState = "Pressed";
            $scope.keyStores.push(event.keyCode);
        }
    }
});
app.controller("mouse", function ($scope) {
    $scope.mouseStyle = { border: "1px solid red", width: "200px", height: "200px", background: "black" };
    $scope.lastInfo = {};
    $scope.moveInfo = {};
    $scope.mouseClick = function (event) {
        $scope.lastInfo.clientX = event.clientX;
        $scope.lastInfo.clientY = event.clientY;
        $scope.lastInfo.screenX = event.screenX;
        $scope.lastInfo.screenY = event.screenY;
    }
    $scope.mouseMove = function (event) {
        $scope.moveInfo.clientX = event.clientX;
        $scope.moveInfo.clientY = event.clientY;
        $scope.moveInfo.screenX = event.screenX;
        $scope.moveInfo.screenY = event.screenY;
    }
});
app.controller("myboxController", function ($scope) {
    $scope.title = "myApplication";
})
.directive("mybox", function () {
    return {
        transclude: true,
        scope: { title: "@", bwidth: "@" },
        restrict: "E",
        template:"<div><span class='titleBar'>{{title}}</span><div ng-transclude></div></div>",
        link: function (scope, ele, attr,controller,transclude) {
            ele.append("<span class='footer'>" + scope.$parent.title + "</span>");
            ele.css("border","2px ridge red" );
            ele.css("display", "inline-block");
            ele.css("width", scope.bwidth);
        },
    };
});
app.controller("scale", function ($scope) {

})
app.directive("bigorsmall", function () {
    return {
        link: function (scope, ele, attr, controller, transclude) {
            var flag = false;
            var x = 0;
            var y = 0;
            var adujstment = 1;
            ele.on("mousedown", function (event) {
                flag = true;
                x = event.pageX;
                y = event.pageY;
                event.preventDefault();
            });
            ele.on("mouseup", function () {
                flag = false;
                adujstment = 1;
            });
            ele.on("mouseleave", function () {
                flag = false;
                adujstment = 1;
            })
            ele.on("mousemove", function () {
                var currentOpacity = parseFloat(ele.css("opacity"));
                if (flag) {
                    if (event.pageY > y && currentOpacity < 1) {
                        adujstment = 1.1;
                    }
                    else if (event.pageX < y && currentOpacity > 0.5) {
                        adujstment = 0.9;
                    }
                    else {
                        adujstment = 1;
                    }
                }
                ele.css("opacity", currentOpacity * adujstment)
                if (flag) {
                    if (event.pageY > y && ele.width() < 600) {
                        adujstment = 1.1;
                    }
                    else if (event.pageX < x && ele.width() > 400) {
                        adujstment = 0.9;
                    }
                    else {
                        adujstment = 1;
                    }
                }
                ele.width(ele.width() * adujstment);
                ele.height(ele.height() * adujstment);
                x = event.pageX;
                y = event.pageY;
            });
        }
    }
});

app.directive("myPhotos", function () {
    return {
        restrict: "E",
        transclude: true,
        scope: {},
        template: "<div><span ng-repeat='photo in photos' ng-class='{active:photo.selected}'><a href='' ng-click='select(photo)' style='margin:30px'>{{photo.title}}</a></span><div ng-transclude></div></div>",
        controller: function ($scope) {
            var photos = $scope.photos = [];
            this.addPhotos = function (photo) {
                photos.push(photo);
            };
            $scope.select = function (photo) {
                angular.forEach(photos, function (photo) {
                    photo.selected = false;
                });
                photo.selected = true;
            };
        },
    };
});
app.directive("myPhoto", function () {
    return {
        require: "^myPhotos",
        restrict: "E",
        transclude: true,
        scope: { title: "@" },
        template: "<div ng-show='selected' ng-transclude></div>",
        link: function (scope, ele, attr, controller) {
            controller.addPhotos(scope);
        },
    };
});
app.controller("watching", function ($scope) {
    $scope.myColors = ["red", "green", "black"];
    $scope.mcolor = "";
    $scope.hits = 0;
    $scope.misses = 0;
    $scope.changes = 0;
    $scope.group = { color: "", hit: "", miss: "" };
    $scope.hit = function () {
        $scope.hits += 1;
    };
    $scope.de = function () {
        $scope.hits -= 1;
    };
    $scope.miss = function () {
        $scope.misses += 1;
    };
    $scope.setColor = function (color) {
        $scope.mcolor = color;
    };
    $scope.$watch("mcolor", function (newValue, oldValue) {
        $scope.group.color = newValue;
    });
    $scope.$watchGroup(["hits", "misses"], function (newValue, oldValue) {
        $scope.group.hit = newValue[0];
        $scope.group.miss = newValue[1];
    });
    $scope.$watchCollection("group", function (newValue, oldValue) {
        $scope.changes += 1;
    });
});
app.controller("parent", function ($scope) {
    $scope.names = ["肖超", "宋刚", "文许桥"];
    $scope.currentName = "";
    $scope.changeName = function () {
        $scope.currentName = this.name;
        $scope.$broadcast("characterChanged", this.name)
    };
    $scope.$on("deleteCharacter", function (event, newCharacter) {
        var i = $scope.names.indexOf(newCharacter);
        $scope.names.splice(i, 1);
        $scope.currentName = "";
        $scope.infos = {};
        $scope.$broadcast("characterChanged", $scope.currentName);
    });
});
app.controller("child", function ($scope) {
    $scope.nameInfos = { "肖超": { sex: "男", age: "22" }, "宋刚": { sex: "男", age: "21" }, "文许桥": { sex: "男", age: "22" }};
    $scope.infos = {};
    $scope.$on("characterChanged", function (event, newCharacter) {
        $scope.infos = $scope.nameInfos[newCharacter];
    });
    $scope.deleteChar = function () {
        $scope.$emit("deleteCharacter", $scope.currentName);
    };
})