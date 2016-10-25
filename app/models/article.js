import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  title: DS.attr(),
  subtitle: DS.attr(),
  body: DS.attr(),
  image: DS.attr()
});
