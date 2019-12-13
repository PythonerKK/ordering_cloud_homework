

var timer;
$(function() {
	  $(document).ready(function() {
	    Highcharts.setOptions({
	      global: {
	        useUTC: false
	      },
	      colors:['#6699ff','#00ff01']
	    });
	    var chart;
	    chart = new Highcharts.Chart({
	      chart: {
	        renderTo: 'container',
	        type: 'line',
	        animation: Highcharts.svg,
	        marginRight: 10,
	        events: {
	          load: function() {}
	        }
	      },
	      title: {
	        text: 'CPU/内存使用率'
	      },
	      credits: {
	    	enabled: false
	      },
	      xAxis: {
	        type: 'datetime',
	        tickPixelInterval: 50
	      },
	      yAxis: [{
		     max:100,
		     title: {
		         text: '值(百分比)'
		     },
		  }],
		  tooltip: {
	        formatter: function () {
              return  Highcharts.dateFormat('%H:%M:%S', this.x) + '<br/>' + Highcharts.numberFormat(this.y, 0)+"%";
            }
	      },
	      series: [{
	        name: 'CPU使用率',
	        marker:{
	        	enabled:false //去掉节点
	        },
	        data: (function() {
	          var data = [],
	          time = (new Date()).getTime(),
	          i;
	          for (i = -60; i <= 0; i++) {
	            data.push({
	              x: time + i * 1000,
	              y: 0
	            });
	          }
	          return data;
	        })()
	      },
	      {
		    name: '内存使用率',
		    marker:{
		      	enabled:false //去掉节点
		    },
		    data: (function() {
		       var data = [],
		       time = (new Date()).getTime(),
		       i;
		       for (i = -60; i <= 0; i++) {
		         data.push({
		         	x: time + i * 1000,
		         	y: 0
		         });
		       }
		       return data;
		     })()
		    }
	      ]
	    });
	    var series1 = chart.series[0];
	    var series2 = chart.series[1];
	    timer = setInterval(function() {
			$.ajax({
				url: '/',
				type:"POST",
				success: res =>{
				  $('#cpu').text(res.cpu_state + "%");
				  $('#mem').text(res.memory);
				  $('#boot').text(res.boot_time)
			      var x = (new Date()).getTime();

			      series1.addPoint([x, parseInt(res.cpu_state)], true, true);
			      series2.addPoint([x, res.cpu_percent], true, true);
				}
			});

	    },
	    1000);
	  });
	});

	function stop(){
		clearInterval(timer);
	}
