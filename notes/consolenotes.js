
const list = () => {
  console.log('note listing');
}
const add = (title,body)=> {
  console.log('note added:', title, body);
}
const remove = (title) => {
  console.log('remove', title);
}

module.exports =  {
  add,
  list,
  remove
}
