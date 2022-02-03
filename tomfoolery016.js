G.AddData({
    name:'tomfoolery mod',
    author:'AM',
    desc:'A mod that engages in a high level of tomfoolery.',
    engineVersion:1,
    requires:['Default dataset*'],
    func:function(){
        // Add new resource.
        new G.Res({
           name:'gun',
           desc: 'pew',
           icon:[9,5,'iconSheet'],
           displayUsed: true,
           category:'gear'
        });
    }
});
