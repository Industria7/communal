$(document).ready(function(){
$('[data-bs-chart]').each(function(index, elem) {
		this.chart = new Chart($(elem), $(elem).data('bs-chart'));
	});
//$('nav ul li a').each(function () {
//        var location = window.location.href;
//        var link = this.href;
//        if(location == link) {
//            $(this).addClass('active');
//        }
//    });
});

