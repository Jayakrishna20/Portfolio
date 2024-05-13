$(".view-more").click(() => {
  let txt = $("#view-more-content").text();

  if (txt == "View More") {
    $("#view-more-content").text("View Less");

    $(".hidden-card").css({ display: "block" });
  } else {
    $("#view-more-content").text("View More");

    $(".hidden-card").css({ display: "none" });
  }
});
