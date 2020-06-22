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
  assert.isTrue(notelist._list[0] === text);
  assert.isTrue(notelist._list.length === 1);
}

arraySetup();
createsNote();
