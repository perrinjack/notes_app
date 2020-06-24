function storesText() {
  var note;
  note = new Note('test note', 1);
  assert.isTrue(note._text === 'test note');
}

function returnsText() {
  var note = new Note('test note', 2);
  var text = note.receivesText();
  assert.isTrue(text === 'test note');
}

storesText();
returnsText();
