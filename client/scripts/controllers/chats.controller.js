import moment from 'moment';
import { Controller } from '../entities';

export default class ChatsCtrl extends Controller {
    constructor() {
        super(...arguments);

        // To remove static Data we use Angular-Meteor API
        // Add a helper called data which return MongoDB Collection
        this.helpers({
            data() {
                return Chats.find();
            }
        });
    }

    // Delete action
    remove(chat) {
        // to remove chat from static array
        //this.data.splice(this.data.indexOf(chat), 1);

        // To remove chat from MongoDB Angular-Meteor helper
        this.data.remove(chat);
    }
}

ChatsCtrl.$inject = ['$scope'];