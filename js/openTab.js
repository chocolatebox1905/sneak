function openTab(evt, activeTab) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("profile-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("nav-btn");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(activeTab).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  $(function() {
    document.getElementById('defaultTab').click();
  });