var abstractCharacterFactory = (function() {
    var jobs = {};

    return {
        addJob: function(job, Character) {
            if (Character.prototype.attack) {
                jobs[job] = Character;
            } // end if
        }, // end addJob

        create: function(job, options) {
            var Character = jobs[job];
            return (Character ? new Character(options) : null);
        }

    }; // end return
})();


var Emperor = (function() {
    function Emperor(options) {
        this.name = options.name;
    }
    Emperor.prototype.attack = function(target) {
        console.log(this.name + " " + target + " 공격");
    };

    Emperor.prototype.proclaim = function(target) {
        console.log(this.name + " 왕이 됨을 선언함");
    };
    return Emperor;
})();



var Governor = (function() {
    function Governor(options) {
        this.name = options.name;
    }
    Governor.prototype.attack = function(target) {
        console.log(this.name + " 가" + target + " 을 공격");
    };
    Governor.prototype.betray = function(target) {
        console.log(this.name + " 가 배신");
    };
    return Governor;

})();

abstractCharacterFactory.addJob('emperor', Emperor);
abstractCharacterFactory.addJob('governor', Governor);

var nero = abstractCharacterFactory.create("emperor", { name: "Nero" });

var vindex = abstractCharacterFactory.create("governor", { name: "vindex" });

var galba = abstractCharacterFactory.create("governor", { galba: "galba" });

nero.attack("vindex");
vindex.betray();
galba.betray();