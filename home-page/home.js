const header = document.getElementById('site-header');
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('blurred');
  } else {
    header.classList.remove('blurred');
  }
  if (window.scrollY >= window.innerHeight) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});


const search_btn = document.getElementById("search")
const search_block = document.getElementById("search-block")
const close_btn = document.getElementById("close-search-block")

// search_btn.addEventListener('click', function(){
//   search_block.style.display = "block"
// });
// close_btn.addEventListener('click', function(){
//   search_block.style.display = "none"
// });

search_btn.addEventListener('click', () => {
  search_block.classList.add('visible');
});

close_btn.addEventListener('click', () => {
  search_block.classList.remove('visible');
});