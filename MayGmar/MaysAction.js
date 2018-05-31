
var centerX = (1920 / 2);
var centerY = (1080 / 2);

var OutRight = "OutRight";
var OutLeft = "OutLeft";
var OutBottom = "OutBottom";
var OutTop = "OutTop";


Actions.push(
{
	id : "_1_chair",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 0,
		positionX : 963, // OutRight, OutLeft,
		positionY : 517, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 100,
		positionX : 963, // OutRight, OutLeft,
		positionY : 517, // OutTop, OutBottom
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
	id : "_2_body",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 100,
		positionX : 963, // OutRight, OutLeft,
		positionY : OutTop, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 200,
		positionX : 963, // OutRight, OutLeft,
		positionY : 826, // OutTop, OutBottom
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
	id : "_3_face",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 100,
		positionX : 963, // OutRight, OutLeft,
		positionY : OutBottom, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 200,
		positionX : 963, // OutRight, OutLeft,
		positionY : 500, // OutTop, OutBottom
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
	id : "_4_maskdown",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 300,
		positionX : 963, // OutRight, OutLeft,
		positionY : OutTop, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 400,
		positionX : 963, // OutRight, OutLeft,
		positionY : 664, // OutTop, OutBottom
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
	id : "_5_maskup",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 300,
		positionX : 963, // OutRight, OutLeft,
		positionY : OutBottom, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 400,
		positionX : 963, // OutRight, OutLeft,
		positionY : 332, // OutTop, OutBottom
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
	id : "_1_chair",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 500,
		positionX : 963, // OutRight, OutLeft,
		positionY : 517, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 600,
		positionX : 963, // OutRight, OutLeft,
		positionY : 517, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 0,
	},
	before : {
	}
});


Actions.push(
{
	id : "_2_body",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 500,
		positionX : 963, // OutRight, OutLeft,
		positionY : 826, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 600,
		positionX : 963, // OutRight, OutLeft,
		positionY : 826, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 0,
	},
	before : {
	}
});




Actions.push(
{
	id : "_3_face",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 500,
		positionX : 963, // OutRight, OutLeft,
		positionY : 500, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 600,
		positionX : 963, // OutRight, OutLeft,
		positionY : 500, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 0,
	},
	before : {
	}
});



Actions.push(
{
	id : "_4_maskdown",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 500,
		positionX : 963, // OutRight, OutLeft,
		positionY : 664, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 600,
		positionX : 963, // OutRight, OutLeft,
		positionY : 664, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 0,
	},
	before : {
	}
});


Actions.push(
{
	id : "_5_maskup",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 500,
		positionX : 963, // OutRight, OutLeft,
		positionY : 332, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 600,
		positionX : 963, // OutRight, OutLeft,
		positionY : 332, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 0,
	},
	before : {
	}
});


Actions.push(
{
	id : "_6_shachalot",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 500,
		positionX : 950, // OutRight, OutLeft,
		positionY : 593, // OutTop, OutBottom
		opacity : 0,
		scale : 1,
		rotate : 180,
	},
	end : {
		wheelPosition : 600,
		positionX : 950, // OutRight, OutLeft,
		positionY : 593, // OutTop, OutBottom
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
	id : "_7_eyes",
	status : 0, // 0 before, 1 inside, 2 after
	start : {
		wheelPosition : 700,
		positionX : 953, // OutRight, OutLeft,
		positionY : OutBottom, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	end : {
		wheelPosition : 800,
		positionX : 953, // OutRight, OutLeft,
		positionY : 514, // OutTop, OutBottom
		opacity : 1,
		scale : 1,
		rotate : 0,
	},
	before : {
		visible : "hidden"
	}
});