import { createElement } from 'lwc';
import Sdo_scom_b2b_productCompareCmsResourceResolver from 'c/sdo_scom_b2b_productCompareCmsResourceResolver';

describe('c-sdo-scom-b2-b-product-compare-cms-resource-resolver', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-sdo-scom-b2-b-product-compare-cms-resource-resolver', {
            is: Sdo_scom_b2b_productCompareCmsResourceResolver
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});