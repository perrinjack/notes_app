function htmlWrap() {
  var list = new NoteList
  var noteListView = new NoteListView(list);
  var note1 = noteListView.noteList.addNote('First Note some more charecter');
  var note2 = noteListView.noteList.addNote('Second Note');
  var text =
<<<<<<< HEAD
    '<ul><li><a href = #notes/0><div>First Note</div></a></li><li><a href = #notes/1><div>Second Note</div></a></li></ul>';
=======
    '<ul><li><div>First Note some more</div></li><li><div>Second Note</div></li></ul>';
>>>>>>> 0e38d9c2fa5f312ff793ffcae89f554dcd6fadcb
  assert.isTrue(noteListView.htmlWrap() === text);
}

function noNoteHtmlWrap() {
  var list = new NoteList
  var noteListView = new NoteListView(list);
  assert.isTrue(noteListView.htmlWrap() === '<ul></ul>')
}

htmlWrap();
noNoteHtmlWrap()
