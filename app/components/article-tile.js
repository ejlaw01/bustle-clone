import Ember from 'ember';

export default Ember.Component.extend({
  updateArticle: false,
  actions: {
    update(article, params) {
      console.log("Step 2!");
      this.sendAction('update', article, params);
    },
    delete(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
