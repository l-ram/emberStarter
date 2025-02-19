import { module, test } from 'qunit';
import { setupRenderingTest } from 'quickstart-ts/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Map />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Map>
        template block text
      </Map>
    `);

    assert.dom().hasText('template block text');
  });
});
