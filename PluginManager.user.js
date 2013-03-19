// ==UserScript==
// @name 			Phone Gap PluginManager
// @namespace		http://www.telenav.com
// @description		Used for hack phone gap
// @match			http://*/login_startup_service/*
// @run-at			document-start
// @version 		2.0.0
// ==/UserScript==

alert("fff");
var PluginManager = {
    exec:function (service, action, callbackId, jsonArgs, async) {
        alert("servie=" + service+"action=" + action+"callbackId=" + callbackId+"jsonArgs=" + jsonArgs+"async=" + async);
        if(service == "Device" && action == "getDeviceInfo"){
            return "{ status: 1, message: '{\"platform\":\"ANDROID\",\"version\":\"7.2.01\",\"name\":\"TN\",\"phonegap\":\"0.9.2\",\"uuid\":\"uuid\"}' }";
        }else if(service == "Notification"){
            return "{ status: 1, message: '' }";
        }else if(service == "TNWebViewUtil"){
            return "{ status: 1, message: '' }";
        }else if(service == "Navigation"){
            return "{ status: 1, message: 'Invalid action' }";
        }else if(service == "TNServiceUtil"){
            return "{ status: 1, message: '' }";
        }else if(service == "TNPrivateService"){
            var jsonObject = eval('(' + jsonArgs + ')');
            if(jsonObject[0] == "RetrieveCurrentAddress"){
                var dummyPoiDetail = '{"id":0,"poi":{"stop":{"zip":"94086","lon":-12199559,"isGeocoded":false,"stopId":0,"province":"CA","label":"","firstLine":"150 LAWRENCE STATION RD","type":0,"lat":3737114,"city":"SUNNYVALE","country":"US"},"hasPoiMenu":true,"hasPoiExtraAttributes":true,"hasAdsMenu":false,"hasPoiDetails":false,"supplimentInfos":[{"supportInfo":"[87]","price":"$3.889"},{"supportInfo":"[87]","price":"$3.889"},{"supportInfo":"[89]","price":"$4.059"},{"supportInfo":"[89]","price":"$4.059"},{"supportInfo":"[91]","price":"$4.059"},{"supportInfo":"[91]","price":"$4.059"}],"hasReviews":false,"type":196,"isRatingEnable":true,"hasDeals":false,"isSponsorPoi":false,"bizPoi":{"stop":{"zip":"94086","lon":-12199559,"isGeocoded":false,"stopId":0,"province":"CA","label":"","firstLine":"150 LAWRENCE STATION RD","type":0,"lat":3737114,"city":"SUNNYVALE","country":"US"},"distance":"1590","price":"$3.889","phoneNumber":"4087301892","poiId":"3000620744","categoryId":"30019","brand":"COSTCO- SUNNYVALE #423","distanceWithUnit":"1.1 mi"},"isAdsPoi":false,"rating":0,"rated":false,"usePreviousRating":0,"rateNumber":0,"popularity":0},"existedInFavorite":false,"stop":{"zip":"94086","lon":-12199559,"isGeocoded":false,"stopId":0,"province":"CA","label":"","firstLine":"150 LAWRENCE STATION RD","type":0,"lat":3737114,"city":"SUNNYVALE","country":"US"},"sharedFromUser":"","selectedIndex":0,"phoneNumber":"4087301892","status":1,"label":"COSTCO- SUNNYVALE #423","type":2,"sharedFromPTN":""}';
                return "{ status: 1, message: '"+dummyPoiDetail+"' }";
            }else if(jsonObject[0] == "GetSeriveURL"){
                //["GetSeriveURL",{"urlKey":"HOTEL"}]
                var urlKey = jsonObject[1].urlKey;
                var urlJson = {"ADJUGGLER_NONPREMIUM":escape("http://telenav.rotator.hadj7.adjuggler.net/servlet/ajrotator/138069/0/vh?z=telenav"),
                    "ADJUGGLER_PREMIUM":escape("http://telenav.rotator.hadj7.adjuggler.net/servlet/ajrotator/138071/0/vh?z=telenav"),
                    "APPSTORE_CHECKOUT":escape("http://hqs-ecommerce.telenav.com/appstore/api/getjs.do"),
                    "APPSTORE_URL":escape("http://hqs-ecommerce.telenav.com/appstore/api/getjs.do"),
                    "FACEBOOK_URL":escape("https://www.facebook.com/dialog/oauth?client_id=176472375783223&response_type=token&display=touch"),
                    "HOTEL":escape("http://192.168.86.22:8080/local_app_fwk/html/goToJsp.do?jsp=roomList&from=POI"),
                    "LOGIN":escape("http://hqs-certsprint02.telenav.com/login_startup_service"),
                    "MOVIE":escape("http://hqs-certsprint02.telenav.com/movie"),
                    "OPENTABLE":escape("http://192.168.86.22:8080/local_app_fwk/html/goToJsp.do?jsp=openTable_reservationDetail"),
                    "RESOURCE":escape("http://172.16.10.178:8080")};
                eval("var url=urlJson."+urlKey+";");
                if(url == undefined){
                    return "{ status: 1, message: '" + buildObjectJavascriptCode(urlJson) + "' }";
                }else{
                    return "{ status: 1, message: '{key: " + urlKey + ",url:" + url + "' }";
                }
            }else{
                alert("Unsupport action for "+service);
                return "{ status: 1, message: '' }";
            }
        }else{
            alert("Unsupport service "+service);
            return "{ status: 1, message: 'Invalid service' }";
        }
    }
};
document.addEventListener('DOMContentLoaded', function() {
    PhoneGap.onNativeReady.fire();
}, false);

var cb = document.createElement("script");
cb.type = "text/javascript";
cb.textContent = buildCallback(PluginManager);
document.head.appendChild(cb);

alert(cb.textContent);

function buildCallback(callback) {
    var content = "window.PluginManager=" + buildObjectJavascriptCode(callback) + ";window.PluginManager.exec(\"aa\", \"bb\", \"cc\", \"dd\", \"ee\");";
    return content;
}

function buildObjectJavascriptCode(object) {
    if (!object) return null;

    var t = typeof (object);
    if (t == "string") {
        return "\"" + object.replace(/(\r|\n|\\)/gi, function (a, b) {
            switch (b) {
                case "\r":
                    return "\\r";
                case "\n":
                    return "\\n";
                case "\\":
                    return "\\\\";
            }
        }) + "\"";
    }
    if (t != "object") return object + "";

    var code = [];
    for (var i in object) {
        var obj = object[i];
        var objType = typeof (obj);

        if ((objType == "object" || objType == "string") && obj) {
            code.push(i + ":" + buildObjectJavascriptCode(obj));
        } else {
            code.push(i + ":" + obj);
        }
    }

    return "{" + code.join(",") + "}";
}