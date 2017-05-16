// 这里就到了vuex这一关了。
/**
 * 我们要做的也很简单。这里就简单引入vue 和vuex咯。
 * 为了专业一点。我就把相关的方法都写到了module这个js文件里了。其实效果都是一样的。
 * 但是我们需要更有逼格一点。
 */
import Vuex from 'vuex';
import vue from 'vue';
import zone from './zone/module';

// 这一步很关键。使用vuex
vue.use(Vuex);

// 这里就是简单的调用vuex咯。
// 开启一个vuex仓库get - -!!
export default new Vuex.Store({
    modules: {
        zone
    }
})