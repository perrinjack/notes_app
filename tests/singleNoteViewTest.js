function singleViewHtmlWrap() {
    var note = new Note('Hot bloody day today');
    var singlenoteview = new SingleNoteView(note);
 
    var text =
      '<div>Hot bloody day today</div>';
    assert.isTrue(singlenoteview.htmlWrap() === text)
  }

  
  singleViewHtmlWrap();
  