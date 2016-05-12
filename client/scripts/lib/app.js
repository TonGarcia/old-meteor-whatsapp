// Libs
import angular from 'angular';
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';

// Modules
import Definer from '../definer';
import ChatsCtrl from '../controllers/chats.controller';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';

// App
const App = angular.module('Whatsapp', [
    'angular-meteor',
    'ionic'
]);

// Require the file
new Definer(App)
    .define(ChatsCtrl)
    .define(CalendarFilter)
    .define(RoutesConfig);

// Startup
if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
}
else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['Whatsapp']);
}