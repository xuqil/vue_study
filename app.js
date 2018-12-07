//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
       age:30,
        x:0,
        y:0,
    },
    methods:{ //创建方法表
        add:function () {
            this.age++;
        },
        subtract:function () {
            this.age --;
        },
        adc:function (inc) {
            this.age += inc;
        },
        subc:function (dec) {
            this.age -= dec;
        },
        updateXY: function (envent) {
           this.x = envent.offsetX,
               this.y = envent.offsetY
        }
        }
});

/*
* el:element需要获取的元素，一定是html中的根容器元素
* data：用于数据的存储
* method：用于存储各种方法
* data-binding：给属性绑定值
 */