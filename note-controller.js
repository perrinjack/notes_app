(function (exports) {
  function NoteController(NoteList) {
    this.notelist = NoteList;
    this.notelist.addNote('Beer');
    this.view = new NoteListView(this.notelist);
  }

  NoteController.prototype.renderHtml = function () {
    var test = document.getElementById('app');
    test.innerHTML = this.view.htmlWrap();
  };

  exports.NoteController = NoteController;

})(this);

document.addEventListener('DOMContentLoaded', function (event) {
  var list = new NoteList
  var controller = new NoteController(list)
  controller.renderHtml();
  });


