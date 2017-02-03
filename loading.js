//Requirement : SpinKit < https://github.com/tobiasahlin/SpinKit > 

var Loading = {
	loadingSel : null,
	temp : '<div class="loading sk-double-bounce hide">\
					<div class="sk-child sk-double-bounce1"></div>\
					<div class="sk-child sk-double-bounce2"></div>\
				</div>',
	
	init : function(target){
		var self = this;
		var target = target || $('body');


		target.append($(self.temp));
		self.loadingSel = target.find('.loading');
	},

	show : function(){
		var self = this;

		self.loadingSel.removeClass('hide');
	},

	hide : function(){
		var self = this;

		self.loadingSel.addClass('hide');
	}
}