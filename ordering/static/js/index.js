
var dashboard_index_ops = {
    init:function(){
        this.drawChart();
    },
    drawChart:function(){
        charts_ops.setOption();
        $.ajax({
            url:"/stat/api/dashboard",
            dataType:'json',
            cache: false,
            success: res => {
                charts_ops.drawLine($('#member_order'), res)
            }
        });

        $.ajax({
            url:"/stat/api/stat/",
            dataType:'json',
            cache: false,
            success: res => {
                charts_ops.drawLine($('#finance'), res)
            }
        });
    }
};

$(document).ready( function(){
    dashboard_index_ops.init();
});
