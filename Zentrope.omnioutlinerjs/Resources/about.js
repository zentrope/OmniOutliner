//
//
var _ = function() {

    var action = new PlugIn.Action(function(selection) {
        new Alert("About This Plugin", "Your plugin seems to be working.").show();
    });

    action.validate = function(selection) {
        return true
    };

    return action;
}();
_;
