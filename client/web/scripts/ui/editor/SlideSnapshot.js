// Generated by CoffeeScript 1.2.1-pre
/*
@author Matt Crinklaw-Vogt
*/

define(["vendor/backbone", "./Templates", "css!./res/css/SlideSnapshot.css", "./raster/SlideDrawer"], function(Backbone, Templates, empty, SlideDrawer) {
  return Backbone.View.extend({
    className: "slideSnapshot",
    events: {
      "click": "clicked",
      "click .removeBtn": "removeClicked"
    },
    initialize: function() {},
    clicked: function() {
      return this.trigger("clicked", this);
    },
    removeClicked: function(e) {
      this.trigger("removeClicked", this);
      return e.stopPropagation();
    },
    remove: function() {
      this.slideDrawer.dispose();
      this.off();
      return Backbone.View.prototype.remove.apply(this, arguments);
    },
    render: function() {
      var g2d;
      if (this.slideDrawer != null) this.slideDrawer.dispose();
      this.$el.html(Templates.SlideSnapshot(this.model.attributes));
      g2d = this.$el.find("canvas")[0].getContext("2d");
      this.slideDrawer = new SlideDrawer(this.model, g2d);
      this.slideDrawer.repaint();
      return this.$el;
    }
  });
});
