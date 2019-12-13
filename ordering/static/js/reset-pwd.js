
var reset = {
    init: function () {
        this.eventBind()
    },
    eventBind: function () {

        $('#save').click(function () {

            var btn = $(this);
            var old_password = $('#old_password').val();
            var new_password = $('#new_password').val();


            if (!old_password) {
                common_ops.alert("请输入符合规范");
                return false;
            }

            if (!new_password) {
                common_ops.alert("请输入符合规范");
                return false;
            }

            $.ajax({
                url: '/user/reset-pwd',
                type: 'POST',
                data: {
                    old_password: old_password,
                    new_password: new_password
                },
                dataType: 'json',
                success: res => {
                    let callback = null;
                    if (res.error_code === 0)  {
                        callback = function() {
                            window.location.reload();
                        };

                    common_ops.alert(res.msg, callback);
                    }
                }
            })

        });

    }
};


$(document).ready(function () {
    reset.init()
});