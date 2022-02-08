G.AddData({
    name:'Default dataset',
    author:'AMwa1',
    desc:'A mod that engages in a high level of tomfoolery.',
    engineVersion:1,
    manifest:'ModManifest.js',
    func:function(){
        // Add new resources.
        new G.Res({
           name:'gun',
           desc: 'pew',
           icon:[5,5],
           displayUsed: true,
           category:'gear'
        });
        
        // Augment base data for Artisan.
        G.getDict('blacksmith workshop').modes['make gun']={name:'Make guns',icon:[5,5],desc:'Use 3 [hard metal ingot]s to make 1 [gun].',req:{'gun smithing':true}, use:{'worker':1,'metal tools':1}};
        G.getDict('blacksmith workshop').effects.push({type:'convert', from:{'hard metal ingot':3}, into:{'gun':1}, every:6,mode:'make gun'});
        
        // Augment base data for Hunter.
        G.getDict('hunter').modes['shoot']={name:'Shoot',icon:[5,5],desc:'Use [gun]s to shoot prey.',use:{'worker':1,'gun':1}};
        G.getDict('hunter').effects.push({type:'gather',context:'hunt',amount:7,max:9,mode:'shoot'});
        
        // Add new techs.
        new G.Tech({
           name:'gun smithing',
           desc:'[blacksmith workshop]s can now make [gun]s. Unlocks a new mode for @[hunter].',
           icon:[9, 5],
           cost:{'insight':50},
           req:{'iron-working':true, 'bows':true}
        });
});
