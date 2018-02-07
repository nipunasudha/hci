var Simulator = {vars: {viewportimg: "#viewportimg"}};
var slides =
    {
        home:
            {
                url: "assets/img/t_home.jpg",
                zones:
                    {
                        userbutton: {
                            coord: [91.3, 15.2, 4.1, 5.1],
                            func: function () {
                                alert("haha")
                            }
                        }

                    }

            },
        homeUserMenu:
            {
                url: "assets/img/t_home_usermenu.jpg",
                zones:
                    {
                        userbutton:
                            [200, 300, 50, 50]
                    }
            }
    };

Simulator.init = function () {
    Simulator.binder();
    Simulator.preloadImages();
    Simulator.updateViewport(slides.home)
}

Simulator.preloadImages = function () {
    Utils.preload([slides.home, slides.homeUserMenu])
}

Simulator.binder = function () {

}

Simulator.updateViewport = function (image) {
    $('.zone').remove();
    $(Simulator.vars.viewportimg).attr('src', image.url);
    Simulator.addZones(image.zones);
}

Simulator.addZones = function (zones) {
    for (var i in zones) {
        console.log(zones[i]);
        Simulator.addSingleZone(zones[i]);
    }
}
Simulator.addSingleZone = function (zone) {
    var coord = zone['coord'];
    var newZone = $("<div class='zone' style='left: " + coord[0] + "%; top: " + coord[1] + "%; width: " + coord[2] + "%;height:" + coord[3] + "%'></div>");
    $("#viewport").append(newZone)
    newZone.on('click', zone['func'])
}

$(function () {
    Simulator.init();
})