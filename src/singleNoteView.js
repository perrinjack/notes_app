(function (exports) {
  function SingleNoteView(Note) {
    this.note = Note;
  }

  SingleNoteView.prototype.htmlWrap = function () {
    var text_element = this.note.receivesText();

    return `<div>${text_element}</div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
