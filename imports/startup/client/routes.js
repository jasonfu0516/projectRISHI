import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


// templates
import '../../ui/layout/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/map/map.js'
import '../../ui/pages/travel/travel.js'
import '../../ui/pages/projects/projects.js'

// components
import '../../ui/components/navbar/navbar.js'

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/map', {
  name: 'App.map',
  action() {
    BlazeLayout.render('App_body', { main: 'App_map' });
  },
});

FlowRouter.route('/travel', {
  name: 'App.travel',
  action() {
    BlazeLayout.render('App_body', { main: 'App_travel' });
  },
});

FlowRouter.route('/projects', {
  name: 'App.projects',
  action() {
    BlazeLayout.render('App_body', { main: 'App_projects' });
  },
});