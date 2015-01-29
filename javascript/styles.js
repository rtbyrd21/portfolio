




$(window).load(function() {
 $('#clientsOpen').mouseover(function () {
$('#clientsDropDown #clientsDashboard').show({
   }, 'fast');
 $(this).toggleClass('clientsClose #clientsDashboard #clientsDropDown');
  }); 
  
})


$(window).load(function() {
 $('#clientsOpen').click(function () {
$('#clientsDropDown #clientsDashboard').hide({
   }, 'fast');
 $(this).toggleClass('clientsClose #clientsDashboard #clientsDropDown');
  }); 
  
})



 setInterval(function() {
        $(".glyphicon-chevron-up").fadeOut(1900, function() {
            $(this).delay(0).fadeIn(1900);
        });     
}, 250) 




$(document).ready(function() {
  $('#example').tooltip();
});

$(document).ready(function() {
  $('#resume').tooltip();
});

$(document).ready(function() {
  $('#contact').tooltip();
});

$(document).ready(function() {
  $('#connect').tooltip();
});



$('document').ready(function() {

  $('#clientsOpen').on({
    'mouseover' : function() {
      $(this).attr('className','glyphicon-chevron-down');
    },
    click : function() {
  $(this).attr('src','http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png');
    }
  });
});



 $(document).ready(function() {
    //collapsible management
        $('.collapsible').collapsible({
            defaultOpen: 'section1,section3'
        });
    });