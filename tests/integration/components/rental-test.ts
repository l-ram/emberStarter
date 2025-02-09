import { module, test } from 'qunit';
import { setupRenderingTest } from 'quickstart-ts/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rental />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Rental>
        template block text
      </Rental>
    `);

    assert.dom().hasText('template block text');
  });
});
