	var timelineBlocks = $('.cd-timeline-block');
  var demoStart = false;

	//hide timeline blocks which are outside the viewport
	hideAllBlocks(timelineBlocks);
  
	function hideAllBlocks(blocks, offset) {
    blocks.hide();
	}

  function startDemo() {
    if(!demoStart){
      demo1();
      demoStart = true;
    }else{
      hideAllBlocks(timelineBlocks);
      demoStart = false;
    }
  }

	function demo1() {
    $('#demo1').show();
    setTimeout(demo2, 2000) //wait ten seconds before continuing
	}

  function demo2() {
    $('#demo2').show();
    setTimeout(demo3, 2000) //wait ten seconds before continuing
	}

  function demo3() {
    $('#demo3').show();
    setTimeout(demo4, 2000) //wait ten seconds before continuing
	}

  function demo4() {
    $('#demo4').show();
    setTimeout(demo5, 2000) //wait ten seconds before continuing
	}

  function demo5() {
    $('#demo5').show();
    setTimeout(demo6, 2000) //wait ten seconds before continuing
	}

  function demo6() {
    $('#demo6').show();
    setTimeout(demo7, 2000) //wait ten seconds before continuing
	}

  function demo7() {
    $('#demo7').show();
	}

  function engineON(){
     $('#EngineStatus')[0].innerHTML = "RUNNING"
  }
