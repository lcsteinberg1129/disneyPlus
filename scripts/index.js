$("#mobilemenu").click(openMenu);
function openMenu(){
  this.classList.toggle("change");
  let navlink = $('.nav-link');
  if (navlink.css('display') === 'none'){
    navlink.css('display', 'block');
  }else{
    navlink.css('display', 'none');
  }
}
