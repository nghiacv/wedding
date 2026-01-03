(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [356],
    {
        22469: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => f });
            var r = n(27002),
                i = n.n(r),
                o = n(14232),
                a = n(88907),
                s = n(3410),
                c = n(57257),
                l = n(89099),
                p = n(36423),
                d = n(37876);
            let u = function () {
                    var e = (0, l.useRouter)(),
                        t = (0, o.useState)(!0),
                        n = t[0],
                        r = t[1],
                        u = (0, o.useState)(""),
                        f = u[0],
                        h = u[1],
                        x = (0, o.useState)(window.innerWidth),
                        b = x[0],
                        m = x[1];
                    return ((0, o.useEffect)(
                        function () {
                            var e = window.location.pathname,
                                t = p.A.APP_URL || window.location.origin,
                                n = window.location.search,
                                r = "",
                                i = e.match(/\/s\/(?:pc\/)?([^/?]+)/);
                            if (i && i[1]) r = "/s/".concat(i[1]);
                            else {
                                var o = e.match(/\/showcase\/(?:pc\/)?([^/?]+)/);
                                if (o && o[1]) r = "/showcase/".concat(o[1]);
                                else {
                                    var a = e.match(/\/invite\/(?:pc\/)?([^/?]+)/);
                                    a && a[1] && (r = "/invite/".concat(a[1]));
                                }
                            }
                            r && h("".concat(t).concat(r).concat(n)), m(window.innerWidth);
                            var s = function () {
                                m(window.innerWidth);
                            };
                            return (
                                window.addEventListener("resize", s),
                                function () {
                                    return window.removeEventListener("resize", s);
                                }
                            );
                        },
                        [e.asPath]
                    ),
                    !f || b <= 1e3)
                        ? null
                        : (0, d.jsxs)("div", {
                              className: "jsx-3196837057 " + "qr-code-popup ".concat(n ? "expanded" : "collapsed"),
                              children: [
                                  n
                                      ? (0, d.jsxs)(d.Fragment, {
                                            children: [
                                                (0, d.jsx)("button", {
                                                    onClick: function () {
                                                        return r(!1);
                                                    },
                                                    "aria-label": "Thu nhỏ",
                                                    className: "jsx-3196837057 qr-code-close-btn",
                                                    children: (0, d.jsx)(s.A, {}),
                                                }),
                                                (0, d.jsxs)("div", {
                                                    className: "jsx-3196837057 qr-code-content",
                                                    children: [
                                                        (0, d.jsx)("div", {
                                                            className: "jsx-3196837057 qr-code-wrapper",
                                                            children: (0, d.jsx)(a.A, {
                                                                value: f,
                                                                size: 120,
                                                                errorLevel: "M",
                                                                icon: "".concat(
                                                                    p.A.CDN_URL,
                                                                    "/assets/logos/logo-cinelove-192.png"
                                                                ),
                                                                iconSize: 32,
                                                            }),
                                                        }),
                                                        (0, d.jsx)("p", {
                                                            className: "jsx-3196837057 qr-code-text",
                                                            children: "Qu\xe9t m\xe3 QR để xem tr\xean điện thoại",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        })
                                      : (0, d.jsx)("button", {
                                            onClick: function () {
                                                return r(!0);
                                            },
                                            "aria-label": "Mở QR code",
                                            className: "jsx-3196837057 qr-code-icon-btn",
                                            children: (0, d.jsx)(c.A, {}),
                                        }),
                                  (0, d.jsx)(i(), {
                                      id: "3196837057",
                                      children: [
                                          ".qr-code-popup.jsx-3196837057{position:fixed;bottom:64px;right:64px;z-index:1000;background:white;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.15);-webkit-transition:all 0.3s cubic-bezier(0.4,0,0.2,1);transition:all 0.3s cubic-bezier(0.4,0,0.2,1);-webkit-animation:float-jsx-3196837057 3s ease-in-out infinite;animation:float-jsx-3196837057 3s ease-in-out infinite;overflow:hidden;}",
                                          ".qr-code-popup.expanded.jsx-3196837057{padding:12px;min-width:140px;}",
                                          ".qr-code-popup.collapsed.jsx-3196837057{padding:0;width:48px;height:48px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                                          "@-webkit-keyframes float-jsx-3196837057{0%,100%{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}50%{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}}",
                                          "@keyframes float-jsx-3196837057{0%,100%{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}50%{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}}",
                                          ".qr-code-close-btn.jsx-3196837057{position:absolute;top:6px;right:6px;background:transparent;border:none;cursor:pointer;padding:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#666;font-size:12px;width:20px;height:20px;border-radius:4px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;z-index:1;}",
                                          ".qr-code-close-btn.jsx-3196837057:hover{background:#f5f5f5;color:#333;}",
                                          ".qr-code-icon-btn.jsx-3196837057{background:transparent;border:none;cursor:pointer;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#666;font-size:24px;width:100%;height:100%;border-radius:50%;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}",
                                          ".qr-code-icon-btn.jsx-3196837057:hover{background:#f5f5f5;color:#333;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",
                                          ".qr-code-content.jsx-3196837057{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;}",
                                          ".qr-code-wrapper.jsx-3196837057{padding:6px;background:white;border-radius:6px;}",
                                          ".qr-code-text.jsx-3196837057{margin:0;font-size:11px;color:#666;text-align:center;font-weight:500;line-height:1.4;max-width:120px;}",
                                      ],
                                  }),
                              ],
                          });
                },
                f = function (e) {
                    var t = e.children,
                        n = e.containerWidth;
                    return (0, d.jsxs)("div", {
                        style: { backgroundColor: "#f0f2f5", height: "100vh", width: "100vw", paddingTop: "5vh" },
                        className: "jsx-3147566159 pc-container",
                        children: [
                            (0, d.jsx)("div", {
                                style: {
                                    width: n ? "".concat(n, "px") : "auto",
                                    height: "90vh",
                                    margin: "auto",
                                    position: "relative",
                                    border: "1px solid #e0e0e0",
                                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                },
                                className: "jsx-3147566159 pc-content",
                                children: t,
                            }),
                            (0, d.jsx)(u, {}),
                            (0, d.jsx)(i(), {
                                id: "3147566159",
                                children: [
                                    "#app-view-index{height:100% !important;}",
                                    ".pc-container #cinelove-toolbar .message-box-button{width:130px;}",
                                    ".pc-container #cinelove-toolbar .message-box-button,.pc-container #cinelove-toolbar #animation-gift-preview-btn,.pc-container #cinelove-toolbar #cinelove-gift-button,.pc-container #cinelove-toolbar #cinelove-like-button{font-size:12px;height:35px;line-height:35px;border-radius:25px;}",
                                    ".pc-container #cinelove-toolbar #animation-gift-preview-btn span{font-size:12px;}",
                                    ".pc-container #cinelove-toolbar #cinelove-like-button,.pc-container #cinelove-toolbar #cinelove-gift-button{width:35px;}",
                                    ".pc-container .bar-messwin *{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                                    ".pc-container .bar-gift-new .select-type .option{font-size:17px !important;cursor:pointer;}",
                                    ".pc-container .bar-gift-new .gift-li .title{font-size:10px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;width:70px;}",
                                    ".pc-container .bar-gift-new .give-tip{font-size:10px !important;}",
                                    ".pc-container .bar-gift-new .give-username{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                                    ".pc-container .animate-slide-gift.gift-minibar *{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                                    ".pc-container #cinelove-canvas-preview,.pc-container #cinelove-canvas{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                                ],
                            }),
                        ],
                    });
                };
        },
        36956: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => h });
            var r = n(63857),
                i = n(43081),
                o = n.n(i),
                a = n(30638),
                s = n(33413),
                c = n(14232),
                l = n(73301),
                p = n(10553),
                d = n(89099),
                u = n(46264),
                f = n(37876);
            let h = function (e) {
                var t,
                    n = e.templateId,
                    i = e.position,
                    h = e.size,
                    x = void 0 === h ? "medium" : h,
                    b = e.isBlock,
                    m = e.color,
                    w = void 0 === m ? "#ff4d6d" : m,
                    g = (0, c.useState)(!1),
                    v = g[0],
                    k = g[1],
                    j = "authenticated" === (0, p.useSession)().status,
                    y = (0, d.useRouter)(),
                    O = (0, u.p)(),
                    z = O.initializeFavorites,
                    S = O.toggleFavorite,
                    A = O.isFavorite;
                (0, c.useEffect)(
                    function () {
                        j && z();
                    },
                    [j, z]
                );
                var N =
                        ((t = (0, r.A)(
                            o().mark(function e() {
                                var t;
                                return o().wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!v) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return");
                                                case 2:
                                                    if (j) {
                                                        e.next = 6;
                                                        break;
                                                    }
                                                    return (
                                                        l.Ay.error(
                                                            "Vui l\xf2ng đăng nhập để th\xeam v\xe0o danh s\xe1ch y\xeau th\xedch"
                                                        ),
                                                        y.push("/login?redirect=".concat(y.asPath)),
                                                        e.abrupt("return")
                                                    );
                                                case 6:
                                                    return k(!0), (e.prev = 7), (t = A(n)), (e.next = 11), S(n);
                                                case 11:
                                                    e.sent
                                                        ? l.Ay.success(
                                                              t
                                                                  ? "Đ\xe3 x\xf3a khỏi danh s\xe1ch y\xeau th\xedch"
                                                                  : "Đ\xe3 th\xeam v\xe0o danh s\xe1ch y\xeau th\xedch"
                                                          )
                                                        : l.Ay.error(
                                                              "Kh\xf4ng thể cập nhật trạng th\xe1i y\xeau th\xedch. Vui l\xf2ng thử lại sau."
                                                          ),
                                                        (e.next = 19);
                                                    break;
                                                case 15:
                                                    (e.prev = 15),
                                                        (e.t0 = e.catch(7)),
                                                        console.error("Error updating favorite status:", e.t0),
                                                        l.Ay.error("Đ\xe3 xảy ra lỗi. Vui l\xf2ng thử lại sau.");
                                                case 19:
                                                    return (e.prev = 19), k(!1), e.finish(19);
                                                case 22:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[7, 15, 19, 22]]
                                );
                            })
                        )),
                        function () {
                            return t.apply(this, arguments);
                        }),
                    E = { small: 20, medium: 24, large: 32 }[x];
                return (0, f.jsx)("button", {
                    onClick: N,
                    disabled: v,
                    className: ""
                        .concat(void 0 !== b && b ? "block" : "absolute", " ")
                        .concat("small" === x ? "w-8 h-8" : "w-10 h-10", " ")
                        .concat(
                            { "top-right": "top-3 right-3", "top-left": "top-3 left-3" }[
                                void 0 === i ? "top-right" : i
                            ],
                            " z-40 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm rounded-full shadow-md hover:bg-opacity-90 transition-all duration-200"
                        ),
                    "aria-label": A(n) ? "X\xf3a khỏi y\xeau th\xedch" : "Th\xeam v\xe0o y\xeau th\xedch",
                    children: A(n)
                        ? (0, f.jsx)(a.A, { style: { fontSize: E, color: w } })
                        : (0, f.jsx)(s.A, { style: { fontSize: E, color: w } }),
                });
            };
        },
        62684: (e, t, n) => {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/template/pc/[templateSlug]",
                function () {
                    return n(83450);
                },
            ]);
        },
        83450: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { __N_SSP: () => q, default: () => C });
            var r = n(59860),
                i = n(42969),
                o = n(27925),
                a = n(63857),
                s = n(43081),
                c = n.n(s),
                l = n(66125),
                p = n(14232),
                d = n(6428),
                u = n.n(d),
                f = n(33845),
                h = n.n(f),
                x = n(16752),
                b = n(4105),
                m = n(22469),
                w = n(89099),
                g = n(733),
                v = n(62867),
                k = n(32939),
                j = n(43107),
                y = n(83240),
                O = n(36956),
                z = n(89862),
                S = n(32716),
                A = n(72567),
                N = n(54737),
                E = n(37876),
                P = ["editorViewportWidth"];
            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? T(Object(n), !0).forEach(function (t) {
                              (0, i.A)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : T(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                }
                return e;
            }
            var q = !0;
            let C = function (e) {
                var t = e.templateData,
                    n = e.templateId,
                    i = e.canonicalUrl,
                    s = (0, w.useRouter)(),
                    d = (0, g.bi)().setPageId,
                    f = "true" === s.query.onlyPreview,
                    T = "true" === s.query.hide,
                    q = (0, p.useState)(!1),
                    C = q[0],
                    R = q[1];
                (0, p.useEffect)(
                    function () {
                        var e;
                        d(n),
                            ((e = (0, a.A)(
                                c().mark(function e() {
                                    return c().wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.prev = 0), (e.next = 3), (0, j.Xc)(n);
                                                    case 3:
                                                        e.next = 8;
                                                        break;
                                                    case 5:
                                                        (e.prev = 5),
                                                            (e.t0 = e.catch(0)),
                                                            console.error("Error tracking template view:", e.t0);
                                                    case 8:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 5]]
                                    );
                                })
                            )),
                            function () {
                                return e.apply(this, arguments);
                            })();
                    },
                    [n, s, t.slug]
                );
                // debugger;
                // var L = JSON.parse(u().decompress(u().decodeBase64(t.templateData))),
                var L = {
    "ROOT": {
        "type": {
            "resolvedName": "AppContainer"
        },
        "isCanvas": true,
        "props": {
            "width": 500,
            "height": 6881,
            "background": "#fff"
        },
        "displayName": "Container",
        "custom": {
            "displayName": "App"
        },
        "hidden": false,
        "nodes": [
            "KW2IhOcqS-",
            "3G6YWNez3O",
            "CAu5o1b3sG",
            "zEucc0oVwv",
            "Fp9fBIyX5r",
            "cGt4xFOjgu",
            "Bu2Cj3FLDC",
            "UNDBwfoZ9q",
            "ouY-3STznN",
            "9o4PVEtwt8",
            "0Bqpg5B6Iv",
            "XUI-Mv3JG1",
            "gkj9O8-v7j",
            "IiaejTjvId",
            "Mfku3HbDcr",
            "gn0hgVmVaD",
            "-uqxMyuesN",
            "hs8R-woAED",
            "Wjs48I0L0f",
            "lqys1KwDP2",
            "r6tMAqeHXe",
            "djsPVKYw6L",
            "FToiG8Jp8_",
            "uBP5vxKsGc",
            "i22lIVItLm",
            "9gxUV9GoJC",
            "bAnNW2uNLr",
            "QiRHH71_Q0",
            "NW-s717Kpr",
            "olFHd2OLT7",
            "CjkTfeR4dZ",
            "G1BUFQfWiz",
            "MzE5UWxyKO",
            "uEFLMzEjSU",
            "rHGaHVFmq_",
            "nMdmbGyxTz",
            "VXxf_aNUnP",
            "to5Ehnowhz",
            "s9m4AgF7BW",
            "pBdCMjeIXN",
            "9AU_53rdki",
            "XPY6IoRQu9",
            "GbIqFjPoez",
            "UFFbdk2kP1",
            "9dFeiTjtMD",
            "hXVarTM1Kz",
            "UKF4OEf01A",
            "6jlFtSctDr",
            "lXREUc2w82",
            "1vZ2mzHSNO",
            "gncKxlwCVP",
            "3c0HlKcb6Z",
            "eq2LQ8n9PE",
            "b_iUjycEZJ",
            "btXbxzLV0G",
            "qkiY-A63ED",
            "Cl2wur6TE1",
            "_pPcB4BSOe",
            "lbU2J61wmo",
            "rSyPUHsOKW",
            "8dZuhx3iOm",
            "hQJwiB84FE",
            "DSWo1uR0t8",
            "vtfnbSu8f6",
            "L33O9DJk-D",
            "50_sY5_2X8",
            "T5FEIgf-O0",
            "_uGMQvV3li",
            "t1EyxhDgnE",
            "M0KHwuCBU4",
            "3SC9ftK8X7",
            "pNN_xhaj4Z",
            "-d3slCBCGr",
            "pcK9YyLtN7",
            "dR1yjcCqy1",
            "IVNQdjGNIt",
            "SukqA63H75",
            "Ly1iFKymHC",
            "lfWj9WmGKb",
            "Zci4devYv-",
            "5DxOBeHU9m",
            "vdfC6XE4o9",
            "0EJMiEek-0",
            "3p58BZBygv",
            "S2k-DRf8t2",
            "5W149ucdOf",
            "CL0ygcp7iH",
            "lVC0bxW8Bq",
            "ZQrOOW5tIk",
            "833jXhO2rl",
            "78rv3M3_ID",
            "7D4qmI9d1u",
            "nFd9fvuhZU",
            "itTEuQdX7r",
            "xS5uZJ9yBt",
            "VxD8KK04wh",
            "22PDlnh2Mo",
            "C0Jpl2jbnA",
            "paSPjXKJnJ",
            "YV1_D_letr",
            "fa9OGZN4ZZ",
            "A9Uc5vIiI-",
            "Kty-fBWHSU",
            "3OO_79sfzW",
            "LyviUJQpZD",
            "FfMmbC7jg_"
        ],
        "linkedNodes": {}
    },
    "KW2IhOcqS-": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 0,
            "left": 0,
            "width": 500,
            "height": 500,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 0,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "3G6YWNez3O": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 91.8,
            "left": 39.0411,
            "width": 305.76,
            "height": 478.68,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "maskShapeImg": "resources/cropShapes/029_grhum0ffpk.png",
            "zIndex": 1,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/4ee06e47-e476-44e6-9e06-15bddc5f569d.png?crop=0,0,570,760",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "CAu5o1b3sG": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 43,
            "left": 0,
            "width": 153.846,
            "height": 200,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 0,
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/1faee750-3c82-4fdb-badb-f258477bd1c4.png"
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "zEucc0oVwv": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 233,
            "left": -16.053,
            "width": 128.305,
            "height": 114.833,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 0,
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/a6d0b3c8-29c5-4cfd-b056-90a77cad3837.png"
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Fp9fBIyX5r": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 22,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#f0f0f0",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "SAVE THE DATE",
            "top": 11.1285,
            "left": 11,
            "width": 480,
            "height": 28,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 3,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "cGt4xFOjgu": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 589.047,
            "left": 101.2,
            "width": 321.6,
            "height": 75.5759,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 4,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/89df9cd1-5f2a-4dea-ac2d-34bcf25ce777.png"
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Bu2Cj3FLDC": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": 1.5,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#f0f0f0",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "THƯ MỜI TIỆC CƯỚI",
            "top": 302.734,
            "left": 348.4,
            "width": 150.8,
            "height": 22.5,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "bottom",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "#f0f0f0",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 4,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "UNDBwfoZ9q": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 14,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": 1.51,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#f0f0f0",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "CHỦ NHẬT - 16:00",
            "top": 336.3,
            "left": 335.2,
            "width": 163,
            "height": 21,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 4,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "ouY-3STznN": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 14,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#f0f0f0",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "25 . 01 . 2026",
            "top": 362.238,
            "left": 337.8,
            "width": 163,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 5,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "9o4PVEtwt8": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 328,
            "left": 343.8,
            "width": 147.001,
            "height": 1.96001,
            "backgroundColor": "transparent",
            "color": "#faf5f5",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 6,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "0Bqpg5B6Iv": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 386,
            "left": 355.794,
            "width": 131.043,
            "height": 1.74725,
            "backgroundColor": "transparent",
            "color": "#faf5f5",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 7,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "XUI-Mv3JG1": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": 1.5,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#f0f0f0",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "LỄ THÀNH HÔN",
            "top": 396.509,
            "left": 356.4,
            "width": 143.8,
            "height": 18,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "bottom",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "#f0f0f0",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 5,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "gkj9O8-v7j": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 14,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": 1.5,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#f0f0f0",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "THỨ HAI&nbsp; - 10:00",
            "top": 423.5,
            "left": 346.2,
            "width": 154,
            "height": 20.9983,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 5,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "IiaejTjvId": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 14,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#f0f0f0",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "26 . 01. 2026",
            "top": 450.006,
            "left": 337.2,
            "width": 163,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 6,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Mfku3HbDcr": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 30,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"BucThu\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#631717",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Trọng Nghĩa",
            "top": 829.164,
            "left": 5.8,
            "width": 241.2,
            "height": 41,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "bottom",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "#f0f0f0",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 9,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "gn0hgVmVaD": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 30,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"BucThu\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#631717",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Ngọc Hải",
            "top": 828.534,
            "left": 250,
            "width": 247.4,
            "height": 41,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "bottom",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "#f0f0f0",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 8,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "-uqxMyuesN": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1401.63,
            "left": 190.3,
            "width": 114.7,
            "height": 27.4152,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                20,
                20,
                20,
                20
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 0,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "hs8R-woAED": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 26,
            "textAlign": "right",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Nhà Trai",
            "top": 712.5,
            "left": 66.1,
            "width": 152.9,
            "height": 30,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 10,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Wjs48I0L0f": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "right",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": 1.79,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Ông : Cao Văn Dũng<div>Bà : Đỗ Thị Ngà</div>",
            "top": 750.481,
            "left": 39,
            "width": 179.9,
            "height": 36,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 11,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "lqys1KwDP2": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "right",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "<br>",
            "top": 785.195,
            "left": 20,
            "width": 179.9,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 12,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "r6tMAqeHXe": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 26,
            "textAlign": "left",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Nhà Gái",
            "top": 712.494,
            "left": 275.4,
            "width": 152.9,
            "height": 30,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 11,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "djsPVKYw6L": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "left",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": 1.79,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Bà : Cao Thị Hợi",
            "top": 750.494,
            "left": 275.35,
            "width": 179.9,
            "height": 54,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 12,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "FToiG8Jp8_": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 11,
            "textAlign": "right",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": 1.79,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Hoằng Giang - Thanh Hoá",
            "top": 804.181,
            "left": 19.4,
            "width": 199,
            "height": 19.6875,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 12,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "uBP5vxKsGc": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 12,
            "textAlign": "left",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": 1.79,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Hoằng Giang - Thanh Hoá",
            "top": 802.406,
            "left": 273.05,
            "width": 217.8,
            "height": 21.4688,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 13,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "i22lIVItLm": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 748.634,
            "left": 246,
            "width": 0.933346,
            "height": 70.0011,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 14,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "9gxUV9GoJC": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 718.806,
            "left": 236.349,
            "width": 21.3,
            "height": 23.3883,
            "backgroundColor": "transparent",
            "color": "#999999",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 15,
            "materialType": "img",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/flowchartIcons/9mxwbpkpydry92gg8gumt.png"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "bAnNW2uNLr": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 838.754,
            "left": 231.7,
            "width": 25.9,
            "height": 25.9,
            "backgroundColor": "transparent",
            "color": "#999999",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 16,
            "materialType": "img",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/happiness/0u2unnxalt31wq5tvw74a.png"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "QiRHH71_Q0": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 35,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"HoaTay1\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Thư Mời",
            "top": 893.891,
            "left": 145.65,
            "width": 189.5,
            "height": 41,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "top",
            "borderSize": 1,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 17,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "NW-s717Kpr": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 12,
            "textAlign": "center",
            "fontWeight": "bold",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "uppercase",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tham dự lễ Thành Hôn của CHÚNG MÌNH",
            "top": 943.318,
            "left": 46,
            "width": 402,
            "height": 15,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 18,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "olFHd2OLT7": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 990.38,
            "left": 50.6461,
            "width": 118.548,
            "height": 188.105,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 1,
            "borderStyle": "solid",
            "borderColor": "#631717",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 19,
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "/imgs/first.JPG",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "CjkTfeR4dZ": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 975.497,
            "left": 191.934,
            "width": 118.112,
            "height": 179.723,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 1,
            "borderStyle": "solid",
            "borderColor": "#631717",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 20,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/a561ec34-f420-4181-8092-848a7703e9a6.jpg",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "G1BUFQfWiz": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 990.378,
            "left": 335.164,
            "width": 126.168,
            "height": 194.66,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 1,
            "borderStyle": "solid",
            "borderColor": "#631717",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 21,
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/addc9fe2-e78e-4280-bb08-0c1d2f479de6.png",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "MzE5UWxyKO": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 12,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Vào Lúc",
            "top": 1203.4,
            "left": 49,
            "width": 402,
            "height": 15,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 19,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "uEFLMzEjSU": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 28,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#631717",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "26.01.2026",
            "top": 1228.52,
            "left": 169.2,
            "width": 155,
            "height": 30,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "right-left",
            "borderSize": 2,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 22,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "rHGaHVFmq_": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 23,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#631717",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Thứ Hai",
            "top": 1234.6,
            "left": 330,
            "width": 125.3,
            "height": 26.6667,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "right-left",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 23,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "nMdmbGyxTz": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 23,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#631717",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "10:00",
            "top": 1233.6,
            "left": 81,
            "width": 96,
            "height": 26.6667,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "right-left",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 24,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "VXxf_aNUnP": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tức ngày 08 tháng 12 năm Ất Tỵ",
            "top": 1267.79,
            "left": 59.3,
            "width": 402,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 20,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "to5Ehnowhz": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "bold",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tại&nbsp;",
            "top": 1298.9,
            "left": 53.2,
            "width": 402,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 20,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "s9m4AgF7BW": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 27,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#631717",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tư Gia Nhà Trai",
            "top": 1331.16,
            "left": 53.4,
            "width": 408.4,
            "height": 32,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "right-left",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 24,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "pBdCMjeIXN": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Thôn Trinh Thọ  - Hoằng Giang - Thanh Hoá",
            "top": 1369.2,
            "left": 53.2,
            "width": 402,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 21,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "9AU_53rdki": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Chỉ đường",
            "top": 1405.8,
            "left": 194.6,
            "width": 105.5,
            "height": 18.8889,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 25,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "XPY6IoRQu9": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 18,
            "textAlign": "left",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": 1.4,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tiệc Mời Cưới Nhà Trai",
            "top": 1480.89,
            "left": 2.5,
            "width": 197.4,
            "height": 21,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "right-left",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 29,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "GbIqFjPoez": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1474.7,
            "left": 0,
            "width": 199.9,
            "height": 35.5502,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 26,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "UFFbdk2kP1": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1474.71,
            "left": 177.039,
            "width": 35.3933,
            "height": 35.5,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 28,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/jjpid2rb1ijnzdqlsq5idt.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "9dFeiTjtMD": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1517.87,
            "left": 15,
            "width": 2.60598,
            "height": 142.583,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 15,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "hXVarTM1Kz": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "left",
            "fontWeight": "bold",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "16:00 - Chủ Nhật",
            "top": 1529,
            "left": 25.7,
            "width": 210.7,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 22,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "UKF4OEf01A": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "left",
            "fontWeight": "bold",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "25 . 01 . 2026",
            "top": 1551.63,
            "left": 25.7,
            "width": 210.7,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 23,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "6jlFtSctDr": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "left",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "07/12 âm lịch",
            "top": 1574.26,
            "left": 25.7,
            "width": 210.7,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 24,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "lXREUc2w82": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 18,
            "textAlign": "right",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": 1.4,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tiệc Mời Cưới Nhà Gái",
            "top": 1481.94,
            "left": 293.4,
            "width": 197.4,
            "height": 21,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "right-left",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 30,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "1vZ2mzHSNO": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1475.64,
            "left": 300.1,
            "width": 199.9,
            "height": 35.5502,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 27,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "gncKxlwCVP": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1474.71,
            "left": 287.345,
            "width": 35.3933,
            "height": 35.5,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 29,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/jjpid2rb1ijnzdqlsq5idt.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "3c0HlKcb6Z": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1519.87,
            "left": 484,
            "width": 2.58771,
            "height": 141.584,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 16,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "eq2LQ8n9PE": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "right",
            "fontWeight": "bold",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "16:00 - Chủ Nhật",
            "top": 1529.02,
            "left": 346.15,
            "width": 127.4,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 23,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "b_iUjycEZJ": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "right",
            "fontWeight": "bold",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "25 . 01 . 2026",
            "top": 1552.26,
            "left": 329.2,
            "width": 141.6,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 24,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "btXbxzLV0G": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "right",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "07/12 âm lịch",
            "top": 1575.49,
            "left": 262.8,
            "width": 210.7,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 25,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "qkiY-A63ED": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "left",
            "fontWeight": "normal",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tại Tư Gia Nhà Trai",
            "top": 1602.19,
            "left": 25.7,
            "width": 210.7,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 23,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Cl2wur6TE1": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "right",
            "fontWeight": "normal",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tại Tư Gia Nhà Gái",
            "top": 1602.28,
            "left": 266.05,
            "width": 210.7,
            "height": 19,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 24,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "_pPcB4BSOe": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1630.13,
            "left": 30.9,
            "width": 114.7,
            "height": 27.4152,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                20,
                20,
                20,
                20
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 0,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "lbU2J61wmo": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Chỉ đường",
            "top": 1634.36,
            "left": 30.9,
            "width": 111.6,
            "height": 18.8889,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 26,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "rSyPUHsOKW": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Chỉ đường",
            "top": 1632.43,
            "left": 367,
            "width": 108.1,
            "height": 18.8889,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 27,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "8dZuhx3iOm": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1629.06,
            "left": 364.4,
            "width": 114.7,
            "height": 27.4152,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                20,
                20,
                20,
                20
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 0,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "hQJwiB84FE": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 1711.34,
            "left": -0.0999999,
            "width": 500.9,
            "height": 66.2782,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 34,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "DSWo1uR0t8": {
        "type": {
            "resolvedName": "PluginCalendar"
        },
        "isCanvas": false,
        "props": {
            "top": 1778.71,
            "left": 0.45,
            "width": 499.5,
            "height": 376.173,
            "backgroundColor": "transparent",
            "color": "#000000",
            "themeColor": "rgb(243, 150, 161)",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "calendarType": "NONE",
            "fontSize": 16,
            "fontFamily": "\"Roboto\"",
            "selectedDate": "2026-01-26T10:00:00.000Z",
            "zIndex": 35,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.3,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Calendar",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "vtfnbSu8f6": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 2015.72,
            "left": 429.9,
            "width": 49.9,
            "height": 49.9,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 36,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/8izwzj3cxl7ecz76ls3w6b.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "L33O9DJk-D": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 26,
            "textAlign": "left",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Tháng 01",
            "top": 1727.91,
            "left": 7,
            "width": 170,
            "height": 36,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 37,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "50_sY5_2X8": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 2224.04,
            "left": 218.8,
            "width": 282,
            "height": 799.514,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 35,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "T5FEIgf-O0": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 2314.58,
            "left": 0,
            "width": 218.4,
            "height": 529.255,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 38,
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/27e555f8-c479-40b8-adf8-ab0b96cddca6.png",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "_uGMQvV3li": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 2245.25,
            "left": 247.031,
            "width": 228.5,
            "height": 305.047,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 39,
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/ecf70f4f-546e-49d3-a78b-92cfd15fdc89.png",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "t1EyxhDgnE": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 21,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "I love you all I can",
            "top": 2556.19,
            "left": 212.4,
            "width": 293.4,
            "height": 26,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 40,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "M0KHwuCBU4": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 2591.58,
            "left": 248.173,
            "width": 228.6,
            "height": 306.323,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 41,
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/6c3873c4-4e61-41d7-b6c1-441bcc3f4e06.png",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "3SC9ftK8X7": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 21,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Chillatos\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "With You",
            "top": 2879.89,
            "left": 220.8,
            "width": 293.4,
            "height": 47,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 41,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "pNN_xhaj4Z": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 13,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Khoảnh khắc gặp được em,&nbsp;<div>anh đã quyết định sẽ cùng em đi đến&nbsp;</div><div>hết cuộc đời.</div>",
            "top": 2960.13,
            "left": 237.85,
            "width": 253.1,
            "height": 45,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 41,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "-d3slCBCGr": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 16,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "If I know what love is,<div>&nbsp;it is because of you.</div>",
            "top": 2926.29,
            "left": -2.15,
            "width": 220.5,
            "height": 32,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 42,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "pcK9YyLtN7": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 2189.02,
            "left": 1,
            "width": 498.2,
            "height": 4.42233,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 35,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "dR1yjcCqy1": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3041.78,
            "left": -0.597164,
            "width": 503.2,
            "height": 4.4667,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 36,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "IVNQdjGNIt": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3049.79,
            "left": 0.4,
            "width": 500.4,
            "height": 279.454,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 36,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "SukqA63H75": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3164.04,
            "left": 35.287,
            "width": 202.6,
            "height": 270.471,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 43,
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/f409f475-27f9-46fa-8c23-9a5d33045691.png",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Ly1iFKymHC": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3161.94,
            "left": 254.2,
            "width": 201,
            "height": 269.34000000000003,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 44,
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/03a93321-cb90-49e9-b9fe-1fca5f4f168d.png",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "lfWj9WmGKb": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3448.89,
            "left": 35.3,
            "width": 202.5,
            "height": 270.337,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 45,
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/e13442cb-f4d8-4e42-becc-a67a7f99c1ee.png",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Zci4devYv-": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3448.59,
            "left": 254.169,
            "width": 201,
            "height": 271.09,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 46,
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "/imgs/first.JPG",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "5DxOBeHU9m": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 26,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#631717",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "WITH YOU",
            "top": 3767,
            "left": 10,
            "width": 480,
            "height": 31,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 47,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "vdfC6XE4o9": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 16,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": 1.62,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#000000",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Every moment of each day,&nbsp;<div>loving and missing you&nbsp;</div><div>dominates every inch of my brain.</div>",
            "top": 3819.1,
            "left": 18.2,
            "width": 480,
            "height": 78,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 48,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "0EJMiEek-0": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3450.53,
            "left": -155.1,
            "width": 330.2,
            "height": 447.422,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 10.5348,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 49,
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/016b5d70-8d6b-4f3c-b16c-2d93e447544c.png"
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "3p58BZBygv": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3791.34,
            "left": 364.418,
            "width": 152.2,
            "height": 147.876,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 50,
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/a6d0b3c8-29c5-4cfd-b056-90a77cad3837.png"
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "S2k-DRf8t2": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 2915.35,
            "left": 417.3,
            "width": 100,
            "height": 89.5,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 51,
            "locked": false,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/a6d0b3c8-29c5-4cfd-b056-90a77cad3837.png"
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "5W149ucdOf": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3934.78,
            "left": 0.173609,
            "width": 500.2,
            "height": 4.44008,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 37,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "CL0ygcp7iH": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 3959.73,
            "left": 92.4,
            "width": 301.5,
            "height": 749.388,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 37,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "lVC0bxW8Bq": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 4023.58,
            "left": 19.4,
            "width": 464.8,
            "height": 306.432,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 52,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/b8f7115c-8a2a-4bba-b404-bb4d7e5fbfd8.jpg",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "ZQrOOW5tIk": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 20,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Aquarelle\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Hôn nhân là chuyện cả đời<div>Yêu người vừa ý, Cưới người Mình thương</div>",
            "top": 3062.96,
            "left": 48.1,
            "width": 390.6,
            "height": 38,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 42,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "833jXhO2rl": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 4328.64,
            "left": 19.5,
            "width": 464.8,
            "height": 316.039,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 53,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/be6435a9-ec6c-4a04-837f-b37fefbfe30e.jpg",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "78rv3M3_ID": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Em khiến anh muốn trở thành phiên bản tốt nhất của chính mình",
            "top": 4658.41,
            "left": 115.1,
            "width": 256.3,
            "height": 38,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 54,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "7D4qmI9d1u": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": 1.62,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#faf5f5",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "You make me want to be a better man.",
            "top": 3981.53,
            "left": 5,
            "width": 480,
            "height": 26,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 49,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "nFd9fvuhZU": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 4719.99,
            "left": 1.7,
            "width": 497.2,
            "height": 4.41346,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 38,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "itTEuQdX7r": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 4728.53,
            "left": 0.4,
            "width": 499.5,
            "height": 661.483,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 55,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/f409f475-27f9-46fa-8c23-9a5d33045691.png",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "xS5uZJ9yBt": {
        "type": {
            "resolvedName": "PluginCountDown"
        },
        "isCanvas": false,
        "props": {
            "top": 4959.62,
            "left": 420,
            "width": 70,
            "height": 280,
            "backgroundColor": "transparent",
            "color": "#fff",
            "themeColor": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "fontSize": 14,
            "fontFamily": "Arial",
            "selectedDate": "2026-01-26T10:00:00.000Z",
            "selectedTime": "2026-01-06T05:00:00.000Z",
            "zIndex": 56,
            "locked": false,
            "direction": "vertical",
            "spacing": 20,
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0.3,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "CountDown",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "VxD8KK04wh": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 5394.76,
            "left": 3.8,
            "width": 495.2,
            "height": 4.3957,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 39,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "22PDlnh2Mo": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 5405.01,
            "left": 0.35,
            "width": 500.5,
            "height": 268.894,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 38,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "C0Jpl2jbnA": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 5443.33,
            "left": 55.961,
            "width": 395,
            "height": 450.299,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 57,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/a561ec34-f420-4181-8092-848a7703e9a6.jpg",
            "isReplaceable": true
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "paSPjXKJnJ": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 26,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#ffffff",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 90,
            "text": "LOVE",
            "top": 5506.51,
            "left": -66.8,
            "width": 185,
            "height": 31,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 58,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "YV1_D_letr": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 26,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Scarlet Bradley.regular\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#ffffff",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 270,
            "text": "LOVE",
            "top": 5506.46,
            "left": 382.7,
            "width": 185,
            "height": 36,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 59,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-left",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "fa9OGZN4ZZ": {
        "type": {
            "resolvedName": "PluginForm"
        },
        "isCanvas": false,
        "props": {
            "top": 5848.08,
            "left": 100,
            "width": 300,
            "height": 406,
            "backgroundColor": "#ffffff",
            "color": "#333333",
            "borderColor": "#e0e0e0",
            "buttonColor": "#631717",
            "buttonTextColor": "#ffffff",
            "titleText": "Xác nhận tham dự",
            "nameLabel": "Họ và tên",
            "attendLabel": "Bạn sẽ tham dự chứ?",
            "attendYesText": "Có, tôi sẽ tham dự",
            "attendNoText": "Tôi bận, rất tiếc không thể tham dự",
            "attendeeCountLabel": "Số lượng người tham dự",
            "enableAttendeeCount": true,
            "submitText": "Gửi xác nhận",
            "padding": [
                16,
                16,
                16,
                16
            ],
            "opacity": 1,
            "rotation": 0,
            "borderRadius": [
                5,
                5,
                5,
                5
            ],
            "borderPosition": "all",
            "borderSize": 1,
            "borderStyle": "solid",
            "hasShadow": true,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 2,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.1)"
            },
            "fontSize": 14,
            "fontFamily": "Arial",
            "zIndex": 60,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.3,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Biểu mẫu tham dự",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "A9Uc5vIiI-": {
        "type": {
            "resolvedName": "PhotoBox"
        },
        "isCanvas": false,
        "props": {
            "top": 5644.91,
            "left": -143.007,
            "width": 305.9,
            "height": 414.496,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 12.369,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 61,
            "locked": false,
            "transition": {
                "effectType": "slide-right",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "templates/assets/efd815e3-41ff-4eb3-b31b-c25b202bc08c/016b5d70-8d6b-4f3c-b16c-2d93e447544c.png"
        },
        "displayName": "Photo Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Kty-fBWHSU": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 26,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Belinda Avenue\"",
            "lineHeight": "normal",
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#ffffff",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "HỘP QUÀ YÊU THƯƠNG",
            "top": 6408.79,
            "left": 12.9,
            "width": 480,
            "height": 52,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 66,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "3OO_79sfzW": {
        "type": {
            "resolvedName": "PluginQrBox"
        },
        "isCanvas": false,
        "props": {
            "top": 6524.6,
            "left": 205,
            "width": 100,
            "height": 100,
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 67,
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.3,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "imgKey": "resources/flowchartIcons/bc7ro23uqhun7ge954163l.png",
            "qrBankAccounts": [],
            "modalTitle": "Hộp Quà Yêu Thương",
            "continuousAnimation": {
                "type": "wobble",
                "duration": 2,
                "delay": 0
            }
        },
        "displayName": "Qr Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "LyviUJQpZD": {
        "type": {
            "resolvedName": "TextBox"
        },
        "isCanvas": false,
        "props": {
            "fontSize": 15,
            "textAlign": "center",
            "fontWeight": "500",
            "fontFamily": "\"Quicksand\"",
            "lineHeight": 1.62,
            "letterSpacing": "0",
            "textTransform": "none",
            "textDecoration": "none",
            "color": "#ffffff",
            "backgroundColor": "transparent",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "text": "Cảm ơn bạn đã đồng hành và chúc phúc cho hành trình yêu thương của chúng mình.&nbsp;<div>Niềm vui hôm nay trọn vẹn hơn khi có bạn cùng sẻ chia! 🌷</div>",
            "top": 6693.84,
            "left": 105.3,
            "width": 321.6,
            "height": 97,
            "fontStyle": "normal",
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 68,
            "locked": false,
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0,
                "effectEasing": "ease-out",
                "effectEnabled": true
            }
        },
        "displayName": "Text Box",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "FfMmbC7jg_": {
        "type": {
            "resolvedName": "MaterialBox"
        },
        "isCanvas": false,
        "props": {
            "top": 6360.74,
            "left": 46,
            "width": 415.5,
            "height": 467.111,
            "backgroundColor": "transparent",
            "color": "#631717",
            "padding": [
                0,
                0,
                0,
                0
            ],
            "shadow": 0,
            "opacity": 1,
            "rotation": 0,
            "flipX": false,
            "flipY": false,
            "borderRadius": [
                0,
                0,
                0,
                0
            ],
            "borderPosition": "all",
            "borderSize": 0,
            "borderStyle": "solid",
            "borderColor": "",
            "hasShadow": false,
            "boxShadow": {
                "offsetX": 0,
                "offsetY": 0,
                "blur": 10,
                "spread": 0,
                "color": "rgba(0, 0, 0, 0.5)"
            },
            "zIndex": 65,
            "materialType": "svg",
            "locked": false,
            "transition": {
                "effectType": "slide-up",
                "effectDuration": 1.3,
                "effectDelay": 0.2,
                "effectEasing": "ease-out",
                "effectEnabled": true
            },
            "hyperlink": "",
            "continuousAnimation": {
                "type": "none",
                "duration": 2,
                "delay": 0
            },
            "imgKey": "resources/shapes/5j9b0oqlp77r51ggbqxnzp.svg"
        },
        "displayName": "Material Item",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    }
},
                    Y = (0, p.useState)(!0),
                    D = Y[0],
                    I = Y[1],
                    W = (0, p.useMemo)(function () {
                        return (0, N.n)(L);
                    }, []),
                    V = W.hasEnvelope && W.preventScrollUntilOpened,
                    F = (0, p.useState)(L),
                    M = F[0],
                    B = F[1],
                    U = (0, p.useState)(0),
                    X = U[0],
                    K = U[1];
                (0, p.useEffect)(
                    function () {
                        var e = function () {
                            I(!0);
                            var e = parseInt(L.ROOT.props.width),
                                t = parseInt(L.ROOT.props.height),
                                n = X / e,
                                i = Math.max(t * n, 0.9 * window.innerHeight),
                                a = Object.entries(L).reduce(function (e, t) {
                                    var r = (0, o.A)(t, 2),
                                        i = r[0],
                                        a = r[1];
                                    if (!a.props) return (e[i] = a), e;
                                    var s = _(
                                        _({}, a.props),
                                        {},
                                        {
                                            top: a.props.top * n,
                                            left: a.props.left * n,
                                            width: a.props.width * n,
                                            height: a.props.height * n,
                                            fontSize: a.props.fontSize * n,
                                        }
                                    );
                                    return (e[i] = _(_({}, a), {}, { props: s })), e;
                                }, {}),
                                s = L.ROOT.props,
                                c = (s.editorViewportWidth, (0, r.A)(s, P));
                            (a.ROOT = _(_({}, L.ROOT), {}, { props: _(_({}, c), {}, { width: X, height: i }) })),
                                B(a),
                                setTimeout(function () {
                                    I(!1);
                                }, 1e3);
                        };
                        return (
                            window.addEventListener("resize", e),
                            e(),
                            function () {
                                return window.removeEventListener("resize", e);
                            }
                        );
                    },
                    [X]
                ),
                    (0, p.useEffect)(function () {
                        var e = function () {
                            var e = Math.round(0.55 * (0.9 * window.innerHeight));
                            e > 500 ? K(500) : K(e);
                        };
                        return (
                            e(),
                            window.addEventListener("resize", e),
                            function () {
                                return window.removeEventListener("resize", e);
                            }
                        );
                    }, []);
                var Q = "".concat(t.templateName, " - ").concat((0, S.g)(t.categoryId), " miễn ph\xed");
                return (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(v.bV, {
                            title: Q,
                            titleTemplate: "%s | CineLove",
                            defaultTitle: "CineLove",
                            description: "".concat(Q, " - Thiệp online tr\xean CineLove"),
                            canonical: i,
                            openGraph: {
                                type: "website",
                                url: i,
                                title: Q,
                                description: "".concat(Q, " - Thiệp online tr\xean CineLove"),
                                images: [
                                    {
                                        url: t.thumbnail || "/cinelove-default-thumbnail.jpg",
                                        width: 1200,
                                        height: 630,
                                        alt: Q,
                                    },
                                ],
                                siteName: "CineLove",
                            },
                            twitter: { handle: "@cinelove", site: "@cinelove", cardType: "summary_large_image" },
                        }),
                        (0, E.jsx)(m.A, {
                            containerWidth: X,
                            children: (0, E.jsx)(b.A, {
                                isTemplatePreview: !0,
                                device: "pc",
                                pageData: t,
                                shouldPreventScroll: V,
                                children: (0, E.jsxs)(k.Z, {
                                    isProcessing: D,
                                    className: "h-full",
                                    scrollSpeed: 0.08,
                                    initialDelay: 2e3,
                                    rootBackground: M.ROOT.props.backgroundColor,
                                    shouldPreventScroll: V,
                                    children: [
                                        D &&
                                            (0, E.jsx)("div", {
                                                className:
                                                    "absolute inset-0 bg-white z-50 flex items-center justify-center",
                                                children: (0, E.jsx)(h(), {
                                                    animationData: x,
                                                    loop: !0,
                                                    style: { width: 200, height: 200 },
                                                }),
                                            }),
                                        (0, E.jsx)(l.KE, {
                                            resolver: z.K6,
                                            enabled: !1,
                                            children: (0, E.jsx)(l.wI, { data: M }, M.ROOT.props.width),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, E.jsxs)("div", {
                            className: "fixed top-2 left-2 z-50",
                            children: [
                                !T &&
                                    !f &&
                                    (0, E.jsx)(y.Ay, {
                                        onClick: function () {
                                            return s.push("/editor-template/".concat(n));
                                        },
                                        children: "Chỉnh sửa mẫu n\xe0y",
                                    }),
                                !T &&
                                    f &&
                                    (0, E.jsx)(y.Ay, {
                                        onClick: function () {
                                            R(!0);
                                        },
                                        type: "primary",
                                        className:
                                            "bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:from-pink-600 hover:to-purple-700",
                                        children: "Đặt thiệp n\xe0y",
                                    }),
                                !T && (0, E.jsx)(O.A, { templateId: n, isBlock: !0, size: "medium" }),
                            ],
                        }),
                        f &&
                            (0, E.jsx)(A.A, {
                                open: C,
                                onCancel: function () {
                                    return R(!1);
                                },
                                templateId: n,
                                onSuccess: function () {
                                    console.log("Package selection completed successfully");
                                },
                            }),
                    ],
                });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                3634, 7884, 3433, 530, 6701, 888, 8433, 8513, 4938, 8511, 713, 3753, 3629, 241, 2517, 9942, 9897, 1385,
                5711, 289, 1285, 7141, 9026, 9923, 8470, 3301, 878, 8594, 3521, 4059, 9556, 8058, 5503, 3566, 9084, 501,
                1805, 6499, 8561, 8593, 8972, 7692, 7974, 916, 1210, 981, 4085, 4587, 456, 5958, 9271, 2900, 4356, 3587,
                7315, 8174, 7603, 8162, 7251, 1508, 4510, 5293, 9032, 700, 5675, 1078, 636, 6593, 8792,
            ],
            () => e((e.s = 62684))
        ),
            (_N_E = e.O());
    },
]);
