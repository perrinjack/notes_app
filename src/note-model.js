(function (exports) {
  function Note(text, id) {
    this._text = text;
    this.id = id;
  }

  Note.prototype.receivesText = function () {
    return this._text;
  };

  Note.prototype.receivesId = function () {
    return this.id;
  };
  

  exports.Note = Note;
})(this);
