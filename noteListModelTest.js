function arraySetup() {
  var notelist;
  notelist = new NoteList();
  // console.log(notelist._list)
  assert.isTrue(Array.isArray(notelist._list) === true);
  assert.isTrue(notelist._list.length === 0);
}

function createsNote() {
  var notelist = new NoteList();
  var text = 'Favourite drink: seltzer';
  var noteText = notelist.addNote(text);
  assert.isTrue(notelist._list[0].receivesText() === text);
  assert.isTrue(notelist._list.length === 1);
}

function returnsNotes() {
  var notelist1 = new NoteList();
  var note1 = notelist1.addNote('Test');
  var note2 = notelist1.addNote('second');
  console.log(note1)
  console.log(note2)
  assert.isTrue(notelist1.returnList().includes(note1));
  assert.isTrue(notelist1.returnList()[1] === note2);
}

arraySetup();
createsNote();
returnsNotes();
