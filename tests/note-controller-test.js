function renderHtmlTest() {
  var noteList = new NoteList();
  var contoller = new NoteController(noteList);

  controller.renderHtml();
  assert.isTrue(
    document.getElementById('app').innerHTML ===
      '<ul><li><div>Beer</div></li></ul>'
  );
}

renderHtmlTest();
