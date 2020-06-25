(function (exports) {
  function NoteController(NoteList) {
    this.notelist = NoteList;
    this.notelist.addNote('Beer Beer Beer Beer Beer');
    this.view = new NoteListView(this.notelist);
  }

  NoteController.prototype.renderHtml = function () {
    var test = document.getElementById('app');
    test.innerHTML = this.view.htmlWrap();
  };

  exports.NoteController = NoteController;
})(this);

  window.addEventListener('DOMContentLoaded', function (event) {
    var list = new NoteList();
    var controller = new NoteController(list);
    controller.renderHtml();

  window.addEventListener('hashchange', function (event) {
    var id = window.location.hash.slice(-1)
    var note = controller.notelist.returnList()[id]
    var singleNoteView = new SingleNoteView(note)
    var html = singleNoteView.htmlWrap()
    this.document.getElementById('app').innerHTML = html
  });

  document.getElementById('form').onsubmit = function(submitEvent) {
    submitEvent.preventDefault();
    console.log(document.getElementById('form').elements[0].value)
  }
  
});

