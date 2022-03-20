function myFunction() {
    document.getElementById("MMMenu").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.menubutton')) {
      var dropdowns = document.getElementsByClassName("menucontent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openTogglemenu = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }