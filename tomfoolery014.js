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
           desc: '[gun]s a highly efficent weapons that can be used for hunting.',
           //icon:[9,5,'iconSheet'],
           turnToByContext:{'decay':{'gun':1}},
           partOf:'gear'
        });
    }
});
