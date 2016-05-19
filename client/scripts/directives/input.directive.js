import { Directive } from '../entities';

// we want to know if return (aka Enter) was pressed.
// we want to move it up when the keyboard comes from the bottom of the screen
export default class input extends Directive {
    constructor() {
        super(...arguments);

        this.restrict = 'E';

        this.scope = {
            'returnClose': '=',
            'onReturn': '&',
            'onFocus': '&',
            'onBlur': '&'
        };
    }

    link(scope, element) {
        element.bind('focus', (e) => {
            if (!scope.onFocus) return;

            this.$timeout(() => {
                scope.onFocus();
            });
        });

        element.bind('blur', (e) => {
            if (!scope.onBlur) return;

            this.$timeout(() => {
                scope.onBlur();
            });
        });

        element.bind('keydown', (e) => {
            if (e.which != 13) return;

            if (scope.returnClose) {
                element[0].blur();
            }

            if (scope.onReturn) {
                this.$timeout(() => {
                    scope.onReturn();
                });
            }
        });
    }
}

input.$inject = ['$timeout'];