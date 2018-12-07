//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:"小明",
        website: "https://www.baidu.com",
        websiteTag : "<a href='https://www.baidu.com'>百度一下</a>"
    },
    methods:{ //创建方法表
        greet: function (time) {  // 定义greet方法
            return 'Good ' + time + " " + this.name + "!";
        }
    }
});

/*
* el:element需要获取的元素，一定是html中的根容器元素
* data：用于数据的存储
* method：用于存储各种方法
 */