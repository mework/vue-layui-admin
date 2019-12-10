export default {
    data() {
        return {};
    },
    components: {},
    mounted() {
        layui.use('element',  ()=> {
            let element = layui.element;
            this.checkedLeft(layui.$);
        });
    },
    created() {
        
    },
    methods: {
        checkedLeft($){
            $('.router-link-active').parent().addClass('layui-this');
            $('.router-link-active').parents('.layui-nav-item').addClass('layui-nav-itemed');
        }
    },
};