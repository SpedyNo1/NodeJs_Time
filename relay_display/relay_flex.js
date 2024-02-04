//Variable {time(Text),measurementpoint(text,int),pHValue(float),TempValue(float)}

const relay_flex = (d1, d2, d3, d4, s1, s2, s3, s4) => {
    let c1 = [];
    let c2 = [];
    let c3 = [];
    let c4 = [];
    if (s1 == 1) {
        c1 = ["#1ac906", "ON"]
    } else if (s1 == 0) {
        c1 = ["#c90606", "OFF"]
    } else {
        c1 = ["#d9d4d4", "?"]
    }
    if (s2 == 1) {
        c2 = ["#1ac906", "ON"]
    } else if (s2 == 0) {
        c2 = ["#c90606", "OFF"]
    } else {
        c2 = ["#d9d4d4", "?"]
    }
    if (s3 == 1) {
        c3 = ["#1ac906", "ON"]
    } else if (s3 == 0) {
        c3 = ["#c90606", "OFF"]
    } else {
        c3 = ["#d9d4d4", "?"]
    }
    if (s4 == 1) {
        c4 = ["#1ac906", "ON"]
    } else if (s4 == 0) {
        c4 = ["#c90606", "OFF"]
    } else {
        c4 = ["#d9d4d4", "?"]
    }
    const relay_flex = {
        "type": "bubble",
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "Relay Status",
                    "size": "xl",
                    "color": "#262226",
                    "weight": "bold",
                    "contents": [],
                    "align": "center"
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": "Number",
                            "size": "lg",
                            "color": "#09295A",
                            "weight": "bold"
                        },
                        {
                            "type": "text",
                            "text": "Status",
                            "align": "end",
                            "size": "lg",
                            "color": "#09295A",
                            "weight": "bold"
                        }
                    ],
                    "margin": "10px"
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": d1,
                            "size": "md",
                            "color": c1[0],
                            "weight": "bold",
                            "offsetStart": "34px"
                        },
                        {
                            "type": "text",
                            "text": c1[1],
                            "align": "end",
                            "size": "md",
                            "color": c1[0],
                            "weight": "bold",
                            "offsetEnd": "10px"
                        }
                    ],
                    "margin": "10px"
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": d2,
                            "size": "md",
                            "color": c2[0],
                            "weight": "bold",
                            "offsetStart": "34px"
                        },
                        {
                            "type": "text",
                            "text": c2[1],
                            "align": "end",
                            "size": "md",
                            "color": c2[0],
                            "weight": "bold",
                            "offsetEnd": "10px"
                        }
                    ],
                    "margin": "10px"
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": d3,
                            "size": "md",
                            "color": c3[0],
                            "weight": "bold",
                            "offsetStart": "34px"
                        },
                        {
                            "type": "text",
                            "text": c3[1],
                            "align": "end",
                            "size": "md",
                            "color": c3[0],
                            "offsetEnd": "10px",
                            "weight": "bold"
                        }
                    ],
                    "margin": "10px"
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": d4,
                            "size": "md",
                            "color": c4[0],
                            "weight": "bold",
                            "offsetStart": "34px"
                        },
                        {
                            "type": "text",
                            "text": c4[1],
                            "align": "end",
                            "size": "md",
                            "color": c4[0],
                            "weight": "bold",
                            "offsetEnd": "10px"
                        }
                    ],
                    "margin": "10px"
                },
                {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                        {
                            "type": "text",
                            "text": "Details:",
                            "flex": 0
                        },
                        {
                            "type": "text",
                            "text": "Demo ",
                            "margin": "sm",
                            "size": "sm",
                            "color": "#04be8c"
                        }
                    ],
                    "paddingTop": "15px"
                }
            ]
        }
    }
    return relay_flex;
};
module.exports = relay_flex;

