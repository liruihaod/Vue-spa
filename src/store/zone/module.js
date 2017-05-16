// 这里就是我们要写东西的主文件了。还有点小激动啊 有木有！！！
/** 好了废话不多说，我们开始行动起来 get！
 * 
 * 这里简单说明一下vuex
 * vuex 差不多 由 state 和mutations 这两个是很重要的。
 * state 就是原始数据啦。我如果想要改变 state 就要用到同步的js方法 motations
 * 但是我要修改mutations 需要通过预先定义的actions 方法来实现。这样一来 思路是不是很清晰了？ 
 * ✔️！！ 没错。我如果需要改变state 步骤是这样的
 * action => mutations => state 
 *  好了就让我们开始行动 ✔️✔️✔️✔️✔️✔️
 */

// 这里引入我们之前定义的几个小组件(姑且称之为小组件 哈哈)
import * as type from "./type";
import * as api from './api';


// 这次我们弄简单一点咯,就只绑定这两个。
// 其实在小项目中用vuex往往会得不偿失。组件之间的通讯已经足够能解决问题。复杂的项目推荐使用这个。


// 当我们需要修改这些属性的时候 就需要用这个这个属性了。mutations

// 这里不用var 和let 定义 实现的有逼格。你懂的。虽然let可以 但是我就是不想用 哈哈~(其实从语法的角度来说。定义一个常量的适合才适用于const)
const mutations = {
    // mutations 实际上是一个数组。这时候我们之前定义一些type方法也就派上了用处了。

    // 查询结果
    [type.SET_SEARCH_LIST](state, payload) {
        state.queryResult = state.queryResult.concat(payload.item);
        console.log(state.queryResult);
    },

    // 查询关键词
    [type.UPDATE_SEARCH_LIST](state, payload) {
        state.name = payload;
    },

    // 清空关键词
    [type.CLEAR_SEARCH_LIST](state) {
        state.name = "";
        state.queryResult = [];
    },
};

//  这里是定义vue组件中的操作方法。用这个方法调用mutations中的方法,然后再用mutations中的方法 同步的去修改state中的方法

const actions = {
    // 因为方法都是一样的。其实这里就是mutations copy过来的然后修改下 就行了。
    // 查询结果
    [type.SEARCH_SEARCH_LIST](context) {
        api.fetchBook()
            .then(data => context.commit(type.SET_SEARCH_LIST, data))
    },
    [type.UPDATE_SEARCH_LIST](context, payload) {
        context.commit(type.UPDATE_SEARCH_LIST, payload)
    }
}
export default {
    state: {
        // 要查找的书名
        name: "随便取的一个名字",
        text: "测试图书",
        // 查询的结果
        queryResult: [],
    },
    mutations,
    actions,

}