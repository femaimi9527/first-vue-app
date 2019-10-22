/* eslint-disable no-undef */

Vue.filter("fix3", (val) => {
    if (!val || isNaN(val)) return 0
    return val.toFixed(2)
})

Vue.filter("fmtGender", (val) => {
    switch (val) {
        case 0: return "男"
        case 1: return "女"
        default: return "未知"
    }
})
