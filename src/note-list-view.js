(function (exports) {
  function NoteListView(NoteList) {
    this.noteList = NoteList;
  }

  NoteListView.prototype.htmlWrap = function () {
    var object_array = this.noteList.returnList();
    var html_array = ['<ul>'];
    var i;
<<<<<<< HEAD
    for (i = 0; i < object_array.length; i++) {
      html_array.push(
        `<li><a href = #notes/${object_array[i].receivesId()}><div>`
      );
      html_array.push(object_array[i].receivesText());
      html_array.push('</div></a></li>');
=======
    for (i = 0; i < text_array.length; i++) {
      html_array.push('<li><div>');
      html_array.push(text_array[i].receivesText().slice(0,20));
      html_array.push('</div></li>');
>>>>>>> 0e38d9c2fa5f312ff793ffcae89f554dcd6fadcb
    }
    html_array.push('</ul>');

    return html_array.join('');
  };

  exports.NoteListView = NoteListView;
})(this);
