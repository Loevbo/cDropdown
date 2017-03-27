(function ($) {

    $.fn.cDropdown = function (x) {

        return this.each(function () {

            var wrapper = $(this);
            var xx = $.extend({
                obj: "",
            }, x || {});

            var lastCreated;

            function initialized() {
                var returnedData
                $.grep(xx.obj, function (element, index) {
                    $.each(element, function (e, i) {
                        if (hasValue(i, "Primary", true)) {
                            returnedData = hasValue(i, "Primary", true);
                            return false;
                        }
                    })
                });

                initFirst(returnedData);
                creator(xx.obj, returnedData)
                clicker(returnedData);
                runOrder(returnedData["Id"]);
            }

            function clicker(obj) {
                var selector = obj["Id"] != null ? "#" + obj["Id"] : obj["Name"] != null ? "[Name=\"" + obj["Name"] + "\"]" : ""
                $('body').on('change', selector, function () {
                    var se = $(selector).find('option[value="CPreQVa"]');
                    if (se.val() != $(this).find('option:selected').val()) {
                        var target = $(this).attr("class").split("cTrig_")[1];
                        var v = $(this).find('option:selected').val();
                        var d;
                        if ($('#' + target).is('[class*="cTrig_"]')) {
                            hideFollow($('#' + target))
                        }
                        $.each(xx.obj[0], function (i, o) {
                            if (hasValue(o, "Id", target) != null) {
                                d = hasValue(o, "Id", target);
                                return false;
                            }
                        });
                        $('#' + target).find('option').remove();
                        if (d != null) {
                            $.each(d["option"], function (i, o) {
                                var ot = "" + o["trigger"];

                                if (ot.indexOf(",") != -1) {
                                    var arrot = ot.split(',');
                                    $.each(arrot, function (ii, oo) {
                                        if (v == oo || o["preSelect"] == true) {
                                            $('#' + target).append($("<option></option>")
                                        .attr("value", o["val"])
                                        .text(o["text"]));
                                            return false;
                                        }
                                    })
                                } else {
                                    if (v == o["trigger"] || o["preSelect"] == true) {
                                        $('#' + target).append($("<option></option>")
                                    .attr("value", o["val"])
                                    .text(o["text"]));
                                    }
                                }
                            })

                            if (d["Sort"] != null && d["Sort"] === true) {
                                var options = $('#' + target).find("option");
                                var arr = options.map(function (_, o) {
                                    return {
                                        t: $(o).text(),
                                        v: o.value
                                    };
                                }).get();
                                arr.sort(function (o1, o2) {
                                    return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
                                });
                                options.each(function (i, o) {
                                    o.value = arr[i].v;
                                    $(o).text(arr[i].t);
                                });
                            }
                            var t;
                            $.each(d["option"], function (i, o) {
                                t = hasValue(o, "preSelect", true)
                                return false;
                            })
                            if (t != null) {

                                $('#' + target).find('option[value="CPreQVa"]').prependTo($('#' + target)).attr("selected", true)
                            }

                            $('#' + target).show();

                            var q;
                            $.each(xx.obj[0], function (i, o) {
                                if (hasValue(o, "Id", obj["Child"])) {
                                    q = hasValue(o, "Id", obj["Child"]);
                                    return false;
                                }
                            })
                            if (q != null) {
                                if (q["Child"] != null) {
                                    clicker(q);
                                }
                            }
                        }

                    } else {
                        var target = $(this).attr("class").split("cTrig_")[1]
                        if ($('#' + target).is('[class*="cTrig_"]')) {
                            hideFollow($('#' + target))
                        }
                        $('#' + target).hide();
                    }



                })
            };

            function hideFollow(obj) {
                var target = $(obj).attr("class").split("cTrig_")[1]
                if ($('#' + target).is('[class*="cTrig_"]')) {
                    hideFollow($('#' + target))
                }
                $('#' + target).hide();
            };

            function initFirst(obj) {
                if (obj["Id"] != null)
                    wrapper.attr("Id", obj["Id"])
                if (obj["Name"] != null)
                    wrapper.attr("Name", obj["Name"])
                if (obj["Class"] != null)
                    wrapper.addClass(obj["Class"] + " cTrig_" + obj["Child"])
                $.each(obj["option"], function (e, i) {
                    wrapper.append($("<option></option>")
                    .attr("value", i["val"])
                    .text(i["text"]));
                })
                if (obj["Required"] != null)
                    wrapper.prop('required', true);
                if (obj["Sort"] != null && obj["Sort"] === true) {
                    var options = wrapper.find("option");
                    var arr = options.map(function (_, o) {
                        return {
                            t: $(o).text(),
                            v: o.value
                        };
                    }).get();
                    arr.sort(function (o1, o2) {
                        return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
                    });
                    options.each(function (i, o) {
                        o.value = arr[i].v;
                        $(o).text(arr[i].t);
                    });
                }
                var t;
                $.each(obj["option"], function (i, o) {
                    t = hasValue(o, "preSelect", true)
                    return false;
                })
                if (t != null) {
                    //$('#MyNiceList option[value="my_option_2"]').insertBefore('#MyNiceList option[value="my_option_1"]');
                    wrapper.find('option[value="CPreQVa"]').prependTo(wrapper).attr("selected", true)
                }
            };

            function hasValue(o, key, value) {
                if (o.hasOwnProperty(key) && o[key] === value)
                    return o;
            };

            function creator(ob, fo) {
                $.each(ob[0], function (i, o) {
                    if (o["Id"] != fo["Id"]) {
                        var sel = $('<select>')
                        if (o["Id"] != null)
                            sel.attr("Id", o["Id"])
                        if (o["Name"] != null)
                            sel.attr("Name", o["Name"])
                        if (o["Class"] != null)
                            sel.addClass(o["Class"])
                        if (o["Required"] != null)
                            sel.prop('required', true);
                        if (o["Child"] != null)
                            sel.addClass("cTrig_" + o["Child"])
                        //if (lastCreated == null) {
                        //    sel.hide().insertAfter(wrapper)
                        //    lastCreated = "#" + o["Id"];
                        //} else {
                        //    sel.hide().insertAfter($(lastCreated))
                        //}

                        sel.hide()

                        wrapper.after(sel)
                    }
                })
            };

            function runOrder(id) {
                var obj;
                if ($('#' + id).is('[class*="cTrig_"]')) {
                    obj = $('#' + id).attr("class").split("cTrig_")[1]
                    $('#' + id).after($('#' + obj))

                    runOrder(obj);
                }
            };

            initialized();
        });
    };

}(jQuery));