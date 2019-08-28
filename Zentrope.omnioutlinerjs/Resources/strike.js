//
//
var _ = function() {

    var action = new PlugIn.Action(function(selection) {

        rootItem.leaves.forEach((item) => {
            const style = item.style
            if (item.state == State.Unchecked) {
                style.set(Style.Attribute.StrikethroughStyle, UnderlineStyle.None);
                style.set(Style.Attribute.FontFillColor, null);
            } else {
                style.set(Style.Attribute.StrikethroughStyle, UnderlineStyle.Single);
                style.set(Style.Attribute.StrikethroughColor, Color.gray);
                style.set(Style.Attribute.FontFillColor, Color.gray);
            }
        });
    });

    action.validate = function(selection, sender) {
        return true
    };

    return action;
}();
_;
