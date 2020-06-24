(function (exports) {
  function NoteListView(NoteList) {
    this.noteList = NoteList;
  }

  NoteListView.prototype.htmlWrap = function () {
    var object_array = this.noteList.returnList();
    var html_array = ['<ul>'];
    var i;
    for (i = 0; i < object_array.length; i++) {
      html_array.push(
        `<li><a href = #notes/${object_array[i].receivesId()}><div>`
      );
      html_array.push(object_array[i].receivesText().slice(0, 20));
      html_array.push('</div></a></li>');
    }
    html_array.push('</ul>');

    return html_array.join('');
  };

  exports.NoteListView = NoteListView;
})(this);
