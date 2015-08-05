var $navBtnIntro = $('.nav-btn-intro');
var $navPanelIntro = $('.nav-panel-intro');  
var $navBtnStyle = $('.nav-btn-style'); 
var $navPanelStyle = $('.nav-panel-style');
var $navBtnResources = $('.nav-btn-resources');
var $navPanelResources = $('.nav-panel-resources');

    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        $('.nav-bar').toggleClass('js-nav-open'); 
    });

    $navBtnIntro.on('click', function () {
    	$navPanelIntro.toggleClass('js-panel-open');
    });

    $navBtnStyle.on('click', function () {
    	$navPanelStyle.toggleClass('js-panel-open');
    });

    $navBtnResources.on('click', function () {
        $navPanelResources.toggleClass('js-panel-open');
    })