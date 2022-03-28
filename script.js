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

  function display() {
    var x=document.ideaForm.name.value;
    var y=document.ideaForm.email.value;
    var z=document.ideaForm.message.value;
    alert("Thanks for reaching out! Here's what you've sent me. "+  "Your Name:"+x+"     "+"Your Email:"+y+"     "+"Your Message:"+z);
  }

function validateForm() {
  let x = document.forms["ideaForm"]["email"].value;
  if (x == "") {
    alert("Oops! Please fill out your email address.");
    return false;
  }
}