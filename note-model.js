(function (exports) {
  function Note(text) {
    this._text = text;
  }

  Note.prototype.receivesText = function () {
    return this._text;
  };

  Note.prototype.test = function () {
    var array = [];
    arrayin = ['hello', 'fruit'];
    var i;
    for (i = 0; i < arrayin.length; i++) {
      array.push('</div></li>');
      array.push(arrayin[i]);
      array.push('<li><div>');
    }
    return array.reverse().join('');
  };

  exports.Note = Note;
})(this);
