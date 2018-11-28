import Cookies from 'universal-cookie';
const cookies = new Cookies();

class CookiesUtil {

  function setCookieToken(token) {
    let d = new Date();
    var minutes = 60;
    d.setTime(d.getTime() + (minutes*60*1000));

    cookies.set("token", token, {path: "/", expires: d});
  };

}


module.exports = {}
