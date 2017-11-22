$( document ).ready(function() {
    console.log( "ready!" );
});

//information popover TOP
$(".openInformTop").click(function() {
 $(".informPopoverTop").addClass("visible");
});
$(".closeInformTop").click(function() {
  $(".informPopoverTop").removeClass("visible");
  $(".informPopoverTop").addClass("end");
});

//newfeature popover
$(".gotit").click(function(){
  $(".nfPopoverTop").addClass("hidden");
  // $(".nfPopover").addClass("@keyframes fade-out-down");
});
