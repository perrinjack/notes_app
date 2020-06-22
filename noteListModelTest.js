function arraySetup(){
  var notelist;
  notelist = new NoteList();
  console.log(notelist._list)
  assert.isTrue(Array.isArray(notelist._list) === true);
  assert.isTrue(notelist._list.length === 0);
}

arraySetup();
