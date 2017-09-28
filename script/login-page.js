/**
 * Created by wenhaoran1 on 17/9/9.
 */
function checkLogin(){
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    if(name==""||pass==""){
        alert("用户名或密码不能为空！");
    }
    else{
        if(name=='dtts' && pass == 'dtts123') {
            window.location.href='user-page.html';
            return false;       /*解决了之前无法跳转的问题*/
        }
        else{
            alert("用户名或密码错误！");
        }
    }
}