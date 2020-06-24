(function (exports) {
  function NoteList() {
    this._list = [];

  }
  NoteList.prototype.returnList = function () {
    return this._list;
  };

  NoteList.prototype.addNote = function (string) {
    this.note = new Note(string);
    this._list.push(this.note);
    
  };

  exports.NoteList = NoteList;
})(this);
