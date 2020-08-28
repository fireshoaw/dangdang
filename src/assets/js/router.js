import VueRouter from 'vue-router';
import first from '../../components/first.vue';
import index from '../../components/index.vue';
import mine from '../../components/mine.vue';
import car from '../../components/car.vue';
import details from '../../components/details.vue';
import goods from '../../components/goods.vue';
import select from '../../components/select.vue';
import comment from '../../components/comment.vue';
import recomment from '../../components/recomment.vue';
import type from '../../components/classify.vue'
import seckill from '../../components/Seckill.vue'
import seckillnav from '../../components/seckillnav.vue'
import brandkill from '../../components/brandkill.vue'
import pintuan from '../../components/pintuan.vue'
import login from '../../components/login.vue'
import regester from '../../components/regester.vue'
import loginQQ from '../../components/login_qq.vue'
import like from '../../components/like.vue'

export default 
    new VueRouter({
        routes:[
            {
                path:'/',
                component:first,
                children:[
                    {
                        path:'/index',
                        component:index
                    },{
                        path:'/type',
                        component:type
                    },{
                        path:'/like',
                        component:like
                    },{
                        path:'/mine',
                        component:mine
                    },
                ],
                redirect:'/index'
            },{
                path:'/car',
                component:car
            },{
                path:'/details',
                component:details,
                children:[
                    {
                        path:'/goods/:id',
                        component:goods
                    },{
                        path:'/select/:id',
                        component:select
                    },{
                        path:'/comment/:id',
                        component:comment
                    },{
                        path:'/recomment/:id',
                        component:recomment
                    },
                ],
                redirect:'/goods'
            },{
                path:'/login',
                component:login,
            },
            {
                path:'/regester',
                component:regester,
            },
            {
                path:'/loginQQ',
                component:loginQQ,
            },
            {
                path:'/seckillnav',
                component:seckillnav,
                children:[
                    {
                        path:'/seckill',
                        component:seckill,
                    },
                    {
                        path:'/brandkill',
                        component:brandkill,
                    },
                    {
                        path:'/pintuan',
                        component:pintuan,
                    }
                ],
                redirect:"/seckill"
            },{
                path:'/*',
                redirect:'/index'
            }
        ]
    })

