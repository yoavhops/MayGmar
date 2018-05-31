
var centerX = (1920 / 2);
var centerY = (1080 / 2);

var OutRight = "OutRight";
var OutLeft = "OutLeft";
var OutBottom = "OutBottom";
var OutTop = "OutTop";

Actions.push(
{
	id : "_1_SmokingSmiley",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 100,
		positionX : OutRight, // OutRight, OutLeft,
		positionY : centerY, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 800,
		positionX : centerX - 200, // OutRight, OutLeft,
		positionY : centerY, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	before : {
		visible : "hidden"
	}
});

Actions.push(
{
	id : "_2_SmokingSmiley",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 200,
		positionX : centerX, // OutRight, OutLeft,
		positionY : OutBottom, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 900,
		positionX : centerX, // OutRight, OutLeft,
		positionY : centerY - 200, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	before : {
		visible : "hidden"
	}
});

Actions.push(
{
	id : "_3_SmokingSmiley",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 300,
		positionX : OutLeft, // OutRight, OutLeft,
		positionY : centerY, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 1000,
		positionX : centerX + 200, // OutRight, OutLeft,
		positionY : centerY, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	before : {
		visible : "hidden"
	}
});

Actions.push(
{
	id : "_4_SmokingSmiley",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 400,
		positionX : centerX, // OutRight, OutLeft,
		positionY : OutTop, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 1100,
		positionX : centerX, // OutRight, OutLeft,
		positionY : centerY + 200, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	before : {
		visible : "hidden"
	}
});

Actions.push(
{
	id : "_1_SmokingSmiley",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 1600,
		positionX : centerX - 200, // OutRight, OutLeft,
		positionY : centerY, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 2000,
		positionX : OutLeft, // OutRight, OutLeft,
		positionY : centerY, // OutTop, OutBottom
		opacity : 0.0,
		scale : 1,
		rotate : 0,
	},
	before : {
		visible : "" // NOTICE THAT
	}
});


Actions.push(
{
	id : "_4_SmokingSmiley",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 2500,
		positionX : centerX, // OutRight, OutLeft,
		positionY : centerY + 200, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 3000,
		positionX : centerX, // OutRight, OutLeft,
		positionY : centerY + 200, // OutTop, OutBottom
		opacity : 1,
		scale : 4,
		rotate : 360 * 2,
	},
	before : {
		visible : ""
	}
});
