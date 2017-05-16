// 这里就需要引入我们之前定义的base.js里面的参数文件了。
import fetch from './../base';


// 现在要做的就是定义一个方法咯.
export function fetchBook() {
    return fetch("static/template.json");
}