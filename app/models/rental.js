import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    owner: DS.attr(),
    city: DS.attr(),
    category: DS.attr(),
    bedroom: DS.attr(),
    description: DS.attr()
});
