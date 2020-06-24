function htmlWrap() {
  var list = new NoteList
  var noteListView = new NoteListView(list);
  var note1 = noteListView.noteList.addNote('First Note');
  var note2 = noteListView.noteList.addNote('Second Note');
  var text =
    '<ul><li><div>First Note</div></li><li><div>Second Note</div></li></ul>';
  assert.isTrue(noteListView.htmlWrap() === text);
}

function noNoteHtmlWrap() {
  var list = new NoteList
  var noteListView = new NoteListView(list);
  assert.isTrue(noteListView.htmlWrap() === '<ul></ul>')
}

htmlWrap();
noNoteHtmlWrap()
