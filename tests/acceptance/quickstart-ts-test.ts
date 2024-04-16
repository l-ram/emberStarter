import { module, test } from "qunit";
import { visit, currentURL, click } from "@ember/test-helpers";
import { setupApplicationTest } from "quickstart-ts/tests/helpers";

module("Acceptance | quickstart ts", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function (assert) {
    await visit("/");

    assert.strictEqual(currentURL(), "/");
    assert.dom("h2").hasText("Welcome to Super Rentals!");

    assert.dom(".jumbo a.button").hasText("About us");
    await click(".jumbo a.button");

    assert.strictEqual(currentURL(), "/about");
  });

  test("visiting/about", async function (assert) {
    await visit("/about");

    assert.strictEqual(currentURL(), "/about");
    assert.dom("h2").hasText("About Super Rentals!");

    assert.dom(".jumbo a.button").hasText("Contact us");
    await click(".jumbo a.button");

    assert.strictEqual(currentURL(), "/contact");
  });
});
