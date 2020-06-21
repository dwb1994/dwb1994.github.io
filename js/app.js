var $navIcon = document.getElementById('js-nav-btn');
var $menu = undefined;
var utils = {
	debounce: function(func, wait) {
		var timeout;
		return function () {
			clearTimeout(timeout);
			timeout = setTimeout(func, wait);
		};
	}
};

// initial components
function initComponents() {
	// nav
	navigation = responsiveNav('.js-nav', {
		customToggle: '#js-nav-btn'
	});
}

initComponents();

