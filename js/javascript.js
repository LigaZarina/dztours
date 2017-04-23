$(".faq_question").click(function () {
	var container = $(this).parents(".faq_container");
	var answer = container.find(".faq_answer");
	var trigger = container.find(".faq_collapse");

	answer.slideToggle(200);

	if (trigger.hasClass("faq-expand")) {
		trigger.removeClass("faq-expand");
	} else {
		trigger.addClass("faq-expand");
	}
});


// burger nav effect
$(document).ready(function () {
	$("#burger-container").on("click", function () {
		$("#burger-container").toggleClass("open"),
			$(".menu").toggleClass("show"); //onclick 'this' -> burger-container toggles with a class of 'open'
	});
});
