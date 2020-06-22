function storesText () {
  var note;
  note = new Note("test note");
  assert.isTrue(note._text === "test note");
};

storesText();
