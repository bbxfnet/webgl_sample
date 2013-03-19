function getDate() {
    App.GetDate(getDate_Callback)
}
function getDate_Callback(res) {
    if (res) {
        groups = eval(res.value)
    }
}
function initialValue(a) {
    $("#insuranceMax").val(a.insuranceMax);
    $("#pension").val(a.pension);
    $("#medicare").val(a.medicare);
    $("#unemploymentInsurance").val(a.unemploymentInsurance);
    $("#fund").val(a.fund);
    $("#threshold").val(_threshold);
    $("#pensionFirm").val(a.pensionFirm);
    $("#medicareFirm").val(a.medicareFirm);
    $("#unemploymentInsuranceFirm").val(a.unemploymentInsuranceFirm);
    $("#fundFirm").val(a.fundFirm);
    $("#industrialInjuryFirm").val(a.industrialInjuryFirm);
    $("#maternityInsuranceFirm").val(a.maternityInsuranceFirm);
    $("#domestic").attr("checked", true);
    $("#overseas").attr("checked", false);
    minWage = a.minWage;
    medicarePlan = a.medicarePlan;
    insuranceMin = a.insuranceMin
}
function changeType() {
    switch (jQuery.trim($("#taxType").val())) {
        case"0":
            payrollCalculateShow();
            break;
        case"9":
            enterpriseCalculateShow();
            break;
        case"8":
            privatelyCalculateShow();
            break;
        case"1":
        case"2":
            otherCalculateShow();
            break;
        case"3":
        case"4":
        case"5":
        case"6":
        case"7":
        case"8":
        case"9":
        case"10":
            otherCalculateShow2();
            break;
        case"11":
            annualCalculateShow();
            break;
        case"12":
            compensationCalculateShow();
            break;
        case"14":
            simplifiedDIVShow();
            break;
        default:
            decollatorShow();
            break
    }
}
function simplifiedDIVShow() {
    insuranceBaseType = 0;
    fundBaseType = 0;
    $("#payrollDIV").hide();
    $("#annualDIV").hide();
    $("#compensationDIV").hide();
    $("#decollator").hide();
    $("#otherRapidDIV").hide();
    $("#otherRapidDIV2").hide();
    $("#enterpriseDIV").hide();
    $("#privatelyDIV").hide();
    $("#simplifiedSalary").val("");
    $("#simplifiedInsurance").val("");
    $("#simplifiedAftertax").val("");
    $("#simplifiedTax").val("");
    $("#simplifiedThreshold").val(_threshold);
    $("#simplifiedDIV").show();
    for (var a = 1; a < 11; a++) {
        $("#DIV" + a.toString()).hide()
    }
    $("#DIV14").hide();
    $("#DIV" + $("#taxType").val()).show();
    $("#otherDIV").show()
}
function decollatorShow() {
    $("#payrollDIV").hide();
    $("#annualDIV").hide();
    $("#compensationDIV").hide();
    $("#otherDIV").hide();
    $("#decollator").show();
    App.DBAppendOther(0, 0, 13)
}
function payrollCalculateShow() {
    insuranceBaseType = 0;
    fundBaseType = 0;
    $("#otherDIV").hide();
    $("#annualDIV").hide();
    $("#compensationDIV").hide();
    $("#decollator").hide();
    $("#city").val("请选择城市");
    $("#cityId").val("0");
    $("#area").val("0");
    $("#tax").val("");
    $("#personalTotal").html("");
    $("#pretaxTotal").html("");
    $("#pension").val("");
    $("#pensionSpan").html("");
    $("#medicare").val("");
    $("#medicareSpan").html("");
    $("#unemploymentInsurance").val("");
    $("#unemploymentInsuranceSpan").html("");
    $("#fund").val("");
    $("#fundSpan").html("");
    $("#firmTotal").html("");
    $("#firmExpenseTotal").html("");
    $("#pensionFirm").val("");
    $("#pensionFirmSpan").html("");
    $("#medicareFirm").val("");
    $("#medicareFirmSpan").html("");
    $("#unemploymentInsuranceFirm").val("");
    $("#unemploymentInsuranceFirmSpan").html("");
    $("#industrialInjuryFirm").val("");
    $("#industrialInjuryFirmSpan").html("");
    $("#maternityInsuranceFirm").val("");
    $("#maternityInsuranceFirmSpan").html("");
    $("#fundFirm").val("");
    $("#fundFirmSpan").html("");
    $("#insuranceBase").val("");
    $("#fundBase").val("");
    $("#insuranceMax").val("");
    $("#threshold").val(_threshold);
    $("#aftertax").val("");
    $("#salary").val("");
    $("#domestic").attr("checked", true);
    $("#overseas").attr("checked", false);
    $("#payrollDIV").show()
}
function showCitiesDIV(a, b, c) {
    var d = new StringBuilder;
    d.append('<div style="display: block;" class="com_hotresults" onkeyup="changPosition(event);">');
    d.append('<div style="width: 100%;">');
    d.append('<div class="ac_title">');
    d.append('<span>可用箭头键<span style="font-family: simsun;"> ←↑↓→ </span>选择</span>');
    d.append('<a class="ac_close" href="#?" method="close" title="关闭"></a>');
    d.append("</div>");
    d.append('<ul class="AbcSearch clx" >');
    if (b == "" || b == "其它" || a == 0) {
        a = 0;
        d.append('<li class="action">热门</li>')
    } else {
        d.append("<li onclick=\"changeArea('0');\" onmouseover=\"this.className='ac_over'\" onmouseout=\"this.className=''\">热门</li>")
    }
    if (a == 1 || c == "a" || c == "b" || c == "c" || c == "d") {
        a = 1;
        d.append('<li class="action">A-D</li>')
    } else {
        d.append("<li onclick=\"changeArea('1');\" onmouseover=\"this.className='ac_over'\" onmouseout=\"this.className=''\">A-D</li>")
    }
    if (a == 2 || c == "e" || c == "f" || c == "g" || c == "h" || c == "i" || c == "j") {
        a = 2;
        d.append('<li class="action" >E-J</li>')
    } else {
        d.append("<li onclick=\"changeArea('2');\" onmouseover=\"this.className='ac_over'\" onmouseout=\"this.className=''\" >E-J</li>")
    }
    if (a == 3 || c == "k" || c == "l" || c == "m" || c == "n") {
        a = 3;
        d.append('<li class="action">K-N</li>')
    } else {
        d.append("<li onclick=\"changeArea('3');\" onmouseover=\"this.className='ac_over'\" onmouseout=\"this.className=''\">K-N</li>")
    }
    if (a == 4 || c == "o" || c == "p" || c == "q" || c == "r" || c == "s" || c == "t" || c == "u" || c == "v" || c == "w") {
        a = 4;
        d.append('<li class="action">O-W</li>')
    } else {
        d.append("<li onclick=\"changeArea('4');\" onmouseover=\"this.className='ac_over'\" onmouseout=\"this.className=''\">O-W</li>")
    }
    if (a == 5 || c == "x" || c == "y" || c == "z") {
        a = 5;
        d.append('<li class="action">X-Z</li>')
    } else {
        d.append("<li onclick=\"changeArea('5');\" onmouseover=\"this.className='ac_over'\" onmouseout=\"this.className=''\">X-Z</li>")
    }
    d.append("<li onclick=\"changeArea('6');\" onmouseover=\"this.className='ac_over'\" onmouseout=\"this.className=''\">其它</li>");
    d.append('<div style="clear:both"></div>');
    d.append("</ul>");
    if (b == "-1") {
        b = ""
    }
    d.append('<div style="clear:both"></div>');
    d.append('<ul style="overflow: auto; max-height: 260px;">');
    var e = 0;
    if (groups.length > a) {
        for (var f = 0; f < groups[a].length; f++) {
            if (groups[a][f].name != "其它") {
                d.append('<li class="ac_odd ' + (b == groups[a][f].name || b == "" && e == 0 ? "ac_over" : "") + '" id="' + a + "_" + e + '" onclick="setCity(\'' + a + "','" + groups[a][f].id + "','" + groups[a][f].name + "');\" onmouseover=\"this.className='ac_odd ac_over'\" onmouseout=\"this.className='ac_odd'\">" + groups[a][f].name + "</li>");
                e++
            }
        }
    }
    d.append("</ul>");
    d.append('<input id="cityCount" type="hidden" value="' + e + '" />');
    d.append("</div>");
    d.append('<div class="clear"></div>');
    d.append("</div>");
    return d.toString()
}
function setCityDIVClass(a, b) {
    var c = false;
    for (var d = 0; d < parseInt($("#cityCount").val()); d++) {
        $("#" + b + "_" + d).removeClass("ac_over");
        if (d == 0) {
            $("#" + b + "_" + d)[0].className = "ac_odd ac_over"
        }
        if ($("#" + b + "_" + d).html() == a) {
            c = true;
            $("#" + b + "_" + d)[0].className = "ac_odd ac_over"
        }
    }
    if (c) {
        $("#" + b + "_0").removeClass("ac_over")
    }
}
function showCityDIV() {
    HiddenMengBan();
    $("#city").select();
    $("#city").val(jQuery.trim($("#city").val()) == "请选择城市" ? "" : jQuery.trim($("#city").val()));
    var a = jQuery.trim($("#city").val()) == "其它" ? "" : jQuery.trim($("#city").val());
    var b = showCitiesDIV(parseInt($("#area").val()), a, makePy(a));
    if ($("#taxType").val() == "0") {
        $("#cityDIV").html(b);
        $("#cityDIV").show()
    } else if ($("#taxType").val() == "11") {
        $("#annualCityDIV").html(b);
        $("#annualCityDIV").show()
    } else {
        $("#compensationCityDIV").html(b);
        $("#compensationCityDIV").show()
    }
    setCityDIVClass(a, parseInt($("#area").val()))
}
function hideCityDIV() {
    $("#cityDIV").hide()
}
function setCity(a, b, c) {
    $("#area").val(a);
    $("#cityId").val(b);
    if ($("#taxType").val() == "0") {
        $("#city").val(c);
        hideCityDIV()
    } else if ($("#taxType").val() == "11") {
        $("#annualCity").val(c);
        hideCityDIVAnnual()
    } else {
        $("#compensationCity").val(c);
        hideCityDIVCompensation()
    }
    changeThisCity();
    for (var d = 0; d < parseInt($("#cityCount").val()); d++) {
        $("#" + $("#area").val() + "_" + d).removeClass("ac_over");
        if ($("#" + $("#area").val() + "_" + d).html() == c) {
            $("#" + $("#area").val() + "_" + d)[0].className = "ac_odd ac_over"
        }
    }
}
function changeArea(a) {
    if (a == "6") {
        $("#area").val("0");
        setCity($("#area").val(), jQuery.trim($("#otherID").val()), "其它")
    } else {
        var b = "";
        if ($("#taxType").val() == "0") {
            $("#city").select();
            b = jQuery.trim($("#city").val()) == "其它" ? "" : jQuery.trim($("#city").val())
        } else if ($("#taxType").val() == "11") {
            $("#annualCity").select();
            b = jQuery.trim($("#annualCity").val()) == "其它" ? "" : jQuery.trim($("#city").val())
        } else {
            $("#compensationCity").select();
            b = jQuery.trim($("#compensationCity").val()) == "其它" ? "" : jQuery.trim($("#city").val())
        }
        var c = showCitiesDIV(parseInt(a), "-1", makePy(b));
        if ($("#taxType").val() == "0") {
            $("#cityDIV").html(c);
            $("#cityDIV").show()
        } else if ($("#taxType").val() == "11") {
            $("#annualCityDIV").html(c);
            $("#annualCityDIV").show()
        } else {
            $("#compensationCityDIV").html(c);
            $("#compensationCityDIV").show()
        }
        setCityDIVClass(b, a)
    }
}
function changPosition(a) {
    var b = jQuery.trim($("#area").val());
    if (a.keyCode == 13) {
        var c = jQuery.trim($("#cityCount").val());
        for (var d = 0; d < parseInt(c, 10); d++) {
            if ($("#" + b + "_" + d.toString()).hasClass("ac_over")) {
                App.SelCityName(jQuery.trim($("#" + b + "_" + d).html()), changPosition_Callback);
                hideCityDIV();
                return
            }
        }
    } else if (a.keyCode == 37) {
        var c = jQuery.trim($("#cityCount").val());
        var e = 0;
        for (var d = 0; d < parseInt(c, 10); d++) {
            if ($("#" + b + "_" + d.toString()).hasClass("ac_over")) {
                e = d
            }
            $("#" + b + "_" + d).removeClass("ac_over")
        }
        if (e == 0) {
            e = parseInt(c, 10) - 1
        } else {
            e--
        }
        $("#" + b + "_" + e).addClass("ac_over")
    } else if (a.keyCode == 38) {
        var c = jQuery.trim($("#cityCount").val());
        var e = 0;
        for (var d = 0; d < parseInt(c, 10); d++) {
            if ($("#" + b + "_" + d.toString()).hasClass("ac_over")) {
                e = d
            }
            $("#" + b + "_" + d).removeClass("ac_over")
        }
        if (e - 4 < 0) {
            e = parseInt(c, 10) - 1
        } else {
            e -= 4
        }
        $("#" + b + "_" + e).addClass("ac_over")
    } else if (a.keyCode == 39) {
        var c = jQuery.trim($("#cityCount").val());
        var e = 0;
        for (var d = 0; d < parseInt(c, 10); d++) {
            if ($("#" + b + "_" + d.toString()).hasClass("ac_over")) {
                e = d
            }
            $("#" + b + "_" + d).removeClass("ac_over")
        }
        if (e == parseInt(c, 10) - 1) {
            e = 0
        } else {
            e++
        }
        $("#" + b + "_" + e).addClass("ac_over")
    } else if (a.keyCode == 40) {
        var c = jQuery.trim($("#cityCount").val());
        var e = 0;
        for (var d = 0; d < parseInt(c, 10); d++) {
            if ($("#" + b + "_" + d.toString()).hasClass("ac_over")) {
                e = d
            }
            $("#" + b + "_" + d).removeClass("ac_over")
        }
        if (e + 4 >= c) {
            e = e % 4
        } else {
            e += 4
        }
        $("#" + b + "_" + e).addClass("ac_over")
    }
}
function changPosition_Callback(res) {
    if (res) {
        eval(res.value)
    }
}
function showCityDIVBox() {
    var a = new StringBuilder;
    a.append('<div class="meng_k550">');
    a.append('<div class="meng_h">');
    a.append('<span class="f-l orange">系统提示</span>');
    a.append('<span class="f-r orange"><a href="javascript:showCityDIV();">关闭</a></span>');
    a.append("</div>");
    a.append('<div class="meng_bc" id="eCity">请选择城市。如所在城市未列出，请选择“其它”并可根据实际情况修改各项参数；或重新在“收入类型”中选择“月薪简化版”进行计算。</div>');
    a.append('<div class="button-margin2"><input id="btnOK" type="button" value="确定" onclick="showCityDIV();" class="bnt w60"></div>');
    a.append("</div>");
    $("#MBContent").html(a.toString());
    showMengban();
    $("#btnOK").focus()
}
function changeThisCity() {
    var a = new StringBuilder;
    if ($("#taxType").val() == "0") {
        if (jQuery.trim($("#city").val()) == "" || jQuery.trim($("#city").val()) == "请选择城市") {
            initialValue(arrayNull);
            showCityDIVBox()
        } else {
            changeArrayInsurance(jQuery.trim($("#city").val()))
        }
    } else if ($("#taxType").val() == "11") {
        if (jQuery.trim($("#annualCity").val()) == "" || jQuery.trim($("#annualCity").val()) == "请选择城市") {
            initialValueAnnual(arrayNull);
            showCityDIVBox()
        } else {
            changeArrayInsurance(jQuery.trim($("#annualCity").val()))
        }
    } else {
        if (jQuery.trim($("#compensationCity").val()) == "" || jQuery.trim($("#compensationCity").val()) == "请选择城市") {
            showCityDIVBox()
        } else {
            changeArrayInsurance(jQuery.trim($("#compensationCity").val()))
        }
    }
}
function changeArrayInsurance(a) {
    jQuery("#cityId").value = "";
    var b = false;
    for (var c = 0; c < groups.length; c++) {
        if (b) {
            break
        }
        for (var d = 0; d < groups[c].length; d++) {
            if (groups[c][d].name == a) {
                b = true;
                jQuery("#cityId").value = groups[c][d].id;
                arrayInsurance = groups[c][d].tax;
                break
            }
        }
    }
    if (!b) {
        if ($("#taxType").val() == "0") {
            initialValue(arrayNull)
        } else if ($("#taxType").val() == "11") {
            initialValueAnnual(arrayNull)
        }
        var e = new StringBuilder;
        e.append('<div class="meng_k">');
        e.append('<div class="meng_h">');
        e.append('<span class="f-l orange">系统提示</span>');
        e.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();">关闭</a></span>');
        e.append("</div>");
        e.append('<div class="meng_bc">请选择正确的城市！</div>');
        e.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();" value="确定" class="bnt w60"></div>');
        e.append("</div>");
        $("#MBContent").html(e.toString());
        showMengban();
        $("#btnOK").focus();
        return
    }
    initialValue(arrayInsurance);
    if ($("#taxType").val() == "0") {
        if (payrollType == 1) {
            if (jQuery.trim($("#salary").val()) != "") {
                calculateTaxes()
            }
        } else if (payrollType == -1) {
            if (jQuery.trim($("#aftertax").val()) != "") {
                calculateAftertax()
            }
        }
    } else if ($("#taxType").val() == "11") {
        initialValueAnnual(arrayInsurance)
    } else {
        $("#wagesAVG").val((parseFloat(arrayInsurance.insuranceMax) * 12 / 3).toFixed(0));
        if (jQuery.trim($("#compensationTax").val()) != "") {
            calculateTaxCompensation(0)
        }
    }
}
function calculateTax() {
    payrollType = 1;
    saveDB = 1;
    chkfloat($("#salary")[0]);
    if (jQuery.trim($("#city").val()) != "") {
        if (jQuery.trim($("#salary").val()) != "") {
            calculateTaxes()
        } else {
            var a = new StringBuilder;
            a.append('<div class="meng_k">');
            a.append('<div class="meng_h">');
            a.append('<span class="f-l orange">系统提示</span>');
            a.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#salary\')[0].focus();">关闭</a></span>');
            a.append("</div>");
            a.append('<div class="meng_bc">请输入税前月收入！</div>');
            a.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#salary\')[0].focus();" value="确定" class="bnt w60"></div>');
            a.append("</div>");
            $("#MBContent").html(a.toString());
            showMengban();
            $("#btnOK").focus()
        }
    } else {
        changeThisCity()
    }
}
function salaryKeydown(a) {
    if (a.keyCode == 13) {
        saveDB = 1;
        calculateTax()
    } else {
        payrollType = 0;
        chkfloatKeyup($("#salary")[0]);
        var b = jQuery.trim($("#salary").val()) == "" ? "0" : jQuery.trim($("#salary").val());
        var c = jQuery.trim($("#insuranceMax").val()) != "" ? jQuery.trim($("#insuranceMax").val()) : "0";
        var d = 0;
        if (insuranceBaseType == 0) {
            d = parseInt(b, 10) < parseInt(c, 10) ? parseInt(b, 10) : parseInt(c, 10) > 0 ? parseInt(c, 10) : parseInt(b, 10);
            if (d < insuranceMin) {
                d = insuranceMin
            }
            $("#insuranceBase").val(d)
        } else {
            d = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(c) ? parseFloat(c) : parseFloat(jQuery.trim($("#insuranceBase").val()))
        }
        var e = 0;
        if (fundBaseType == 0) {
            e = parseInt(b, 10) < parseInt(c, 10) ? parseInt(b, 10) : parseInt(c, 10) > 0 ? parseInt(c, 10) : parseInt(b, 10);
            if (e < minWage) {
                e = minWage
            }
            $("#fundBase").val(e)
        } else {
            e = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(c) ? parseFloat(c) : parseFloat(jQuery.trim($("#fundBase").val()))
        }
        var f = parseFloat(b);
        var g = jQuery.trim($("#pension").val()) != "" ? parseFloat(jQuery.trim($("#pension").val())) : 0;
        var h = jQuery.trim($("#medicare").val()) != "" ? parseFloat(jQuery.trim($("#medicare").val())) : 0;
        var i = jQuery.trim($("#unemploymentInsurance").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsurance").val())) : 0;
        var j = jQuery.trim($("#fund").val()) != "" ? parseFloat(jQuery.trim($("#fund").val())) : 0;
        var k = jQuery.trim($("#threshold").val()) != "" ? parseFloat(jQuery.trim($("#threshold").val())) : 0;
        $("#pensionSpan").html((d * g / 100).toFixed(2));
        $("#medicareSpan").html((d * h / 100 + medicarePlan).toFixed(2));
        $("#unemploymentInsuranceSpan").html((d * i / 100).toFixed(2));
        $("#fundSpan").html((e * j / 100).toFixed(2));
        $("#personalTotal").html((parseFloat(jQuery.trim($("#pensionSpan").html())) + parseFloat(jQuery.trim($("#medicareSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceSpan").html())) + parseFloat(jQuery.trim($("#fundSpan").html()))).toFixed(2));
        $("#pretaxTotal").html((f - parseFloat(jQuery.trim($("#personalTotal").html())) - k < 0 ? 0 : f - parseFloat(jQuery.trim($("#personalTotal").html())) - k).toFixed(2));
        var l = getShuiji((f - parseFloat(jQuery.trim($("#personalTotal").html()))).toFixed(2), k);
        $("#tax").val("");
        $("#aftertax").val("");
        var m = jQuery.trim($("#pensionFirm").val()) != "" ? parseFloat(jQuery.trim($("#pensionFirm").val())) : 0;
        var n = jQuery.trim($("#medicareFirm").val()) != "" ? parseFloat(jQuery.trim($("#medicareFirm").val())) : 0;
        var o = jQuery.trim($("#unemploymentInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsuranceFirm").val())) : 0;
        var p = jQuery.trim($("#fundFirm").val()) != "" ? parseFloat(jQuery.trim($("#fundFirm").val())) : 0;
        var q = jQuery.trim($("#industrialInjuryFirm").val()) != "" ? parseFloat(jQuery.trim($("#industrialInjuryFirm").val())) : 0;
        var r = jQuery.trim($("#maternityInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#maternityInsuranceFirm").val())) : 0;
        $("#pensionFirmSpan").html((d * m / 100).toFixed(2));
        $("#medicareFirmSpan").html((d * n / 100).toFixed(2));
        $("#unemploymentInsuranceFirmSpan").html((d * o / 100).toFixed(2));
        $("#fundFirmSpan").html((e * p / 100).toFixed(2));
        $("#industrialInjuryFirmSpan").html((d * q / 100).toFixed(2));
        $("#maternityInsuranceFirmSpan").html((d * r / 100).toFixed(2));
        $("#firmTotal").html((parseFloat(jQuery.trim($("#pensionFirmSpan").html())) + parseFloat(jQuery.trim($("#medicareFirmSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceFirmSpan").html())) + parseFloat(jQuery.trim($("#fundFirmSpan").html())) + parseFloat(jQuery.trim($("#industrialInjuryFirmSpan").html())) + parseFloat(jQuery.trim($("#maternityInsuranceFirmSpan").html()))).toFixed(2));
        $("#firmExpenseTotal").html(parseFloat(parseFloat(jQuery.trim($("#firmTotal").html())) + parseFloat(f)).toFixed(2))
    }
}
function aftertaxKeydown(a) {
    if (a.keyCode == 13) {
        saveDB = 1;
        calculateAftertax1()
    } else {
        payrollType = 0;
        chkfloatKeyup($("#aftertax")[0]);
        var b = jQuery.trim($("#aftertax").val()) == "" ? "0" : jQuery.trim($("#aftertax").val());
        var c = parseFloat(b);
        var d = jQuery.trim($("#insuranceMax").val()) != "" ? jQuery.trim($("#insuranceMax").val()) : "0";
        var e = d;
        var f = jQuery.trim($("#pension").val()) != "" ? parseFloat(jQuery.trim($("#pension").val())) : 0;
        var g = jQuery.trim($("#medicare").val()) != "" ? parseFloat(jQuery.trim($("#medicare").val())) : 0;
        var h = jQuery.trim($("#unemploymentInsurance").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsurance").val())) : 0;
        var i = jQuery.trim($("#fund").val()) != "" ? parseFloat(jQuery.trim($("#fund").val())) : 0;
        var j = jQuery.trim($("#threshold").val()) != "" ? parseFloat(jQuery.trim($("#threshold").val())) : 0;
        var k = getSalary(c, j, (f + g + h) / 100, i / 100, d, e);
        var l = 0;
        if (insuranceBaseType == 0) {
            l = parseInt(k, 10) < parseInt(d, 10) ? parseInt(k, 10) : parseInt(d, 10) > 0 ? parseInt(d, 10) : parseInt(k, 10);
            if (l < insuranceMin) {
                l = insuranceMin
            }
            $("#insuranceBase").val(l)
        } else {
            l = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(d) ? parseFloat(d) : parseFloat(jQuery.trim($("#insuranceBase").val()))
        }
        var m = 0;
        if (fundBaseType == 0) {
            m = parseInt(k, 10) < parseInt(d, 10) ? parseInt(k, 10) : parseInt(d, 10) > 0 ? parseInt(d, 10) : parseInt(k, 10);
            if (m < minWage) {
                m = minWage
            }
            $("#fundBase").val(m)
        } else {
            m = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(d) ? parseFloat(d) : parseFloat(jQuery.trim($("#fundBase").val()))
        }
        $("#pensionSpan").html((l * f / 100).toFixed(2));
        $("#medicareSpan").html((l * g / 100 + medicarePlan).toFixed(2));
        $("#unemploymentInsuranceSpan").html((l * h / 100).toFixed(2));
        $("#fundSpan").html((m * i / 100).toFixed(2));
        $("#personalTotal").html((parseFloat(jQuery.trim($("#pensionSpan").html())) + parseFloat(jQuery.trim($("#medicareSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceSpan").html())) + parseFloat(jQuery.trim($("#fundSpan").html()))).toFixed(2));
        $("#pretaxTotal").html((k - parseFloat(jQuery.trim($("#personalTotal").html())) - j < 0 ? 0 : k - parseFloat(jQuery.trim($("#personalTotal").html())) - j).toFixed(2));
        var n = getShuiji((k - parseFloat(jQuery.trim($("#personalTotal").html()))).toFixed(2), j);
        $("#tax").val("");
        $("#salary").val("");
        var o = jQuery.trim($("#pensionFirm").val()) != "" ? parseFloat(jQuery.trim($("#pensionFirm").val())) : 0;
        var p = jQuery.trim($("#medicareFirm").val()) != "" ? parseFloat(jQuery.trim($("#medicareFirm").val())) : 0;
        var q = jQuery.trim($("#unemploymentInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsuranceFirm").val())) : 0;
        var r = jQuery.trim($("#fundFirm").val()) != "" ? parseFloat(jQuery.trim($("#fundFirm").val())) : 0;
        var s = jQuery.trim($("#industrialInjuryFirm").val()) != "" ? parseFloat(jQuery.trim($("#industrialInjuryFirm").val())) : 0;
        var t = jQuery.trim($("#maternityInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#maternityInsuranceFirm").val())) : 0;
        $("#pensionFirmSpan").html((l * o / 100).toFixed(2));
        $("#medicareFirmSpan").html((l * p / 100).toFixed(2));
        $("#unemploymentInsuranceFirmSpan").html((l * q / 100).toFixed(2));
        $("#fundFirmSpan").html((m * r / 100).toFixed(2));
        $("#industrialInjuryFirmSpan").html((l * s / 100).toFixed(2));
        $("#maternityInsuranceFirmSpan").html((l * t / 100).toFixed(2));
        $("#firmTotal").html((parseFloat(jQuery.trim($("#pensionFirmSpan").html())) + parseFloat(jQuery.trim($("#medicareFirmSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceFirmSpan").html())) + parseFloat(jQuery.trim($("#fundFirmSpan").html())) + parseFloat(jQuery.trim($("#industrialInjuryFirmSpan").html())) + parseFloat(jQuery.trim($("#maternityInsuranceFirmSpan").html()))).toFixed(2));
        $("#firmExpenseTotal").html(parseFloat(parseFloat(jQuery.trim($("#firmTotal").html())) + parseFloat(k)).toFixed(2))
    }
}
function insuranceBaseKeyup(a) {
    insuranceBaseType = 1;
    salaryDetailKeyup(a)
}
function fundBaseKeyup(a) {
    fundBaseType = 1;
    salaryDetailKeyup(a)
}
function salaryDetailKeyup(a) {
    chkfloatKeyup(a);
    if (payrollType != -1) {
        chkfloat($("#salary")[0]);
        var b = jQuery.trim($("#salary").val()) != "" ? jQuery.trim($("#salary").val()) : "0";
        var c = jQuery.trim($("#insuranceMax").val()) != "" ? jQuery.trim($("#insuranceMax").val()) : "0";
        var d = 0;
        if (insuranceBaseType == 0) {
            d = parseInt(b, 10) < parseInt(c, 10) ? parseInt(b, 10) : parseInt(c, 10) > 0 ? parseInt(c, 10) : parseInt(b, 10);
            if (d < insuranceMin) {
                d = insuranceMin
            }
            $("#insuranceBase").val(d)
        } else {
            d = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(c) ? parseFloat(c) : parseFloat(jQuery.trim($("#insuranceBase").val()))
        }
        var e = 0;
        if (fundBaseType == 0) {
            e = parseInt(b, 10) < parseInt(c, 10) ? parseInt(b, 10) : parseInt(c, 10) > 0 ? parseInt(c, 10) : parseInt(b, 10);
            if (e < minWage) {
                e = minWage
            }
            $("#fundBase").val(e)
        } else {
            e = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(c) ? parseFloat(c) : parseFloat(jQuery.trim($("#fundBase").val()))
        }
        var f = parseFloat(b);
        var g = jQuery.trim($("#pension").val()) != "" ? parseFloat(jQuery.trim($("#pension").val())) : 0;
        var h = jQuery.trim($("#medicare").val()) != "" ? parseFloat(jQuery.trim($("#medicare").val())) : 0;
        var i = jQuery.trim($("#unemploymentInsurance").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsurance").val())) : 0;
        var j = jQuery.trim($("#fund").val()) != "" ? parseFloat(jQuery.trim($("#fund").val())) : 0;
        var k = jQuery.trim($("#threshold").val()) != "" ? parseFloat(jQuery.trim($("#threshold").val())) : 0;
        $("#pensionSpan").html((d * g / 100).toFixed(2));
        $("#medicareSpan").html((d * h / 100 + medicarePlan).toFixed(2));
        $("#unemploymentInsuranceSpan").html((d * i / 100).toFixed(2));
        $("#fundSpan").html((e * j / 100).toFixed(2));
        $("#personalTotal").html((parseFloat(jQuery.trim($("#pensionSpan").html())) + parseFloat(jQuery.trim($("#medicareSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceSpan").html())) + parseFloat(jQuery.trim($("#fundSpan").html()))).toFixed(2));
        if (f < parseFloat(jQuery.trim($("#personalTotal").html()))) {
            var l = new StringBuilder;
            l.append('<div class="meng_k">');
            l.append('<div class="meng_h">');
            l.append('<span class="f-l orange">系统提示</span>');
            l.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#salary\')[0].focus();">关闭</a></span>');
            l.append("</div>");
            l.append('<div class="meng_bc">工资真的这么少吗？</div>');
            l.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#salary\')[0].focus();" value="确定" class="bnt w60"></div>');
            l.append("</div>");
            $("#MBContent").html(l.toString());
            showMengban();
            $("#btnOK").focus();
            saveDB = 0;
            $("#aftertax").val("");
            $("#tax").val("");
            return
        } else {
            $("#pretaxTotal").html((f - parseFloat(jQuery.trim($("#personalTotal").html())) - k < 0 ? 0 : f - parseFloat(jQuery.trim($("#personalTotal").html())) - k).toFixed(2));
            var m = getShuiji((f - parseFloat(jQuery.trim($("#personalTotal").html()))).toFixed(2), k);
            if (payrollType == 1) {
                $("#tax").val(m);
                $("#aftertax").val((f - parseFloat(jQuery.trim($("#personalTotal").html())) - m).toFixed(0))
            } else {
                $("#tax").val("");
                $("#aftertax").val("")
            }
            var n = jQuery.trim($("#pensionFirm").val()) != "" ? parseFloat(jQuery.trim($("#pensionFirm").val())) : 0;
            var o = jQuery.trim($("#medicareFirm").val()) != "" ? parseFloat(jQuery.trim($("#medicareFirm").val())) : 0;
            var p = jQuery.trim($("#unemploymentInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsuranceFirm").val())) : 0;
            var q = jQuery.trim($("#fundFirm").val()) != "" ? parseFloat(jQuery.trim($("#fundFirm").val())) : 0;
            var r = jQuery.trim($("#industrialInjuryFirm").val()) != "" ? parseFloat(jQuery.trim($("#industrialInjuryFirm").val())) : 0;
            var s = jQuery.trim($("#maternityInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#maternityInsuranceFirm").val())) : 0;
            $("#pensionFirmSpan").html((d * n / 100).toFixed(2));
            $("#medicareFirmSpan").html((d * o / 100).toFixed(2));
            $("#unemploymentInsuranceFirmSpan").html((d * p / 100).toFixed(2));
            $("#fundFirmSpan").html((e * q / 100).toFixed(2));
            $("#industrialInjuryFirmSpan").html((d * r / 100).toFixed(2));
            $("#maternityInsuranceFirmSpan").html((d * s / 100).toFixed(2));
            $("#firmTotal").html((parseFloat(jQuery.trim($("#pensionFirmSpan").html())) + parseFloat(jQuery.trim($("#medicareFirmSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceFirmSpan").html())) + parseFloat(jQuery.trim($("#fundFirmSpan").html())) + parseFloat(jQuery.trim($("#industrialInjuryFirmSpan").html())) + parseFloat(jQuery.trim($("#maternityInsuranceFirmSpan").html()))).toFixed(2));
            $("#firmExpenseTotal").html(parseFloat(parseFloat(jQuery.trim($("#firmTotal").html())) + parseFloat(f)).toFixed(2))
        }
    } else if (payrollType == -1) {
        chkfloat($("#aftertax")[0]);
        var t = jQuery.trim($("#aftertax").val()) == "" ? "0" : jQuery.trim($("#aftertax").val());
        var u = parseFloat(t);
        var c = jQuery.trim($("#insuranceMax").val()) != "" ? jQuery.trim($("#insuranceMax").val()) : "0";
        var v = c;
        var g = jQuery.trim($("#pension").val()) != "" ? parseFloat(jQuery.trim($("#pension").val())) : 0;
        var h = jQuery.trim($("#medicare").val()) != "" ? parseFloat(jQuery.trim($("#medicare").val())) : 0;
        var i = jQuery.trim($("#unemploymentInsurance").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsurance").val())) : 0;
        var j = jQuery.trim($("#fund").val()) != "" ? parseFloat(jQuery.trim($("#fund").val())) : 0;
        var k = jQuery.trim($("#threshold").val()) != "" ? parseFloat(jQuery.trim($("#threshold").val())) : 0;
        var f = getSalary(u, k, (g + h + i) / 100, j / 100, parseInt(c, 10), v);
        $("#salary").val(parseFloat(f).toFixed(0));
        if (parseFloat(f) < minWage) {
            var l = new StringBuilder;
            l.append('<div class="meng_k">');
            l.append('<div class="meng_h">');
            l.append('<span class="f-l orange">系统提示</span>');
            l.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();">关闭</a></span>');
            l.append("</div>");
            l.append('<div class="meng_bc">还不到当地最低工资哦！</div>');
            l.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();" value="确定" class="bnt w60"></div>');
            l.append("</div>");
            $("#MBContent").html(l.toString());
            showMengban();
            $("#btnOK").focus()
        }
        var d = 0;
        if (insuranceBaseType == 0) {
            d = parseInt(f, 10) < parseInt(c, 10) ? parseInt(f, 10) : parseInt(c, 10) > 0 ? parseInt(c, 10) : parseInt(f, 10);
            if (d < insuranceMin) {
                d < insuranceMin
            }
            $("#insuranceBase").val(d)
        } else {
            d = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(c) ? parseFloat(c) : parseFloat(jQuery.trim($("#insuranceBase").val()))
        }
        var e = 0;
        if (fundBaseType == 0) {
            e = parseInt(f, 10) < parseInt(c, 10) ? parseInt(f, 10) : parseInt(c, 10) > 0 ? parseInt(c, 10) : parseInt(f, 10);
            if (e < minWage) {
                e = minWage
            }
            $("#fundBase").val(e)
        } else {
            e = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(c) ? parseFloat(c) : parseFloat(jQuery.trim($("#fundBase").val()))
        }
        $("#pensionSpan").html((d * g / 100).toFixed(2));
        $("#medicareSpan").html((d * h / 100 + medicarePlan).toFixed(2));
        $("#unemploymentInsuranceSpan").html((d * i / 100).toFixed(2));
        $("#fundSpan").html((e * j / 100).toFixed(2));
        $("#personalTotal").html((parseFloat(jQuery.trim($("#pensionSpan").html())) + parseFloat(jQuery.trim($("#medicareSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceSpan").html())) + parseFloat(jQuery.trim($("#fundSpan").html()))).toFixed(2));
        $("#pretaxTotal").html((f - parseFloat(jQuery.trim($("#personalTotal").html())) - k < 0 ? 0 : f - parseFloat(jQuery.trim($("#personalTotal").html())) - k).toFixed(2));
        var m = getShuiji((f - parseFloat(jQuery.trim($("#personalTotal").html()))).toFixed(2), k);
        $("#tax").val(m);
        $("#salary").val(parseFloat(f).toFixed(0));
        var n = jQuery.trim($("#pensionFirm").val()) != "" ? parseFloat(jQuery.trim($("#pensionFirm").val())) : 0;
        var o = jQuery.trim($("#medicareFirm").val()) != "" ? parseFloat(jQuery.trim($("#medicareFirm").val())) : 0;
        var p = jQuery.trim($("#unemploymentInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsuranceFirm").val())) : 0;
        var q = jQuery.trim($("#fundFirm").val()) != "" ? parseFloat(jQuery.trim($("#fundFirm").val())) : 0;
        var r = jQuery.trim($("#industrialInjuryFirm").val()) != "" ? parseFloat(jQuery.trim($("#industrialInjuryFirm").val())) : 0;
        var s = jQuery.trim($("#maternityInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#maternityInsuranceFirm").val())) : 0;
        $("#pensionFirmSpan").html((d * n / 100).toFixed(2));
        $("#medicareFirmSpan").html((d * o / 100).toFixed(2));
        $("#unemploymentInsuranceFirmSpan").html((d * p / 100).toFixed(2));
        $("#fundFirmSpan").html((e * q / 100).toFixed(2));
        $("#industrialInjuryFirmSpan").html((d * r / 100).toFixed(2));
        $("#maternityInsuranceFirmSpan").html((d * s / 100).toFixed(2));
        $("#firmTotal").html((parseFloat(jQuery.trim($("#pensionFirmSpan").html())) + parseFloat(jQuery.trim($("#medicareFirmSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceFirmSpan").html())) + parseFloat(jQuery.trim($("#fundFirmSpan").html())) + parseFloat(jQuery.trim($("#industrialInjuryFirmSpan").html())) + parseFloat(jQuery.trim($("#maternityInsuranceFirmSpan").html()))).toFixed(2));
        $("#firmExpenseTotal").html(parseFloat(parseFloat(jQuery.trim($("#firmTotal").html())) + parseFloat(f)).toFixed(2))
    }
}
function fundDetailKeyup(a) {
    $("#fundFirm").val(jQuery.trim($("#fund").val()));
    salaryDetailKeyup(a)
}
function fundFirmDetailKeyup(a) {
    $("#fund").val(jQuery.trim($("#fundFirm").val()));
    salaryDetailKeyup(a)
}
function calculateTaxes() {
    if (jQuery.trim($("#city").val()) == "" || jQuery.trim($("#city").val()) == "请选择城市") {
        showCityDIVBox();
        return
    }
    var a = jQuery.trim($("#salary").val());
    if (a == "") {
        var b = new StringBuilder;
        b.append('<div class="meng_k">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#salary\')[0].focus();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc">请输入税前月收入！</div>');
        b.append('<div class="button-margin2"><input type="button" id="btnOK" onclick="HiddenMengBan();$(\'#salary\')[0].focus();" value="确定" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK").focus()
    } else if (parseFloat(a) < minWage && minWage > 0) {
        var b = new StringBuilder;
        b.append('<div class="meng_k">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#salary\')[0].focus();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc">还不到当地最低工资哦！</div>');
        b.append('<div class="button-margin2"><input type="button" id="btnOK" onclick="HiddenMengBan();$(\'#salary\')[0].focus();" value="确定" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK").focus()
    } else {
        isCalculate = 0;
        var c = 0;
        var d = jQuery.trim($("#insuranceMax").val()) != "" ? jQuery.trim($("#insuranceMax").val()) : "0";
        if (insuranceBaseType == 0) {
            c = parseInt(a, 10) < parseInt(d, 10) ? parseInt(a, 10) : parseInt(d, 10) > 0 ? parseInt(d, 10) : parseInt(a, 10);
            if (c < insuranceMin) {
                c = insuranceMin
            }
            $("#insuranceBase").val(c)
        } else {
            c = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(d) ? parseFloat(d) : parseFloat(jQuery.trim($("#insuranceBase").val()))
        }
        var e = 0;
        if (fundBaseType == 0) {
            e = parseInt(a, 10) < parseInt(d, 10) ? parseInt(a, 10) : parseInt(d, 10) > 0 ? parseInt(d, 10) : parseInt(a, 10);
            if (e < minWage) {
                e = minWage
            }
            $("#fundBase").val(e)
        } else {
            e = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(d) ? parseFloat(d) : parseFloat(jQuery.trim($("#fundBase").val()))
        }
        var f = parseFloat(a);
        var g = jQuery.trim($("#pension").val()) != "" ? parseFloat(jQuery.trim($("#pension").val())) : 0;
        var h = jQuery.trim($("#medicare").val()) != "" ? parseFloat(jQuery.trim($("#medicare").val())) : 0;
        var i = jQuery.trim($("#unemploymentInsurance").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsurance").val())) : 0;
        var j = jQuery.trim($("#fund").val()) != "" ? parseFloat(jQuery.trim($("#fund").val())) : 0;
        var k = jQuery.trim($("#threshold").val()) != "" ? parseFloat(jQuery.trim($("#threshold").val())) : 0;
        $("#pensionSpan").html((c * g / 100).toFixed(2));
        $("#medicareSpan").html((c * h / 100 + medicarePlan).toFixed(2));
        $("#unemploymentInsuranceSpan").html((c * i / 100).toFixed(2));
        $("#fundSpan").html((e * j / 100).toFixed(2));
        $("#personalTotal").html((parseFloat(jQuery.trim($("#pensionSpan").html())) + parseFloat(jQuery.trim($("#medicareSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceSpan").html())) + parseFloat(jQuery.trim($("#fundSpan").html()))).toFixed(2));
        if (f <= parseFloat($("#personalTotal").html())) {
            var b = new StringBuilder;
            b.append('<div class="meng_k">');
            b.append('<div class="meng_h">');
            b.append('<span class="f-l orange">系统提示</span>');
            b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#salary\')[0].focus();">关闭</a></span>');
            b.append("</div>");
            b.append('<div class="meng_bc">工资真的这么少吗？</div>');
            b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#salary\')[0].focus();" value="确定" class="bnt w60"></div>');
            b.append("</div>");
            $("#MBContent").html(b.toString());
            showMengban();
            $("#btnOK").focus();
            saveDB = 0;
            $("#aftertax").val("");
            $("#tax").val("");
            return
        }
        $("#pretaxTotal").html((f - parseFloat(jQuery.trim($("#personalTotal").html())) - k < 0 ? 0 : f - parseFloat(jQuery.trim($("#personalTotal").html())) - k).toFixed(2));
        var l = getShuiji((f - parseFloat(jQuery.trim($("#personalTotal").html()))).toFixed(2), k);
        $("#tax").val(l);
        $("#aftertax").val((f - parseFloat(jQuery.trim($("#personalTotal").html())) - l).toFixed(0));
        var m = jQuery.trim($("#pensionFirm").val()) != "" ? parseFloat(jQuery.trim($("#pensionFirm").val())) : 0;
        var n = jQuery.trim($("#medicareFirm").val()) != "" ? parseFloat(jQuery.trim($("#medicareFirm").val())) : 0;
        var o = jQuery.trim($("#unemploymentInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsuranceFirm").val())) : 0;
        var p = jQuery.trim($("#fundFirm").val()) != "" ? parseFloat(jQuery.trim($("#fundFirm").val())) : 0;
        var q = jQuery.trim($("#industrialInjuryFirm").val()) != "" ? parseFloat(jQuery.trim($("#industrialInjuryFirm").val())) : 0;
        var r = jQuery.trim($("#maternityInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#maternityInsuranceFirm").val())) : 0;
        $("#pensionFirmSpan").html((c * m / 100).toFixed(2));
        $("#medicareFirmSpan").html((c * n / 100).toFixed(2));
        $("#unemploymentInsuranceFirmSpan").html((c * o / 100).toFixed(2));
        $("#fundFirmSpan").html((e * p / 100).toFixed(2));
        $("#industrialInjuryFirmSpan").html((c * q / 100).toFixed(2));
        $("#maternityInsuranceFirmSpan").html((c * r / 100).toFixed(2));
        $("#firmTotal").html((parseFloat(jQuery.trim($("#pensionFirmSpan").html())) + parseFloat(jQuery.trim($("#medicareFirmSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceFirmSpan").html())) + parseFloat(jQuery.trim($("#fundFirmSpan").html())) + parseFloat(jQuery.trim($("#industrialInjuryFirmSpan").html())) + parseFloat(jQuery.trim($("#maternityInsuranceFirmSpan").html()))).toFixed(2));
        $("#firmExpenseTotal").html(parseFloat(parseFloat(jQuery.trim($("#firmTotal").html())) + parseFloat(f)).toFixed(2));
        if (saveDB == 1) {
            saveDB = 0;
            App.DBAppend(jQuery.trim($("#salary").val()), 0, jQuery.trim($("#cityId").val()))
        }
    }
}
function calculateAftertax1() {
    saveDB = 1;
    payrollType = -1;
    if (jQuery.trim($("#city").val()) == "" || jQuery.trim($("#city").val()) == "请选择城市") {
        initialValue(arrayNull);
        showCityDIVBox()
    } else {
        if (jQuery.trim($("#aftertax").val()) != "") {
            calculateAftertax()
        } else {
            var a = new StringBuilder;
            a.append('<div class="meng_k">');
            a.append('<div class="meng_h">');
            a.append('<span class="f-l orange">系统提示</span>');
            a.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#aftertax\')[0].focus();">关闭</a></span>');
            a.append("</div>");
            a.append('<div class="meng_bc">请输入税后月收入！</div>');
            a.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#aftertax\')[0].focus();" value="确定" class="bnt w60"></div>');
            a.append("</div>");
            $("#MBContent").html(a.toString());
            showMengban();
            $("#btnOK").focus()
        }
    }
}
function calculateAftertax() {
    if (jQuery.trim($("#city").val()) == "" || jQuery.trim($("#city").val()) == "请选择城市") {
        showCityDIVBox();
        return
    }
    var a = jQuery.trim($("#aftertax").val());
    if (a == "") {
        var b = new StringBuilder;
        b.append('<div class="meng_k">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#aftertax\')[0].focus();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc">请输入税后月收入！</div>');
        b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#aftertax\')[0].focus();" value="确定" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK").focus()
    } else {
        var c = parseFloat(a);
        var d = jQuery.trim($("#insuranceMax").val()) != "" ? jQuery.trim($("#insuranceMax").val()) : "0";
        var e = d;
        var f = jQuery.trim($("#pension").val()) != "" ? parseFloat(jQuery.trim($("#pension").val())) : 0;
        var g = jQuery.trim($("#medicare").val()) != "" ? parseFloat(jQuery.trim($("#medicare").val())) : 0;
        var h = jQuery.trim($("#unemploymentInsurance").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsurance").val())) : 0;
        var i = jQuery.trim($("#fund").val()) != "" ? parseFloat(jQuery.trim($("#fund").val())) : 0;
        var j = jQuery.trim($("#threshold").val()) != "" ? parseFloat(jQuery.trim($("#threshold").val())) : 0;
        var k = getSalary(c, j, (f + g + h) / 100, i / 100, parseInt(d, 10), e);
        if (parseFloat(k) < minWage) {
            var b = new StringBuilder;
            b.append('<div class="meng_k">');
            b.append('<div class="meng_h">');
            b.append('<span class="f-l orange">系统提示</span>');
            b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();">关闭</a></span>');
            b.append("</div>");
            b.append('<div class="meng_bc">还不到当地最低工资哦！</div>');
            b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();" value="确定" class="bnt w60"></div>');
            b.append("</div>");
            $("#MBContent").html(b.toString());
            showMengban();
            $("#btnOK").focus()
        }
        var l = 0;
        if (insuranceBaseType == 0) {
            l = parseFloat(k).toFixed(0) < parseInt(d, 10) ? parseFloat(k).toFixed(0) : parseInt(d, 10) > 0 ? parseInt(d, 10) : parseFloat(k).toFixed(0);
            if (l < insuranceMin) {
                l = insuranceMin
            }
            $("#insuranceBase").val(l)
        } else {
            l = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(d) ? parseFloat(d) : parseFloat(jQuery.trim($("#insuranceBase").val()))
        }
        var m = 0;
        if (fundBaseType == 0) {
            m = parseFloat(k).toFixed(0) < parseInt(d, 10) ? parseFloat(k).toFixed(0) : parseInt(d, 10) > 0 ? parseInt(d, 10) : parseFloat(k).toFixed(0);
            if (m < minWage) {
                m = minWage
            }
            $("#fundBase").val(m)
        } else {
            m = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(d) ? parseFloat(d) : parseFloat(jQuery.trim($("#fundBase").val()))
        }
        $("#pensionSpan").html((l * f / 100).toFixed(2));
        $("#medicareSpan").html((l * g / 100 + medicarePlan).toFixed(2));
        $("#unemploymentInsuranceSpan").html((l * h / 100).toFixed(2));
        $("#fundSpan").html((m * i / 100).toFixed(2));
        $("#personalTotal").html((parseFloat(jQuery.trim($("#pensionSpan").html())) + parseFloat(jQuery.trim($("#medicareSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceSpan").html())) + parseFloat(jQuery.trim($("#fundSpan").html()))).toFixed(2));
        $("#pretaxTotal").html((k - parseFloat(jQuery.trim($("#personalTotal").html())) - j < 0 ? 0 : k - parseFloat(jQuery.trim($("#personalTotal").html())) - j).toFixed(2));
        var n = getShuiji((k - parseFloat(jQuery.trim($("#personalTotal").html()))).toFixed(2), j);
        $("#tax").val(n);
        $("#salary").val(parseFloat(k).toFixed(0));
        var o = jQuery.trim($("#pensionFirm").val()) != "" ? parseFloat(jQuery.trim($("#pensionFirm").val())) : 0;
        var p = jQuery.trim($("#medicareFirm").val()) != "" ? parseFloat(jQuery.trim($("#medicareFirm").val())) : 0;
        var q = jQuery.trim($("#unemploymentInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#unemploymentInsuranceFirm").val())) : 0;
        var r = jQuery.trim($("#fundFirm").val()) != "" ? parseFloat(jQuery.trim($("#fundFirm").val())) : 0;
        var s = jQuery.trim($("#industrialInjuryFirm").val()) != "" ? parseFloat(jQuery.trim($("#industrialInjuryFirm").val())) : 0;
        var t = jQuery.trim($("#maternityInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#maternityInsuranceFirm").val())) : 0;
        $("#pensionFirmSpan").html((l * o / 100).toFixed(2));
        $("#medicareFirmSpan").html((l * p / 100).toFixed(2));
        $("#unemploymentInsuranceFirmSpan").html((l * q / 100).toFixed(2));
        $("#fundFirmSpan").html((m * r / 100).toFixed(2));
        $("#industrialInjuryFirmSpan").html((l * s / 100).toFixed(2));
        $("#maternityInsuranceFirmSpan").html((l * t / 100).toFixed(2));
        $("#firmTotal").html((parseFloat(jQuery.trim($("#pensionFirmSpan").html())) + parseFloat(jQuery.trim($("#medicareFirmSpan").html())) + parseFloat(jQuery.trim($("#unemploymentInsuranceFirmSpan").html())) + parseFloat(jQuery.trim($("#fundFirmSpan").html())) + parseFloat(jQuery.trim($("#industrialInjuryFirmSpan").html())) + parseFloat(jQuery.trim($("#maternityInsuranceFirmSpan").html()))).toFixed(2));
        $("#firmExpenseTotal").html(parseFloat(parseFloat(jQuery.trim($("#firmTotal").html())) + parseFloat(k)).toFixed(2));
        if (saveDB == 1) {
            saveDB = 0;
            App.DBAppend(jQuery.trim($("#aftertax").val()), 1, jQuery.trim($("#cityId").val()))
        }
    }
}
function enterpriseCalculateShow() {
    $("#payrollDIV").hide();
    $("#annualDIV").hide();
    $("#compensationDIV").hide();
    $("#decollator").hide();
    $("#otherRapidDIV").hide();
    $("#otherRapidDIV2").hide();
    $("#enterpriseDIV").show();
    $("#privatelyDIV").hide();
    $("#simplifiedDIV").hide();
    for (var a = 1; a < 11; a++) {
        $("#DIV" + a.toString()).hide()
    }
    $("#DIV14").hide();
    $("#DIV9").show();
    $("#enterpriseRevenue").val("");
    $("#enterpriseTime ").get(0).selectedIndex = 11;
    $("#enterpriseProfits").val("");
    $("#enterpriseTax").val("");
    $("#otherDIV").show()
}
function enterpriseCalculate() {
    if (jQuery.trim($("#enterpriseRevenue").val()) != "") {
        var a = parseFloat(jQuery.trim($("#enterpriseRevenue").val()));
        var b = a;
        if (b < 0) {
            var c = new StringBuilder;
            c.append('<div class="meng_k">');
            c.append('<div class="meng_h">');
            c.append('<span class="f-l orange">系统提示</span>');
            c.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();">关闭</a></span>');
            c.append("</div>");
            c.append('<div class="meng_bc">请输入正确数据！</div>');
            c.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();" value="确定" class="bnt w60"></div>');
            c.append("</div>");
            $("#MBContent").html(c.toString());
            showMengban();
            $("#btnOK").focus();
            return
        }
        App.DBAppendOther(jQuery.trim($("#enterpriseRevenue").val()), 0, 9);
        b = b - _threshold * parseInt(jQuery.trim($("#enterpriseTime").val()), 10);
        if (b < 0) {
            $("#enterpriseTax").val(0);
            $("#enterpriseProfits").val(parseInt(a, 10) - parseInt(jQuery.trim($("#enterpriseTax").val()), 10))
        } else if (b <= 15e3) {
            $("#enterpriseTax").val((b * .05).toFixed(0));
            $("#enterpriseProfits").val(parseInt(a, 10) - parseInt(jQuery.trim($("#enterpriseTax").val()), 10))
        } else if (b > 15e3 && b <= 3e4) {
            $("#enterpriseTax").val((b * .1).toFixed(0) - 750);
            $("#enterpriseProfits").val(parseInt(a, 10) - parseInt(jQuery.trim($("#enterpriseTax").val()), 10))
        } else if (b > 3e4 && b <= 6e4) {
            $("#enterpriseTax").val((b * .2).toFixed(0) - 3750);
            $("#enterpriseProfits").val(parseInt(a, 10) - parseInt(jQuery.trim($("#enterpriseTax").val()), 10))
        } else if (b > 6e4 && b <= 1e5) {
            $("#enterpriseTax").val((b * .3).toFixed(0) - 9750);
            $("#enterpriseProfits").val(parseInt(a, 10) - parseInt(jQuery.trim($("#enterpriseTax").val()), 10))
        } else {
            $("#enterpriseTax").val((b * .35).toFixed(0) - 14750);
            $("#enterpriseProfits").val(parseInt(a, 10) - parseInt(jQuery.trim($("#enterpriseTax").val()), 10))
        }
    } else {
        var c = new StringBuilder;
        c.append('<div class="meng_k">');
        c.append('<div class="meng_h">');
        c.append('<span class="f-l orange">系统提示</span>');
        c.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#enterpriseRevenue\')[0].focus();">关闭</a></span>');
        c.append("</div>");
        c.append('<div class="meng_bc">请输入税前收入！</div>');
        c.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#enterpriseRevenue\')[0].focus();" value="确定" class="bnt w60"></div>');
        c.append("</div>");
        $("#MBContent").html(c.toString());
        showMengban();
        $("#btnOK").focus()
    }
}
function privatelyCalculateShow() {
    $("#payrollDIV").hide();
    $("#annualDIV").hide();
    $("#compensationDIV").hide();
    $("#decollator").hide();
    $("#otherRapidDIV").hide();
    $("#otherRapidDIV2").hide();
    $("#enterpriseDIV").hide();
    $("#privatelyDIV").show();
    $("#simplifiedDIV").hide();
    for (var a = 1; a < 11; a++) {
        $("#DIV" + a.toString()).hide()
    }
    $("#DIV14").hide();
    $("#DIV8").show();
    $("#privatelyRevenue").val("");
    $("#privatelyExpense").val("");
    $("#privatelyProfits").val("");
    $("#privatelyTax").val("");
    $("#otherDIV").show()
}
function privatelyCalculate() {
    if (jQuery.trim($("#privatelyRevenue").val()) != "") {
        var a = parseFloat(jQuery.trim($("#privatelyRevenue").val()));
        var b = jQuery.trim($("#privatelyExpense").val()) == "" ? 0 : parseFloat(jQuery.trim($("#privatelyExpense").val()));
        var c = a - b;
        if (c < 0) {
            var d = new StringBuilder;
            d.append('<div class="meng_k">');
            d.append('<div class="meng_h">');
            d.append('<span class="f-l orange">系统提示</span>');
            d.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();">关闭</a></span>');
            d.append("</div>");
            d.append('<div class="meng_bc">请输入正确数据！</div>');
            d.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();" value="确定" class="bnt w60"></div>');
            d.append("</div>");
            $("#MBContent").html(d.toString());
            showMengban();
            $("#btnOK").focus();
            return
        } else if (c <= 15e3) {
            $("#privatelyTax").val(parseInt(c * .05, 10));
            $("#privatelyProfits").val(parseInt(c, 10) - parseInt(jQuery.trim($("#privatelyTax").val()), 10))
        } else if (c > 15e3 && c <= 3e4) {
            $("#privatelyTax").val(parseInt(c * .1, 10) - 750);
            $("#privatelyProfits").val(parseInt(c, 10) - parseInt(jQuery.trim($("#privatelyTax").val()), 10))
        } else if (c > 3e4 && c <= 6e4) {
            $("#privatelyTax").val(parseInt(c * .2, 10) - 3750);
            $("#privatelyProfits").val(parseInt(c, 10) - parseInt(jQuery.trim($("#privatelyTax").val()), 10))
        } else if (c > 6e4 && c <= 1e5) {
            $("#privatelyTax").val(parseInt(c * .3, 10) - 9750);
            $("#privatelyProfits").val(parseInt(c, 10) - parseInt(jQuery.trim($("#privatelyTax").val()), 10))
        } else {
            $("#privatelyTax").val(parseInt(c * .35, 10) - 14750);
            $("#privatelyProfits").val(parseInt(c, 10) - parseInt(jQuery.trim($("#privatelyTax").val()), 10))
        }
        App.DBAppendOther(jQuery.trim($("#privatelyRevenue").val()), 0, 8)
    } else {
        var d = new StringBuilder;
        d.append('<div class="meng_k">');
        d.append('<div class="meng_h">');
        d.append('<span class="f-l orange">系统提示</span>');
        d.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#privatelyRevenue\')[0].focus();">关闭</a></span>');
        d.append("</div>");
        d.append('<div class="meng_bc">请输入年度收入！</div>');
        d.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#privatelyRevenue\')[0].focus();" value="确定" class="bnt w60"></div>');
        d.append("</div>");
        $("#MBContent").html(d.toString());
        showMengban();
        $("#btnOK").focus()
    }
}
function otherCalculateShow() {
    $("#payrollDIV").hide();
    $("#annualDIV").hide();
    $("#compensationDIV").hide();
    $("#decollator").hide();
    $("#otherRapidDIV").show();
    $("#otherRapidDIV2").hide();
    $("#enterpriseDIV").hide();
    $("#privatelyDIV").hide();
    $("#simplifiedDIV").hide();
    for (var a = 1; a < 11; a++) {
        $("#DIV" + a.toString()).hide()
    }
    $("#DIV14").hide();
    $("#DIV" + $("#taxType").val()).show();
    $("#otherBeforeTax").val("");
    $("#otherAfterTax").val("");
    $("#otherTax").val("");
    $("#otherDIV").show()
}
function otherCalculate() {
    switch ($("#taxType").val()) {
        case"1":
            calculateAnnualBonus();
            break;
        case"2":
            otherCalculateDetail();
            break
    }
}
function otherCalculateAfter() {
    switch ($("#taxType").val()) {
        case"1":
            calculateAnnualBonusBefor();
            break;
        case"2":
            calculateBeforTaxes();
            break
    }
}
function calculateAnnualBonus() {
    if (jQuery.trim($("#otherBeforeTax").val()) != "") {
        App.DBAppendOther(jQuery.trim($("#otherBeforeTax").val()), 0, 1);
        $("#otherTax").val(getShuijiNian(parseFloat(jQuery.trim($("#otherBeforeTax").val()))));
        $("#otherAfterTax").val(parseFloat(jQuery.trim($("#otherBeforeTax").val())) - parseFloat(jQuery.trim($("#otherTax").val())))
    } else {
        $("#otherTax").val("");
        $("#otherAfterTax").val("");
        var a = new StringBuilder;
        a.append('<div class="meng_k">');
        a.append('<div class="meng_h">');
        a.append('<span class="f-l orange">系统提示</span>');
        a.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#otherBeforeTax\')[0].focus();">关闭</a></span>');
        a.append("</div>");
        a.append('<div class="meng_bc">请输入税前收入！</div>');
        a.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#otherBeforeTax\')[0].focus();" value="确定" class="bnt w60"></div>');
        a.append("</div>");
        $("#MBContent").html(a.toString());
        showMengban();
        $("#btnOK").focus()
    }
}
function calculateAnnualBonusBefor() {
    if (jQuery.trim($("#otherAfterTax").val()) != "") {
        App.DBAppendOther(jQuery.trim($("#otherAfterTax").val()), 1, 1);
        var a = parseFloat(jQuery.trim($("#otherAfterTax").val()));
        if (a <= 5700) {
            var b = a / (1 - .05);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else if (a > 5700 && a <= 21625) {
            var b = (a - 25) / (1 - .1);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else if (a > 21625 && a <= 51125) {
            var b = (a - 125) / (1 - .15);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else if (a > 51125 && a <= 192375) {
            var b = (a - 375) / (1 - .2);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else if (a > 192375 && a <= 361375) {
            var b = (a - 1375) / (1 - .25);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else if (a > 361375 && a <= 507375) {
            var b = (a - 3375) / (1 - .3);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else if (a > 507375 && a <= 630375) {
            var b = (a - 6375) / (1 - .35);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else if (a > 630375 && a <= 730375) {
            var b = (a - 10375) / (1 - .4);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else {
            var b = (a - 15375) / (1 - .45);
            $("#otherBeforeTax").val(parseInt(b, 10));
            $("#otherTax").val(parseInt(b, 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        }
    } else {
        $("#otherTax").val("");
        $("#otherBeforeTax").val("");
        var c = new StringBuilder;
        c.append('<div class="meng_k">');
        c.append('<div class="meng_h">');
        c.append('<span class="f-l orange">系统提示</span>');
        c.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#otherAfterTax\')[0].focus();">关闭</a></span>');
        c.append("</div>");
        c.append('<div class="meng_bc">请输入税后收入！</div>');
        c.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#otherAfterTax\')[0].focus();" value="确定" class="bnt w60"></div>');
        c.append("</div>");
        $("#MBContent").html(c.toString());
        showMengban();
        $("#btnOK").focus()
    }
}
function otherCalculateDetail() {
    switch ($("#taxType").val()) {
        case"2":
            if (jQuery.trim($("#otherBeforeTax").val()) != "") {
                App.DBAppendOther(jQuery.trim($("#otherBeforeTax").val()), 0, 2);
                if (parseFloat(jQuery.trim($("#otherBeforeTax").val())) < 4e3) {
                    $("#otherTax").val(parseInt((parseFloat(jQuery.trim($("#otherBeforeTax").val())) - 800) * .2, 10) < 0 ? 0 : parseInt((parseFloat(jQuery.trim($("#otherBeforeTax").val())) - 800) * .2, 10));
                    $("#otherAfterTax").val(parseInt(jQuery.trim($("#otherBeforeTax").val()), 10) - parseInt(jQuery.trim($("#otherTax").val()), 10))
                } else {
                    var a = 0;
                    if (parseFloat(jQuery.trim($("#otherBeforeTax").val())) * .8 <= 2e4) {
                        a = 0
                    } else if (parseFloat(jQuery.trim($("#otherBeforeTax").val())) * .8 > 2e4 && parseFloat(jQuery.trim($("#otherBeforeTax").val())) * .8 <= 5e4) {
                        a = (parseFloat(jQuery.trim($("#otherBeforeTax").val())) * .8 - 2e4) * .2 * .5
                    } else {
                        a = (5e4 - 2e4) * .2 * .5 + (parseFloat(jQuery.trim($("#otherBeforeTax").val())) * .8 - 5e4) * .2
                    }
                    $("#otherTax").val(parseInt(parseFloat(jQuery.trim($("#otherBeforeTax").val())) * (1 - .2) * .2 + a, 10));
                    $("#otherAfterTax").val(parseInt(jQuery.trim($("#otherBeforeTax").val()), 10) - parseInt(jQuery.trim($("#otherTax").val()), 10))
                }
            } else {
                var b = new StringBuilder;
                b.append('<div class="meng_k">');
                b.append('<div class="meng_h">');
                b.append('<span class="f-l orange">系统提示</span>');
                b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#otherBeforeTax\')[0].focus();">关闭</a></span>');
                b.append("</div>");
                b.append('<div class="meng_bc">请输入税前收入！</div>');
                b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#otherBeforeTax\')[0].focus();" value="确定" class="bnt w60"></div>');
                b.append("</div>");
                $("#MBContent").val(b.toString());
                showMengban();
                $("#btnOK").focus();
                $("#otherTax").val("");
                $("#otherAfterTax").val("")
            }
            break;
        case"4":
        case"5":
            App.DBAppendOther(jQuery.trim($("#otherBeforeTax2").val()), 0, jQuery.trim($("#taxType").val()));
            if (jQuery.trim($("#otherBeforeTax2").val()) != "") {
                if (parseFloat(jQuery.trim($("#otherBeforeTax2").val())) < 4e3) {
                    $("#otherTax2").val(parseInt((parseFloat(jQuery.trim($("#otherBeforeTax2").val())) - 800) * .2, 10) < 0 ? 0 : parseInt((parseFloat(jQuery.trim($("#otherBeforeTax2").val())) - 800) * .2, 10));
                    $("#otherAfterTax2").val(parseInt(jQuery.trim($("#otherBeforeTax2").val()), 10) - parseInt(jQuery.trim($("#otherTax2").val()), 10))
                } else {
                    $("#otherTax2").val(parseInt(parseFloat(jQuery.trim($("#otherBeforeTax2").val())) * (1 - .2) * .2, 10));
                    $("#otherAfterTax2").val(parseInt(jQuery.trim($("#otherBeforeTax2").val()), 10) - parseInt(jQuery.trim($("#otherTax2").val()), 10))
                }
            } else {
                var b = new StringBuilder;
                b.append('<div class="meng_k">');
                b.append('<div class="meng_h">');
                b.append('<span class="f-l orange">系统提示</span>');
                b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#otherBeforeTax2\').focus();">关闭</a></span>');
                b.append("</div>");
                b.append('<div class="meng_bc">请输入税前收入！</div>');
                b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#otherBeforeTax2\').focus();" value="确定" class="bnt w60"></div>');
                b.append("</div>");
                $("#MBContent").val(b.toString());
                showMengban();
                $("#btnOK").focus();
                $("#otherTax2").val("");
                $("#otherAfterTax2").val("")
            }
            break;
        case"3":
            App.DBAppendOther(jQuery.trim($("#otherBeforeTax2").val()), 0, 3);
            if (jQuery.trim($("#otherBeforeTax2").val()) != "") {
                if (parseFloat(jQuery.trim($("#otherBeforeTax2").val())) <= 4e3) {
                    $("#otherTax2").val(parseInt((parseFloat(jQuery.trim($("#otherBeforeTax2").val())) - 800) * .2 * (1 - .3), 10) < 0 ? 0 : parseInt((parseFloat(jQuery.trim($("#otherBeforeTax2").val())) - 800) * .2 * (1 - .3), 10));
                    $("#otherAfterTax2").val(parseInt(jQuery.trim($("#otherBeforeTax2").val()), 10) - parseInt(jQuery.trim($("#otherTax2").val()), 10))
                } else {
                    $("#otherTax2").val(parseInt(parseFloat(jQuery.trim($("#otherBeforeTax2").val())) * (1 - .2) * .2 * (1 - .3), 10));
                    $("#otherAfterTax2").val(parseInt(jQuery.trim($("#otherBeforeTax2").val()), 10) - parseInt(jQuery.trim($("#otherTax2").val()), 10))
                }
            } else {
                var b = new StringBuilder;
                b.append('<div class="meng_k">');
                b.append('<div class="meng_h">');
                b.append('<span class="f-l orange">系统提示</span>');
                b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#otherBeforeTax2\')[0].focus();">关闭</a></span>');
                b.append("</div>");
                b.append('<div class="meng_bc">请输入税前收入！</div>');
                b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#otherBeforeTax2\')[0].focus();" value="确定" class="bnt w60"></div>');
                b.append("</div>");
                $("#MBContent").html(b.toString());
                showMengban();
                $("#btnOK").focus();
                $("#otherTax2").val("");
                $("#otherAfterTax2").val("")
            }
            break;
        case"6":
        case"7":
        case"10":
            App.DBAppendOther(jQuery.trim($("#otherBeforeTax2").val()), 0, $("#taxType").val());
            if (jQuery.trim($("#otherBeforeTax2").val()) != "") {
                $("#otherTax2").val(parseInt(parseFloat(jQuery.trim($("#otherBeforeTax2").val())) * .2, 10));
                $("#otherAfterTax2").val(parseInt(jQuery.trim($("#otherBeforeTax2").val()), 10) - parseInt(jQuery.trim($("#otherTax2").val()), 10))
            } else {
                var b = new StringBuilder;
                b.append('<div class="meng_k">');
                b.append('<div class="meng_h">');
                b.append('<span class="f-l orange">系统提示</span>');
                b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#otherBeforeTax2\')[0].focus();">关闭</a></span>');
                b.append("</div>");
                b.append('<div class="meng_bc">请输入税前收入！</div>');
                b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#otherBeforeTax2\')[0].focus();" value="确定" class="bnt w60"></div>');
                b.append("</div>");
                $("#MBContent").html(b.toString());
                showMengban();
                $("#btnOK").focus();
                $("#otherTax2").val("");
                $("#otherAfterTax2").val("")
            }
            break
    }
}
function calculateBeforTaxes() {
    if (jQuery.trim($("#otherAfterTax").val()) != "") {
        App.DBAppendOther(jQuery.trim($("#otherAfterTax").val()), 1, 2);
        if (parseFloat(jQuery.trim($("#otherAfterTax").val())) < 3360) {
            if (parseFloat(jQuery.trim($("#otherAfterTax").val())) < 800) {
                $("#otherBeforeTax").val(jQuery.trim($("#otherAfterTax").val()));
                $("#otherTax").val("0")
            } else {
                var a = (parseFloat(jQuery.trim($("#otherAfterTax").val())) - 800 * .2) / (1 - .2);
                $("#otherBeforeTax").val(parseInt(a, 10));
                $("#otherTax").val(parseInt(jQuery.trim($("#otherBeforeTax").val()), 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
            }
        } else if (parseFloat(jQuery.trim($("#otherAfterTax").val())) <= 21e3) {
            var a = parseFloat(jQuery.trim($("#otherAfterTax").val())) / (1 - (1 - .2) * .2);
            $("#otherBeforeTax").val(parseInt(a, 10));
            $("#otherTax").val(parseInt(jQuery.trim($("#otherBeforeTax").val()), 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else if (parseFloat(jQuery.trim($("#otherAfterTax").val())) <= 49500) {
            var a = (parseFloat(jQuery.trim($("#otherAfterTax").val())) - 2e4 * .2 * .5) / (1 - (1 - .2) * .2 * 1.5);
            $("#otherBeforeTax").val(parseInt(a, 10));
            $("#otherTax").val(parseInt(jQuery.trim($("#otherBeforeTax").val()), 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        } else {
            var a = (parseFloat(jQuery.trim($("#otherAfterTax").val())) - 5e4 * .2 * 1 + (5e4 - 2e4) * .2 * .5) / (1 - (1 - .2) * .2 * 2);
            $("#otherBeforeTax").val(parseInt(a, 10));
            $("#otherTax").val(parseInt(jQuery.trim($("#otherBeforeTax").val()), 10) - parseInt(jQuery.trim($("#otherAfterTax").val()), 10))
        }
    } else {
        var b = new StringBuilder;
        b.append('<div class="meng_k">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#otherAfterTax\')[0].focus();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc">请输入税后收入！</div>');
        b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#otherAfterTax\')[0].focus();" value="确定" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK").focus();
        $("#otherTax").val("");
        $("#otherBeforeTax").val("")
    }
}
function otherCalculateShow2() {
    $("#payrollDIV").hide();
    $("#annualDIV").hide();
    $("#compensationDIV").hide();
    $("#decollator").hide();
    $("#otherRapidDIV").hide();
    $("#otherRapidDIV2").show();
    $("#enterpriseDIV").hide();
    $("#privatelyDIV").hide();
    $("#simplifiedDIV").hide();
    for (var a = 1; a < 11; a++) {
        $("#DIV" + a.toString()).hide()
    }
    $("#DIV14").hide();
    $("#DIV" + $("#taxType").val()).show();
    $("#otherBeforeTax2").val("");
    $("#otherAfterTax2").val("");
    $("#otherTax2").val("");
    $("#otherDIV").show()
}
function salaryReset() {
    payrollType = 0;
    insuranceBaseType = 0;
    fundBaseType = 0;
    payrollCalculateReset();
    $("#city").val("请选择城市");
    initialValue(arrayNull)
}
function salaryDetailClick() {
    if ($("#domestic").attr("checked")) {
        insuranceBaseType = 0;
        fundBaseType = 0;
        medicarePlan = arrayInsurance.medicarePlan;
        $("#insuranceBase").val("");
        $("#fundBase").val("");
        $("#insuranceMax").val(arrayInsurance.insuranceMax);
        $("#threshold").val(_threshold)
    } else {
        insuranceBaseType = 1;
        fundBaseType = 1;
        medicarePlan = 0;
        $("#insuranceBase").val("0");
        $("#fundBase").val("0");
        $("#insuranceMax").val("");
        $("#threshold").val("4800")
    }
    salaryDetailKeyup($("#threshold")[0])
}
function payrollCalculateReset() {
    $("#tax").val("");
    $("#personalTotal").html("");
    $("#pretaxTotal").html("");
    $("#pension").val("");
    $("#pensionSpan").html("");
    $("#medicare").val("");
    $("#medicareSpan").html("");
    $("#unemploymentInsurance").val("");
    $("#unemploymentInsuranceSpan").html("");
    $("#fund").val("");
    $("#fundSpan").html("");
    $("#firmTotal").html("");
    $("#firmExpenseTotal").html("");
    $("#pensionFirm").val("");
    $("#pensionFirmSpan").html("");
    $("#medicareFirm").val("");
    $("#medicareFirmSpan").html("");
    $("#unemploymentInsuranceFirm").val("");
    $("#unemploymentInsuranceFirmSpan").html("");
    $("#industrialInjuryFirm").val("");
    $("#industrialInjuryFirmSpan").html("");
    $("#maternityInsuranceFirm").val("");
    $("#maternityInsuranceFirmSpan").html("");
    $("#fundFirm").val("");
    $("#fundFirmSpan").html("");
    $("#insuranceBase").val("");
    $("#fundBase").val("");
    $("#insuranceMax").val("");
    $("#threshold").val(_threshold);
    $("#aftertax").val("");
    $("#salary").val("");
    $("#domestic").attr("checked", true);
    $("#overseas").attr("checked", false)
}
function otherRapidReset() {
    $("#otherBeforeTax").val("");
    $("#otherAfterTax").val("");
    $("#otherTax").val("")
}
function resetAnnual() {
    insuranceBaseType = 0;
    fundBaseType = 0;
    annualCalculateShow()
}
function annualCalculateShow() {
    insuranceBaseType = 0;
    fundBaseType = 0;
    $("#otherDIV").hide();
    $("#payrollDIV").hide();
    $("#compensationDIV").hide();
    $("#decollator").hide();
    $("#city").val("请选择城市");
    $("#annualCity").val("请选择城市");
    $("#cityId").val("0");
    $("#area").val("0");
    $("#annualPersonalTotal").html("");
    $("#annualPretaxTotal").html("");
    $("#annualPension").val("");
    $("#annualPensionSpan").html("");
    $("#annualMedicare").val("");
    $("#annualMedicareSpan").html("");
    $("#annualUnemploymentInsurance").val("");
    $("#annualUnemploymentInsuranceSpan").html("");
    $("#annualFund").val("");
    $("#annualFundSpan").html("");
    $("#annualFirmTotal").html("");
    $("#annualFirmExpenseTotal").html("");
    $("#annualPensionFirm").val("");
    $("#annualPensionFirmSpan").html("");
    $("#annualMedicareFirm").val("");
    $("#annualMedicareFirmSpan").html("");
    $("#annualUnemploymentInsuranceFirm").val("");
    $("#annualUnemploymentInsuranceFirmSpan").html("");
    $("#annualIndustrialInjuryFirm").val("");
    $("#annualndustrialInjuryFirmSpan").html("");
    $("#annualMaternityInsuranceFirm").val("");
    $("#annualMaternityInsuranceFirmSpan").html("");
    $("#annualFundFirm").val("");
    $("#annualFundFirmSpan").html("");
    $("#annualInsuranceBase").val("");
    $("#annualFundBase").val("");
    $("#annualInsuranceMax").val("");
    $("#annualThreshold").val(_threshold);
    $("#annualMonthSalary").val("");
    $("#annualMonthTax").html("");
    $("#annualMonthInsurance").html("");
    $("#annualPay").val("");
    $("#annualBonus").val("");
    $("#annualSalary").html("");
    $("#annualTax").html("");
    $("#annualTaxTotal").val("");
    $("#annualIncome").val("");
    $("#annualDomestic").attr("checked", true);
    $("#annualOverseas").attr("checked", false);
    $("#annualDIV").show()
}
function annualPayKeyUp() {
    if ($("#annualIncome").val() != "") {
        $("#annualPersonalTotal").html("");
        $("#annualPretaxTotal").html("");
        $("#annualPensionSpan").html("");
        $("#annualMedicareSpan").html("");
        $("#annualUnemploymentInsuranceSpan").html("");
        $("#annualFundSpan").html("");
        $("#annualFirmTotal").html("");
        $("#annualFirmExpenseTotal").html("");
        $("#annualPensionFirmSpan").html("");
        $("#annualMedicareFirmSpan").html("");
        $("#annualUnemploymentInsuranceFirmSpan").html("");
        $("#annualndustrialInjuryFirmSpan").html("");
        $("#annualMaternityInsuranceFirmSpan").html("");
        $("#annualFundFirmSpan").html("");
        if (insuranceBaseType == 0) {
            $("#annualInsuranceBase").val("")
        }
        if (fundBaseType == 0) {
            $("#annualFundBase").val("")
        }
        $("#annualMonthTax").html("");
        $("#annualMonthInsurance").html("");
        $("#annualSalary").html("");
        $("#annualTax").html("");
        $("#annualTaxTotal").val("");
        $("#annualIncome").val("")
    }
}
function annualMonthSalaryKeyUp() {
    if ($("#annualIncome").val() != "") {
        calculateTaxAnnual(0)
    }
}
function showCityDIVAnnual() {
    HiddenMengBan();
    $("#annualCity").select();
    $("#annualCity").val(jQuery.trim($("#annualCity").val()) == "请选择城市" ? "" : jQuery.trim($("#annualCity").val()));
    var a = jQuery.trim($("#annualCity").val()) == "其它" ? "" : jQuery.trim($("#annualCity").val());
    var b = showCitiesDIV(parseInt($("#area").val()), a, makePy(a));
    $("#annualCityDIV").html(b);
    $("#annualCityDIV").show();
    setCityDIVClass(a, parseInt($("#area").val()))
}
function showCityDIVAnnual_Callback(a) {
    if (a) {
        $("#annualCityDIV").html(a.value);
        $("#annualCityDIV").show()
    }
}
function hideCityDIVAnnual() {
    $("#annualCityDIV").hide()
}
function initialValueAnnual(a) {
    $("#annualInsuranceMax").val(a.insuranceMax);
    $("#annualPension").val(a.pension);
    $("#annualMedicare").val(a.medicare);
    $("#annualUnemploymentInsurance").val(a.unemploymentInsurance);
    $("#annualFund").val(a.fund);
    $("#annualThreshold").val(_threshold);
    $("#annualPensionFirm").val(a.pensionFirm);
    $("#annualMedicareFirm").val(a.medicareFirm);
    $("#annualUnemploymentInsuranceFirm").val(a.unemploymentInsuranceFirm);
    $("#annualFundFirm").val(a.fundFirm);
    $("#annualIndustrialInjuryFirm").val(a.industrialInjuryFirm);
    $("#annualMaternityInsuranceFirm").val(a.maternityInsuranceFirm);
    $("#annualDomestic").attr("checked", true);
    $("#annualOverseas").attr("checked", false)
}
function salaryDetailClickAnnual() {
    if ($("#annualDomestic").attr("checked")) {
        insuranceBaseType = 0;
        fundBaseType = 0;
        medicarePlan = arrayInsurance.medicarePlan;
        $("#annualInsuranceBase").val("");
        $("#annualFundBase").val("");
        $("#annualInsuranceMax").val(arrayInsurance.insuranceMax);
        $("#annualThreshold").val(_threshold)
    } else {
        insuranceBaseType = 1;
        fundBaseType = 1;
        medicarePlan = 0;
        $("#annualInsuranceBase").val("0");
        $("#annualFundBase").val("0");
        $("#annualInsuranceMax").val("");
        $("#annualThreshold").val("4800")
    }
    if (jQuery.trim($("#annualPay").val()) != "" && jQuery.trim($("#annualMonthSalary").val()) != "") {
        calculateTaxAnnual(0)
    }
}
function calculateTaxAnnual(a) {
    saveDB = a;
    chkfloat($("#annualBonus")[0]);
    if (jQuery.trim($("#annualCity").val()) == "" || jQuery.trim($("#annualCity").val()) == "请选择城市") {
        initialValueAnnual(arrayNull);
        var b = new StringBuilder;
        b.append('<div class="meng_k550">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc" id="eCity">请选择城市。如所在城市未列出，请选择“其它”并可根据实际情况修改各项参数；或重新在“收入类型”中选择“月薪简化版”进行计算。</div>');
        b.append('<div class="button-margin2"><input id="btnOK" type="button" value="确定" onclick="showCityDIVAnnual();" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK").focus()
    } else {
        chkfloat($("#annualPay")[0]);
        chkfloat($("#annualMonthSalary")[0]);
        if (jQuery.trim($("#annualPay").val()) == "") {
            var b = new StringBuilder;
            b.append('<div class="meng_k">');
            b.append('<div class="meng_h">');
            b.append('<span class="f-l orange">系统提示</span>');
            b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#annualPay\')[0].focus();">关闭</a></span>');
            b.append("</div>");
            b.append('<div class="meng_bc">请输入年薪！</div>');
            b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#annualPay\')[0].focus();" value="确定" class="bnt w60"></div>');
            b.append("</div>");
            $("#MBContent").html(b.toString());
            showMengban();
            $("#btnOK").focus()
        } else if (jQuery.trim($("#annualMonthSalary").val()) == "") {
            var b = new StringBuilder;
            b.append('<div class="meng_k">');
            b.append('<div class="meng_h">');
            b.append('<span class="f-l orange">系统提示</span>');
            b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#annualMonthSalary\')[0].focus();">关闭</a></span>');
            b.append("</div>");
            b.append('<div class="meng_bc">请输入每月领取！</div>');
            b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#annualMonthSalary\')[0].focus();" value="确定" class="bnt w60"></div>');
            b.append("</div>");
            $("#MBContent").html(b.toString());
            showMengban();
            $("#btnOK").focus()
        } else {
            calculateTaxesAnnual()
        }
    }
}
function calculateTaxesAnnual() {
    var a = jQuery.trim($("#annualPay").val()) == "" ? 0 : parseFloat(jQuery.trim($("#annualPay").val()));
    var b = jQuery.trim($("#annualMonthSalary").val()) == "" ? 0 : parseFloat(jQuery.trim($("#annualMonthSalary").val()));
    var c = jQuery.trim($("#annualBonus").val()) == "" ? 0 : parseFloat(jQuery.trim($("#annualBonus").val()));
    var d = 0;
    var e = jQuery.trim($("#annualInsuranceMax").val()) != "" ? jQuery.trim($("#annualInsuranceMax").val()) : "0";
    var f = e;
    if (insuranceBaseType == 0) {
        d = parseInt(a / 12, 10) < parseInt(e, 10) ? parseInt(a / 12, 10) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseInt(a / 12, 10);
        if (d < insuranceMin) {
            d = insuranceMin
        }
        $("#annualInsuranceBase").val(d);
        $("#insuranceBase").val(d)
    } else {
        d = jQuery.trim($("#annualInsuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#annualInsuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#annualInsuranceBase").val()));
        $("#insuranceBase").val(jQuery.trim($("#annualInsuranceBase").val()))
    }
    var g = 0;
    if (fundBaseType == 0) {
        g = parseInt(a / 12, 10) < parseInt(e, 10) ? parseInt(a / 12, 10) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseInt(a / 12, 10);
        if (g < minWage) {
            g = minWage
        }
        $("#annualFundBase").val(g);
        $("#fundBase").val(g)
    } else {
        g = jQuery.trim($("#annualFundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#annualFundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#annualFundBase").val()));
        $("#fundBase").val(jQuery.trim($("#annualFundBase").val()))
    }
    var h = jQuery.trim($("#annualThreshold").val()) != "" ? parseFloat(jQuery.trim($("#annualThreshold").val())) : 0;
    var i = jQuery.trim($("#annualPension").val()) != "" ? parseFloat(jQuery.trim($("#annualPension").val())) : 0;
    var j = jQuery.trim($("#annualMedicare").val()) != "" ? parseFloat(jQuery.trim($("#annualMedicare").val())) : 0;
    var k = jQuery.trim($("#annualUnemploymentInsurance").val()) != "" ? parseFloat(jQuery.trim($("#annualUnemploymentInsurance").val())) : 0;
    var l = jQuery.trim($("#annualFund").val()) != "" ? parseFloat(jQuery.trim($("#annualFund").val())) : 0;
    $("#annualPensionSpan").html((d * i / 100).toFixed(2));
    $("#annualMedicareSpan").html((d * j / 100).toFixed(2));
    $("#annualUnemploymentInsuranceSpan").html((d * k / 100).toFixed(2));
    $("#annualFundSpan").html((g * l / 100).toFixed(2));
    var m = jQuery.trim($("#annualPensionFirm").val()) != "" ? parseFloat(jQuery.trim($("#annualPensionFirm").val())) : 0;
    var n = jQuery.trim($("#annualMedicareFirm").val()) != "" ? parseFloat(jQuery.trim($("#annualMedicareFirm").val())) : 0;
    var o = jQuery.trim($("#annualUnemploymentInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#annualUnemploymentInsuranceFirm").val())) : 0;
    var p = jQuery.trim($("#annualFundFirm").val()) != "" ? parseFloat(jQuery.trim($("#annualFundFirm").val())) : 0;
    var q = jQuery.trim($("#annualIndustrialInjuryFirm").val()) != "" ? parseFloat(jQuery.trim($("#annualIndustrialInjuryFirm").val())) : 0;
    var r = jQuery.trim($("#annualMaternityInsuranceFirm").val()) != "" ? parseFloat(jQuery.trim($("#annualMaternityInsuranceFirm").val())) : 0;
    $("#annualPensionFirmSpan").html((d * m / 100).toFixed(2));
    $("#annualMedicareFirmSpan").html((d * n / 100).toFixed(2));
    $("#annualUnemploymentInsuranceFirmSpan").html((d * o / 100).toFixed(2));
    $("#annualFundFirmSpan").html((g * p / 100).toFixed(2));
    $("#annualndustrialInjuryFirmSpan").html((d * q / 100).toFixed(2));
    $("#annualMaternityInsuranceFirmSpan").html((d * r / 100).toFixed(2));
    var s = getSalary(b, h, (i + j + k) / 100, l / 100, parseInt(e, 10), f);
    if (parseFloat(s) * 12 > parseFloat(a)) {
        var t = new StringBuilder;
        t.append('<div class="meng_k">');
        t.append('<div class="meng_h">');
        t.append('<span class="f-l orange">系统提示</span>');
        t.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();">关闭</a></span>');
        t.append("</div>");
        t.append('<div class="meng_bc">每月领取超出年薪！</div>');
        t.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();" value="确定" class="bnt w60"></div>');
        t.append("</div>");
        $("#MBContent").html(t.toString());
        showMengban();
        $("#btnOK").focus();
        return
    }
    $("#annualPersonalTotal").html((parseFloat(jQuery.trim($("#annualPensionSpan").html())) + parseFloat(jQuery.trim($("#annualMedicareSpan").html())) + parseFloat(jQuery.trim($("#annualUnemploymentInsuranceSpan").html())) + parseFloat(jQuery.trim($("#annualFundSpan").html()))).toFixed(2));
    $("#annualPretaxTotal").html((s - parseFloat(jQuery.trim($("#annualPersonalTotal").html())) - h < 0 ? 0 : s - parseFloat(jQuery.trim($("#annualPersonalTotal").html())) - h).toFixed(2));
    $("#annualFirmTotal").html((parseFloat(jQuery.trim($("#annualPensionFirmSpan").html())) + parseFloat(jQuery.trim($("#annualMedicareFirmSpan").html())) + parseFloat(jQuery.trim($("#annualUnemploymentInsuranceFirmSpan").html())) + parseFloat(jQuery.trim($("#annualFundFirmSpan").html())) + parseFloat(jQuery.trim($("#annualndustrialInjuryFirmSpan").html())) + parseFloat(jQuery.trim($("#annualMaternityInsuranceFirmSpan").html()))).toFixed(2));
    $("#annualFirmExpenseTotal").html(parseFloat(parseFloat(jQuery.trim($("#annualFirmTotal").html())) + parseFloat(s)).toFixed(2));
    var u = getShuiji((s - parseFloat(jQuery.trim($("#annualPersonalTotal").html()))).toFixed(2), h);
    $("#annualMonthTax").html(u);
    $("#annualMonthInsurance").html(jQuery.trim($("#annualPersonalTotal").html()));
    $("#annualSalary").html((a - (parseFloat(b) + parseFloat(u) + parseFloat(jQuery.trim($("#annualMonthInsurance").html()))) * 12).toFixed(2));
    $("#annualSalary").html(parseFloat(jQuery.trim($("#annualSalary").html())) < 0 ? "0" : jQuery.trim($("#annualSalary").html()));
    $("#annualTax").html(getShuijiNian(parseFloat(jQuery.trim($("#annualSalary").html())) + c));
    $("#annualTaxTotal").val((parseFloat(u) * 12 + parseFloat(jQuery.trim($("#annualTax").html()))).toFixed(2));
    $("#annualIncome").val((parseFloat(b) * 12 + parseFloat(jQuery.trim($("#annualSalary").html())) + parseFloat(c) - parseFloat(jQuery.trim($("#annualTax").html()))).toFixed(2));
    if (saveDB == 1) {
        saveDB = 0;
        App.DBAppendOther(jQuery.trim($("#annualPay").val()), 0, 11)
    }
}
function salaryDetailKeyupAnnual(a) {
    chkfloatKeyup(a);
    calculateTaxAnnual(0)
}
function fundDetailKeyupAnnual(a) {
    chkfloatKeyup(a);
    $("#annualFundFirm").val(jQuery.trim($("#annualFund").val()));
    calculateTaxAnnual(0)
}
function fundFirmDetailKeyupAnnual(a) {
    chkfloatKeyup(a);
    $("#annualFund").val(jQuery.trim($("#annualFundFirm").val()));
    calculateTaxAnnual(0)
}
function insuranceBaseKeyupAnnual(a) {
    insuranceBaseType = 1;
    salaryDetailKeyupAnnual(a)
}
function annualFundBaseKeyupAnnual(a) {
    fundBaseType = 1;
    salaryDetailKeyupAnnual(a)
}
function compensationCalculateShow() {
    $("#otherDIV").hide();
    $("#payrollDIV").hide();
    $("#annualDIV").hide();
    $("#decollator").hide();
    $("#city").val("请选择城市");
    $("#annualCity").val("请选择城市");
    $("#compensationCity").val("请选择城市");
    $("#cityId").val("0");
    $("#area").val("0");
    $("#compensationBefor").val("");
    $("#wagesAVG").val("");
    $("#compensationInsurance").val("");
    $("#compensationTax").val("");
    $("#compensationAfter").val("");
    $("#compensationTime").get(0).selectedIndex = 0;
    $("#compensationDIV").show()
}
function resetCompensation() {
    compensationCalculateShow()
}
function showCityDIVCompensation() {
    HiddenMengBan();
    $("#compensationCity").select();
    $("#compensationCity").val(jQuery.trim($("#compensationCity").val()) == "请选择城市" ? "" : jQuery.trim($("#compensationCity").val()));
    var a = jQuery.trim($("#compensationCity").val()) == "其它" ? "" : jQuery.trim($("#compensationCity").val());
    var b = showCitiesDIV(parseInt($("#area").val()), a, makePy(a));
    $("#compensationCityDIV").html(b);
    $("#compensationCityDIV").show();
    setCityDIVClass(a, parseInt($("#area").val()))
}
function hideCityDIVCompensation() {
    $("#compensationCityDIV").hide()
}
function calculateTaxCompensation(a) {
    chkfloat($("#compensationBefor")[0]);
    if (jQuery.trim($("#compensationCity").val()) == "" || jQuery.trim($("#compensationCity").val()) == "请选择城市") {
        $("#wagesAVG").val("");
        var b = new StringBuilder;
        b.append('<div class="meng_k550">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc" id="eCity">请选择城市。如所在城市未列出，请选择“其它”并可根据实际情况修改各项参数；或重新在“收入类型”中选择“月薪简化版”进行计算。</div>');
        b.append('<div class="button-margin2"><input id="btnOK" type="button" value="确定" onclick="showCityDIVCompensation();" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK").focus()
    } else {
        chkInt($("#wagesAVG")[0]);
        chkfloat($("#compensationInsurance")[0]);
        if (jQuery.trim($("#compensationBefor").val()) == "") {
            var b = new StringBuilder;
            b.append('<div class="meng_k">');
            b.append('<div class="meng_h">');
            b.append('<span class="f-l orange">系统提示</span>');
            b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#annualPay\')[0].focus();">关闭</a></span>');
            b.append("</div>");
            b.append('<div class="meng_bc">请输入税前补偿金！</div>');
            b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#compensationBefor\')[0].focus();" value="确定" class="bnt w60"></div>');
            b.append("</div>");
            $("#MBContent").html(b.toString());
            showMengban();
            $("#btnOK").focus()
        } else {
            var c = parseFloat(jQuery.trim($("#compensationBefor").val()));
            var d = jQuery.trim($("#wagesAVG").val()) == "" ? 0 : parseFloat(jQuery.trim($("#wagesAVG").val()));
            var e = jQuery.trim($("#compensationInsurance").val()) == "" ? 0 : parseFloat(jQuery.trim($("#compensationInsurance").val()));
            if (c < d * 3) {
                $("#compensationTax").val(0);
                $("#compensationAfter").val(jQuery.trim($("#compensationBefor").val()))
            } else {
                var f = (c - d * 3) / parseFloat(jQuery.trim($("#compensationTime").val()));
                var g = getShuiji(f, e);
                $("#compensationTax").val((g * parseFloat(jQuery.trim($("#compensationTime").val()))).toFixed(2));
                $("#compensationAfter").val(c - parseFloat(jQuery.trim($("#compensationTax").val())))
            }
            if (a == 1) {
                App.DBAppendOther(jQuery.trim($("#compensationBefor").val()), 0, 12)
            }
        }
    }
}
function compensationBeforKeyUp(a) {
    $("#compensationTax").val("");
    $("#compensationAfter").val("");
    if (a.keyCode == 13) {
        calculateTaxCompensation(1)
    }
}
function wagesAVGKeyUp() {
    chkInt($("#wagesAVG")[0]);
    if (jQuery.trim($("#compensationTax").val()) != "") {
        calculateTaxCompensation(0)
    }
}
function compensationInsuranceKeyUp() {
    chkfloatKeyup($("#compensationInsurance")[0]);
    if (jQuery.trim($("#compensationTax").val()) != "") {
        calculateTaxCompensation(0)
    }
}
function compensationTimeChange() {
    if (jQuery.trim($("#compensationTax").val()) != "") {
        calculateTaxCompensation(0)
    }
}
function simplifiedSalaryKeydown(a) {
    if (a.keyCode == 13) {
        simplifiedCalculateSalary()
    } else {
        chkfloatKeyup($("#simplifiedSalary")[0]);
        $("#simplifiedAftertax").val("");
        $("#simplifiedTax").val("")
    }
}
function simplifiedCalculateSalary() {
    chkfloat($("#simplifiedSalary")[0]);
    var a = jQuery.trim($("#simplifiedSalary").val());
    if (a == "") {
        var b = new StringBuilder;
        b.append('<div class="meng_k">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#simplifiedSalary\')[0].focus();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc">请输入税前月收入！</div>');
        b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#simplifiedSalary\')[0].focus();" value="确定" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK")[0].focus()
    } else {
        a = parseFloat(a);
        var c = jQuery.trim($("#simplifiedInsurance").val()) == "" ? 0 : parseFloat(jQuery.trim($("#simplifiedInsurance").val()));
        var d = jQuery.trim($("#simplifiedThreshold").val()) == "" ? 0 : parseFloat(jQuery.trim($("#simplifiedThreshold").val()));
        var e = getShuiji(a - c, d);
        $("#simplifiedAftertax").val(a - c - e);
        $("#simplifiedTax").val(e);
        App.DBAppendOther(a, 0, 14)
    }
}
function simplifiedAftertaxKeydown(a) {
    if (a.keyCode == 13) {
        simplifiedCalculateAftertax()
    } else {
        chkfloatKeyup($("#simplifiedAftertax")[0]);
        $("#simplifiedSalary").val("");
        $("#simplifiedTax").val("")
    }
}
function simplifiedCalculateAftertax() {
    chkfloat($("#simplifiedAftertax")[0]);
    var a = jQuery.trim($("#simplifiedAftertax").val());
    if (a == "") {
        var b = new StringBuilder;
        b.append('<div class="meng_k">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#simplifiedAftertax\')[0].focus();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc">请输入税后月收入！</div>');
        b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#simplifiedAftertax\')[0].focus();" value="确定" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK").focus()
    } else {
        a = parseFloat(a);
        var c = jQuery.trim($("#simplifiedInsurance").val()) == "" ? 0 : parseFloat(jQuery.trim($("#simplifiedInsurance").val()));
        var d = jQuery.trim($("#simplifiedThreshold").val()) == "" ? 0 : parseFloat(jQuery.trim($("#simplifiedThreshold").val()));
        var e = getSimplifiedSalary(a, d, c);
        var f = getShuiji(e - c, d);
        $("#simplifiedSalary").val(e);
        $("#simplifiedTax").val(f);
        App.DBAppendOther(a, 1, 14)
    }
}
function simplifiedTaxKeydown(a) {
    if (a.keyCode == 13) {
        simplifiedCalculateTax()
    } else {
        chkfloatKeyup($("#simplifiedTax")[0]);
        $("#simplifiedSalary").val("");
        $("#simplifiedAftertax").val("")
    }
}
function simplifiedCalculateTax() {
    chkfloat($("#simplifiedTax")[0]);
    var a = jQuery.trim($("#simplifiedTax").val());
    if (a == "") {
        var b = new StringBuilder;
        b.append('<div class="meng_k">');
        b.append('<div class="meng_h">');
        b.append('<span class="f-l orange">系统提示</span>');
        b.append('<span class="f-r orange"><a href="javascript:HiddenMengBan();$(\'#simplifiedTax\')[0].focus();">关闭</a></span>');
        b.append("</div>");
        b.append('<div class="meng_bc">请输入缴纳个税！</div>');
        b.append('<div class="button-margin2"><input id="btnOK" type="button" onclick="HiddenMengBan();$(\'#simplifiedTax\')[0].focus();" value="确定" class="bnt w60"></div>');
        b.append("</div>");
        $("#MBContent").html(b.toString());
        showMengban();
        $("#btnOK").focus()
    } else {
        a = parseFloat(a);
        var c = jQuery.trim($("#simplifiedInsurance").val()) == "" ? 0 : parseFloat(jQuery.trim($("#simplifiedInsurance").val()));
        var d = jQuery.trim($("#simplifiedThreshold").val()) == "" ? 0 : parseFloat(jQuery.trim($("#simplifiedThreshold").val()));
        var e = getSimplifiedSalaryByTax(a, d, c);
        $("#simplifiedSalary").val(e);
        $("#simplifiedAftertax").val((e - c - a).toFixed(2));
        App.DBAppendOther(a, 2, 14)
    }
}
function getShuiji(a, b) {
    if (a < b) {
        return 0
    } else {
        var c = a - b;
        if (c <= 1500) {
            return(c * .03).toFixed(2)
        } else if (c > 1500 && c <= 4500) {
            return(c * .1 - 105).toFixed(2)
        } else if (c > 4500 && c <= 9e3) {
            return(c * .2 - 555).toFixed(2)
        } else if (c > 9e3 && c <= 35e3) {
            return(c * .25 - 1005).toFixed(2)
        } else if (c > 35e3 && c <= 55e3) {
            return(c * .3 - 2755).toFixed(2)
        } else if (c > 55e3 && c <= 8e4) {
            return(c * .35 - 5505).toFixed(2)
        } else if (c > 8e4) {
            return(c * .45 - 13505).toFixed(2)
        }
    }
}
function getSalary(a, b, c, d, e, f) {
    var g = 0, h = 0, i = 0, j = 0, k = 0;
    if (a < b) {
        h = (a + medicarePlan) / (1 - (c + d));
        g = h;
        if (insuranceBaseType == 0) {
            if (h < insuranceMin) {
                h = insuranceMin
            }
        } else {
            h = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#insuranceBase").val()))
        }
        if (fundBaseType == 0) {
            if (g < minWage) {
                g = minWage
            }
        } else {
            g = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#fundBase").val()))
        }
        i = h * c + medicarePlan;
        j = g * d;
        k = a + i + j;
        if (k > h) {
            h = k
        }
        if (k > g) {
            g = k
        }
        i = h * c + medicarePlan;
        j = g * d;
        return a + i + j
    } else {
        var l = c + d;
        k = (a - b * .03 + (1 - .03) * medicarePlan) / (1 - l - .03 + l * .03);
        if (insuranceBaseType == 0) {
            h = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
            if (h < insuranceMin) {
                h = insuranceMin
            }
        } else {
            h = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#insuranceBase").val()))
        }
        if (fundBaseType == 0) {
            g = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
            if (g < minWage) {
                g = minWage
            }
        } else {
            g = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#fundBase").val()))
        }
        i = h * c + medicarePlan;
        j = g * d;
        if (parseInt(h, 10) != parseInt(k, 10) || parseInt(g, 10) != parseInt(k, 10)) {
            k = (a - b * .03 + (i + j) * (1 - .03)) / (1 - .03)
        }
        var m = k - (i + j) - (k - (i + j) - b) * .03;
        if (parseFloat(a).toFixed(0) == parseFloat(m).toFixed(0) && k - (i + j) - b <= 1500) {
            return k.toFixed(2)
        } else {
            k = (a - 105 - b * .1 + (1 - .1) * medicarePlan) / (1 - l - .1 + l * .1);
            if (insuranceBaseType == 0) {
                h = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                if (h < insuranceMin) {
                    h = insuranceMin
                }
            } else {
                h = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#insuranceBase").val()))
            }
            if (fundBaseType == 0) {
                g = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                if (g < minWage) {
                    g = minWage
                }
            } else {
                g = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#fundBase").val()))
            }
            i = h * c + medicarePlan;
            j = g * d;
            if (parseInt(h, 10) != parseInt(k, 10) || parseInt(g, 10) != parseInt(k, 10)) {
                k = (a - 105 - b * .1 + (i + j) * (1 - .1)) / (1 - .1)
            }
            m = k - (i + j) - ((k - (i + j) - b) * .1 - 105);
            if (parseFloat(a).toFixed(0) == parseFloat(m).toFixed(0) && k - (i + j) - b > 1500 && k - (i + j) - b <= 4500) {
                return k.toFixed(2)
            } else {
                k = (a - 555 - b * .2 + (1 - .2) * medicarePlan) / (1 - l - .2 + l * .2);
                if (insuranceBaseType == 0) {
                    h = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                    if (h < insuranceMin) {
                        h = insuranceMin
                    }
                } else {
                    h = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#insuranceBase").val()))
                }
                if (fundBaseType == 0) {
                    g = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                    if (g < minWage) {
                        g = minWage
                    }
                } else {
                    g = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#fundBase").val()))
                }
                i = h * c + medicarePlan;
                j = g * d;
                if (parseInt(h, 10) != parseInt(k, 10) || parseInt(g, 10) != parseInt(k, 10)) {
                    k = (a - 555 - b * .2 + (i + j) * (1 - .2)) / (1 - .2)
                }
                m = k - (i + j) - ((k - (i + j) - b) * .2 - 555);
                if (parseFloat(a).toFixed(0) == parseFloat(m).toFixed(0) && k - (i + j) - b > 4500 && k - (i + j) - b <= 9e3) {
                    return k.toFixed(2)
                } else {
                    k = (a - 1005 - b * .25 + (1 - .25) * medicarePlan) / (1 - l - .25 + l * .25);
                    if (insuranceBaseType == 0) {
                        h = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                        if (h < insuranceMin) {
                            h = insuranceMin
                        }
                    } else {
                        h = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#insuranceBase").val()))
                    }
                    if (fundBaseType == 0) {
                        g = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                        if (g < minWage) {
                            g = minWage
                        }
                    } else {
                        g = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#fundBase").val()))
                    }
                    i = h * c + medicarePlan;
                    j = g * d;
                    if (parseInt(h, 10) != parseInt(k, 10) || parseInt(g, 10) != parseInt(k, 10)) {
                        k = (a - 1005 - b * .25 + (i + j) * (1 - .25)) / (1 - .25)
                    }
                    m = k - (i + j) - ((k - (i + j) - b) * .25 - 1005);
                    if (parseFloat(a).toFixed(0) == parseFloat(m).toFixed(0) && k - (i + j) - b > 9e3 && k - (i + j) - b <= 35e3) {
                        return k.toFixed(2)
                    } else {
                        k = (a - 2755 - b * .3 + (1 - .3) * medicarePlan) / (1 - l - .3 + l * .3);
                        if (insuranceBaseType == 0) {
                            h = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                            if (h < insuranceMin) {
                                h = insuranceMin
                            }
                        } else {
                            h = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#insuranceBase").val()))
                        }
                        if (fundBaseType == 0) {
                            g = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                            if (g < minWage) {
                                g = minWage
                            }
                        } else {
                            g = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#fundBase").val()))
                        }
                        i = h * c + medicarePlan;
                        j = g * d;
                        if (parseInt(h, 10) != parseInt(k, 10) || parseInt(g, 10) != parseInt(k, 10)) {
                            k = (a - 2755 - b * .3 + (i + j) * (1 - .3)) / (1 - .3)
                        }
                        m = k - (i + j) - ((k - (i + j) - b) * .3 - 2755);
                        if (parseFloat(a).toFixed(0) == parseFloat(m).toFixed(0) && k - (i + j) - b > 35e3 && k - (i + j) - b <= 55e3) {
                            return k.toFixed(2)
                        } else {
                            k = (a - 5505 - b * .35 + (1 - .35) * medicarePlan) / (1 - l - .35 + l * .35);
                            if (insuranceBaseType == 0) {
                                h = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                                if (h < insuranceMin) {
                                    h = insuranceMin
                                }
                            } else {
                                h = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#insuranceBase").val()))
                            }
                            if (fundBaseType == 0) {
                                g = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                                if (g < minWage) {
                                    g = minWage
                                }
                            } else {
                                g = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#fundBase").val()))
                            }
                            i = h * c + medicarePlan;
                            j = g * d;
                            if (parseInt(h, 10) != parseInt(k, 10) || parseInt(g, 10) != parseInt(k, 10)) {
                                k = (a - 5505 - b * .35 + (i + j) * (1 - .35)) / (1 - .35)
                            }
                            m = k - (i + j) - ((k - (i + j) - b) * .35 - 5505);
                            if (parseFloat(a).toFixed(0) == parseFloat(m).toFixed(0) && k - (i + j) - b > 55e3 && k - (i + j) - b <= 8e4) {
                                return k.toFixed(2)
                            } else {
                                k = (a - 13505 - b * .45 + (1 - .45) * medicarePlan) / (1 - l - .45 + l * .45);
                                if (insuranceBaseType == 0) {
                                    h = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                                    if (h < insuranceMin) {
                                        h = insuranceMin
                                    }
                                } else {
                                    h = jQuery.trim($("#insuranceBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#insuranceBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#insuranceBase").val()))
                                }
                                if (fundBaseType == 0) {
                                    g = parseFloat(k).toFixed(0) < parseInt(e, 10) ? parseFloat(k).toFixed(0) : parseInt(e, 10) > 0 ? parseInt(e, 10) : parseFloat(k).toFixed(0);
                                    if (g < minWage) {
                                        g = minWage
                                    }
                                } else {
                                    g = jQuery.trim($("#fundBase").val()) == "" ? 0 : parseFloat(jQuery.trim($("#fundBase").val())) > parseFloat(e) ? parseFloat(e) : parseFloat(jQuery.trim($("#fundBase").val()))
                                }
                                i = h * c + medicarePlan;
                                j = g * d;
                                if (parseInt(h, 10) != parseInt(k, 10) || parseInt(g, 10) != parseInt(k, 10)) {
                                    k = (a - 13505 - b * .45 + (i + j) * (1 - .45)) / (1 - .45)
                                }
                                m = k - (i + j) - ((k - (i + j) - b) * .45 - 13505);
                                return k.toFixed(2)
                            }
                        }
                    }
                }
            }
        }
    }
}
function getShuijiNian(a) {
    var b = a / 12;
    if (b <= 1500) {
        return(a * .03).toFixed(2)
    } else if (b > 1500 && b <= 4500) {
        return(a * .1 - 105).toFixed(2)
    } else if (b > 4500 && b <= 9e3) {
        return(a * .2 - 555).toFixed(2)
    } else if (b > 9e3 && b <= 35e3) {
        return(a * .25 - 1005).toFixed(2)
    } else if (b > 35e3 && b <= 55e3) {
        return(a * .3 - 2755).toFixed(2)
    } else if (b > 55e3 && b <= 8e4) {
        return(a * .35 - 5505).toFixed(2)
    } else if (b > 8e4) {
        return(a * .45 - 13505).toFixed(2)
    }
}
function getSimplifiedSalary(a, b, c) {
    if (a < b) {
        return a
    } else {
        var d = (a - b * .03 + c * (1 - .03)) / (1 - .03);
        var e = d - c - (d - c - b) * .03;
        if (parseFloat(a).toFixed(0) == parseFloat(e).toFixed(0) && d - c - b <= 1500) {
            return d.toFixed(2)
        } else {
            d = (a - 105 - b * .1 + c * (1 - .1)) / (1 - .1);
            e = d - c - (d - c - b) * .1 + 105;
            if (parseFloat(a).toFixed(0) == parseFloat(e).toFixed(0) && d - c - b > 1500 && d - c - b <= 4500) {
                return d.toFixed(2)
            }
            {
                d = (a - 555 - b * .2 + c * (1 - .2)) / (1 - .2);
                e = d - c - ((d - c - b) * .2 - 555);
                if (parseFloat(a).toFixed(0) == parseFloat(e).toFixed(0) && d - c - b > 4500 && d - c - b <= 9e3) {
                    return d.toFixed(2)
                } else {
                    d = (a - 1005 - b * .25 + c * (1 - .25)) / (1 - .25);
                    e = d - c - ((d - c - b) * .25 - 1005);
                    if (parseFloat(a).toFixed(0) == parseFloat(e).toFixed(0) && d - c - b > 9e3 && d - c - b <= 35e3) {
                        return d.toFixed(2)
                    } else {
                        d = (a - 2755 - b * .3 + c * (1 - .3)) / (1 - .3);
                        e = d - c - ((d - c - b) * .3 - 2755);
                        if (parseFloat(a).toFixed(0) == parseFloat(e).toFixed(0) && d - c - b > 35e3 && d - c - b <= 55e3) {
                            return d.toFixed(2)
                        } else {
                            d = (a - 5505 - b * .35 + c * (1 - .35)) / (1 - .35);
                            e = d - c - ((d - c - b) * .35 - 5505);
                            if (parseFloat(a).toFixed(0) == parseFloat(e).toFixed(0) && d - c - b > 55e3 && d - c - b <= 8e4) {
                                return d.toFixed(2)
                            } else {
                                d = (a - 13505 - b * .45 + c * (1 - .45)) / (1 - .45);
                                return d.toFixed(2)
                            }
                        }
                    }
                }
            }
        }
    }
}
function getSimplifiedSalaryByTax(a, b, c) {
    if (a <= 45) {
        return(a / .03 + b + c).toFixed(2)
    } else if (a > 45 && a <= 345) {
        return((a + 105) / .1 + b + c).toFixed(2)
    } else if (a > 345 && a <= 1245) {
        return((a + 555) / .2 + b + c).toFixed(2)
    } else if (a > 1245 && a <= 7745) {
        return((a + 1005) / .25 + b + c).toFixed(2)
    } else if (a > 7745 && a <= 13745) {
        return((a + 2755) / .3 + b + c).toFixed(2)
    } else if (a > 13745 && a <= 22495) {
        return((a + 5505) / .35 + b + c).toFixed(2)
    } else if (a > 22495) {
        return((a + 13505) / .45 + b + c).toFixed(2)
    }
}
var groups = "";
var payrollType = 0;
var insuranceBaseType = 0;
var fundBaseType = 0;
var saveDB = 0;
var minWage = 0;
var medicarePlan = 0;
var insuranceMin = 0;
var _threshold = 3500;
var arrayNull = {insuranceMax:"", insuranceMin:0, fundMax:"", pension:"", medicare:"", medicarePlan:0, unemploymentInsurance:"", fund:"", threshold:_threshold, pensionFirm:"", medicareFirm:"", unemploymentInsuranceFirm:"", fundFirm:"", industrialInjuryFirm:"", maternityInsuranceFirm:"", minWage:0};
var arrayInsurance = arrayNull;
$(document).ready(function () {
    $(document).click(function () {
        hideCityDIV();
        hideCityDIVAnnual()
    });
    $("#cityDIV,#cityInptDIV,#annualCityDIV,#annualCityInptDIV,#compensationCityDIV,#compensationCityInptDIV,#MBContent").click(function (a) {
        a.stopPropagation()
    })
})