import Ember from 'ember';

export default Ember.Component.extend({
  updateArticle: false,
  actions: {
    updateArticle() {
      this.set('updateArticle', true);
    },
    update(article) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('updateArticle', false);
      this.sendAction('update', article, params);
    }
  }
});
