(function (exports) {
  function NoteListView() {
    this.noteList = new NoteList();
  }

  NoteListView.prototype.htmlWrap = function () {
    var text_array = this.noteList.returnList();
    // var text_array = object_array.forEach(.receivesText())
    var html_array = ['<ul>'];
    var i;
    for (i = 0; i < text_array.length; i++) {
      html_array.push('<li><div>');
      html_array.push(text_array[i].receivesText());
      html_array.push('</div></li>');
    }
    html_array.push('</ul>');

    return html_array.join('');
  };

  exports.NoteListView = NoteListView;
})(this);
