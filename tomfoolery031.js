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
        
        // Augment base data for Artisan.
        G.getDict('artisan').modes['make gun']={name:'Make guns',desc:'Use 3 [hard metal ingot]s to make 1 [gun].',req:{'gun smithing':true}, use:{'metal tools':1}};
        G.getDict('artisan').effects.push({type:'convert', from:{'hard metal ingot':3}, into:{'gun':1}, every:6,mode:'make gun'});
        
        // Augment base data for Hunter.
        G.getDict('hunter').modes['shoot']={name:'Shoot',desc:'Use [gun]s to shoot prey.',use:{'gun':1}};
        G.getDict('hunter').effects.push({type:'gather',context:'hunt',amount:7,max:9,mode:'shoot'});
        
        // Add new tech.
        new G.Tech({
           name:'gun smithing',
           desc:'[artisan]s can now make [gun]s. Unlocks a new mode for @[hunter].',
           icon:[9, 5],
           cost:{'insight':25},
           req:{'iron-working':true, 'bows':true}
        });
    }
});
