import { createElement } from 'lwc';
import Sdo_scom_mini_cart_popup from 'c/sdo_scom_mini_cart_popup';

describe('c-sdo-scom-mini-cart-popup', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-sdo-scom-mini-cart-popup', {
            is: Sdo_scom_mini_cart_popup
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});