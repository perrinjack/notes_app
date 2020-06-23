(function (exports) {
  function NoteController(NoteList) {
    this.notelist = NoteList;
    this.notelist.addNote('Beer');
    this.view = new NoteListView(this.notelist);
  }

  // NoteController.prototype.addNoteToList = function () {
  //   return 
  // };

  // NoteController.prototype.createView = function () {
  //   var view = new NoteListView(this.notelist);
  // };

  NoteController.prototype.renderHtml = function () {
    var test = document.getElementById('app');
    test.innerHTML = this.view.htmlWrap();
  };

  document.addEventListener('DOMContentLoaded', function (event) {
  var list = new NoteList();
  var test = new NoteController(list);
  test.renderHtml();
});

  exports.NoteController = NoteController;

});(this);

