(function (exports) {
  function NoteController(NoteList) {
    this.notelist = NoteList;
  }

  NoteController.prototype.addNoteToList= function () {
    return this.notelist.addNote('Beer');
  };

NoteController.prototype.createView = function () {
var view = new NoteListView(this.notelist)

}
NoteController.prototype.renderHtml = function () {

  var test = document.getElementById('app');
  test.innerHTML = view ;
}




  exports.NoteController = NoteController;
});
this;

document.addEventListener('DOMContentLoaded', function (event) {
  
  console.log(test);
});
