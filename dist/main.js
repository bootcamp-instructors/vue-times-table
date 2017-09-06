var vm = new Vue({
  el: '#times-table',
  data: {
    numberOfRows: 5,
    numberOfColumns: 7
  },
  computed: {
    compRows: function() {
      return this.numberOfRows;
    }
  }
});