const themeMedia = window.matchMedia("(prefers-color-scheme: light)");

if(window.localStorage.getItem('theme')){
    window.localStorage.getItem('theme') == 'dark' 
    ? window.localStorage.setItem('theme','dark')
    : window.localStorage.setItem('theme','light')

    window.localStorage.getItem('theme') == 'dark' 
    ? document.documentElement.classList.add("dark-mode")
    : document.documentElement.classList.remove("dark-mode")
}else{
    themeMedia.matches
    ? window.localStorage.setItem('theme','light')
    : window.localStorage.setItem('theme','dark')

    themeMedia.matches
    ? document.documentElement.classList.remove("dark-mode")
    : document.documentElement.classList.add("dark-mode");
}

themeMedia.addEventListener("change", (e) => {
  if (e.matches) {
    document.documentElement.classList.remove("dark-mode");
    window.localStorage.setItem('theme','light')

  } else {
    document.documentElement.classList.add("dark-mode");
    window.localStorage.setItem('theme','dark')
  }
});