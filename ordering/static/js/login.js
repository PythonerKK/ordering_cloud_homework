
var login = {
    init: function () {
        this.eventBind();
    },
    eventBind: function () {
        $('.login_wrap .do-login').click(function () {
            var loginName = $('.login_wrap input[name=login_name]').val();
            var loginPwd = $('.login_wrap input[name=login_pwd]').val();

            if (!loginName || !loginPwd) {
                common_ops.alert("请输入正确的登录用户名");
                return;
            }
            $.ajax({
                url: '/user/login',
                type: "POST",
                data: {
                    "login_name": loginName,
                    "login_pwd": loginPwd,
                },
                dataType: 'json',
                success: res => {
                    let callback = null;
                    if (res.error_code === 0) {
                        callback = function() {
                            window.location.href = '/';
                        }
                    } else if (res.error_code === 1007) {

                    }
                    common_ops.alert(res.msg, callback);
                }
            })
        })
    },

}


$(document).ready(function () {
    login.init()
})