$( document ).ready(function() {
    console.log( "ready!" );
});

//information popover
$(".openInform").click(function() {
 $(".informPopover").addClass("visible");
});
$(".closeInform").click(function() {
  $(".informPopover").removeClass("visible");
  $(".informPopover").addClass("end");
});

//newfeature popover
$(".gotit").click(function(){
  $(".nfPopover").addClass("hidden");
  // $(".nfPopover").addClass("@keyframes fade-out-down");
});
