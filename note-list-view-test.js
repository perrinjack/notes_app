function htmlWrap() {
  var noteListView = new NoteListView();
  var note1 = noteListView.noteList.addNote('First Note');
  var note2 = noteListView.noteList.addNote('Second Note');
  var text =
    '<ul><li><div>First Note</div></li><li><div>Second Note</div></li></ul>';
    console.log(noteListView.htmlWrap())
  assert.isTrue(noteListView.htmlWrap() === text);
}

htmlWrap();
