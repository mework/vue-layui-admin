module.exports={
    lintOnSave:false,
    chainWebpack:config =>{
        config 
        .plugin('html')
        .tap(args=>{
            args[0].title='一个vue加layui的后台管理';
            return args;
        })
    }
}