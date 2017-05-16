/**
 * 这个文件夹，我们一般用来定义一些 通用的工具吧。
 * base顾名思义嘛，基础。这里也没什么好定义的。就定义一个之前那个axios方法吧。
 */

// 第一步还是一样。引入axios方法
import axios from 'axios';

// 这里输入一个我们定义的axios方法

export default function(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                resolve(res.data);
            }).catch(err => reject(err));
    });
}