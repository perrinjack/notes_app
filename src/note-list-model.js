(function (exports) {
  function NoteList() {
    this._list = [];
    this.index = 0;
  }
  NoteList.prototype.returnList = function () {
    return this._list;
  };

  NoteList.prototype.addNote = function (string) {
    this.note = new Note(string, this.index);
    this._list.push(this.note);
    this.index++;
  };

  exports.NoteList = NoteList;
})(this);
