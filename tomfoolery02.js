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
           icon:[9,5],
           displayUsed: true,
           category:'gear'
        });
        
        // Add new tech.
        new G.Tech({
           name:'gun smithing',
           desc:'Blacksmiths can now make guns. Unlocks a new mode for @[hunter]s.',
           icon:[9, 5],
           cost:{'insight':25},
           req:{'iron-working':true, 'bows':true}
        });
    }
});
