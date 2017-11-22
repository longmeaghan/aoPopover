$(document).ready(function() {
  console.log("ready!");
});

//information popover TOP
$(".openInformTop").click(function() {
  $(".informPopoverTop").addClass("visible");
});
$(".closeInformTop").click(function() {
  $(".informPopoverTop").removeClass("visible");
  $(".informPopoverTop").addClass("end");
});

$(".openInformBottom").click(function() {
  $(".informPopoverBottom").addClass("visible");
});
$(".closeInformBottom").click(function() {
  $(".informPopoverBottom").removeClass("visible");
  $(".informPopoverBottom").addClass("end");
});

$(".openInformRight").click(function() {
  $(".informPopoverRight").addClass("visible");
});
$(".closeInformRight").click(function() {
  $(".informPopoverRight").removeClass("visible");
  $(".informPopoverRight").addClass("end");
});

$(".openInformLeft").click(function() {
  $(".informPopoverLeft").addClass("visible");
});
$(".closeInformLeft").click(function() {
  $(".informPopoverLeft").removeClass("visible");
  $(".informPopoverLeft").addClass("end");
});



//newfeature popover
$(".gotitTop").click(function() {
  $(".nfPopoverTop").addClass("hidden");
});

$(".gotitBottom").click(function() {
  $(".nfPopoverBottom").addClass("hidden");
});

$(".gotitRight").click(function() {
  $(".nfPopoverRight").addClass("hidden");
});

$(".gotitLeft").click(function() {
  $(".nfPopoverLeft").addClass("hidden");
});
