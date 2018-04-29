import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  /*
  test('visiting /list-rentals', async function(assert) {
    await visit('/list-rentals');

    assert.equal(currentURL(), '/list-rentals');
  });
*/
  test('visiting /', async function(assert){
    await visit('/');

    assert.equal(currentURL(),'/rentals'); 
  });

  test('should show rentals as the home page', async function(assert){
    await visit('/');

    assert.equal(currentURL(),'/rentals', 'should redirect to rentals'); 
  });

  test('should link to information about the company', async function(assert){
    await visit('/');

    await click('.menu-about');

    assert.equal(currentURL(),'/about', 'should navigate to about');
  });

  test('should link to contact information', async function(assert){
    //await visit("/about");
    ////await click('a:contains("Contact")');
    //await click('#contact');
    //assert.equal(currentURL(),'/contact');

    await visit('/');

    await click('.menu-contact');

    assert.equal(currentURL(),'/contact','should navigate to contact');
  });

  test('should list available rentals', async function(assert){
    await visit("/");
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });

  test('should filter the list of rentals by city', function(assert){

  });

  test('should show details for a selected rental', function(assert){

  });

  
});
