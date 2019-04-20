export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}

export function setCookies(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

export function delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cavl = getCookie(name);
    if (cavl != null){
        document.cookie = name + "=" + cavl + ";expires=" + exp.toGMTString();
    }
}