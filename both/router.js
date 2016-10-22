Router.configure({
  layoutTemplate:'layout'
});

Router.map(function(){
this.route('home',{path:'/'});
this.route('members',{path:'/members'});
this.route('about',{path:'/about'});
this.route('link',{path:'/link'});

this.route('natural',{path:'/natural'});
this.route('museum',{path:'/museum'});
this.route('adventure',{path:'/adventure'});
this.route('trek',{path:'/trek'});
this.route('hill',{path:'/hill'});

this.route('message',{path:'/message'});
});
