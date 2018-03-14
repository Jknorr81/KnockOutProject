function Player(number, firstName, lastName, height, weight, position) {
    var self = this;
    self.number = ko.observable(number);
    self.firstName = ko.observable(firstName);
    self.lastName = ko.observable(lastName);
    self.height = ko.observable(height);
    self.weight = ko.observable(weight);
    self.position = ko.observable(position);
    self.selectedPosition = ko.computed(function () {
        var position = self.position().position;
        return position
    });
    self.selectedHeight = ko.computed(function () {
        var sHeight = self.height().sHeight;
        return sHeight
    });
    self.fullName = ko.computed(function () {
        return self.firstName() + " " + self.lastName();
    }, self);
}

function PlayersViewModel(teamName) {
    var self = this;
    self.availableHeights = [
        { vHeight: "5'8", sHeight: "5'8" },
        { vHeight: "5'9", sHeight: "5'9" },
        { vHeight: "5'10", sHeight: "5'10" },
        { vHeight: "5'11", sHeight: "5'11" },
        { vHeight: "6'0", sHeight: "6'0" },
        { vHeight: "6'1", sHeight: "6'1" },
        { vHeight: "6'2", sHeight: "6'2" },
        { vHeight: "6'3", sHeight: "6'3" },
        { vHeight: "6'4", sHeight: "6'4" },
        { vHeight: "6'5", sHeight: "6'5" },
    ];
    self.availablePositions = [
        { position: "OL/DL" },
        { position: "RB/LB" },
        { position: "WR/DB" },
        { position: "QB/DB" },
        { position: "TE/LB"},
        { position: "K/P" }
    ];
    self.players = ko.observableArray([
        new Player("01", "John", "Doe", self.availableHeights[4], "123", self.availablePositions[2])
    ]);
    self.teamName = ko.observable(teamName);
    self.addPlayer = function () {
        self.players.push(new Player("", "", "", self.availableHeights[0], "", self.availablePositions[0]));
    }
    self.removePlayer = function (player) { self.players.remove(player) }
}

ko.applyBindings(new PlayersViewModel());