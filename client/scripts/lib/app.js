// Libs
import angular from 'angular';
import 'angular-animate';
import 'angular-meteor';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';

// Modules
import Definer from '../definer';
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import InputDirective from '../directives/input.directive';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';

// App
const App = angular.module('Whatsapp', [
    'angular-meteor',
    'angularMoment',
    'ionic'
]);

// Require the file
new Definer(App)
    .define(ChatsCtrl)
    .define(ChatCtrl)
    .define(InputDirective)
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