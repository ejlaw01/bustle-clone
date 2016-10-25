import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    createArticle() {
      this.set('addNewArticle', true);
    },
    saveArticle() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
