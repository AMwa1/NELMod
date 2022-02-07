G.AddData({
    name:'tomfoolery mod',
    author:'AM',
    desc:'A mod that engages in a high level of tomfoolery.',
    engineVersion:1,
    manifest:'ModManifest.js',
    requires:['Default dataset*'],
    func:function(){
        // Add new resources.
        new G.Res({
           name:'gun',
           desc: 'pew',
           icon:[5,5],
           displayUsed: true,
           category:'gear'
        });
        
        new G.Res({
           name:'ash',
           desc:'Ashes of people who were cremated. Produces some [faith].',
           icon:[12,8],
           partOf:'misc materials',
           category:'misc',
           tick:function(me,tick){
               var toSpoil = me.amount*0.01;
               var spent = G.lose(me.name, randomFloor(toSpoil), 'decay');
               G.pseudoGather(G.getRes('faith'), randomFloor(spent));
           };
        });
        
        // Augment base data for Artisan.
        G.getDict('blacksmith workshop').modes['make gun']={name:'Make guns',icon:[5,5],desc:'Use 3 [hard metal ingot]s to make 1 [gun].',req:{'gun smithing':true}, use:{'worker':1,'metal tools':1}};
        G.getDict('blacksmith workshop').effects.push({type:'convert', from:{'hard metal ingot':3}, into:{'gun':1}, every:6,mode:'make gun'});
        
        // Augment base data for Hunter.
        G.getDict('hunter').modes['shoot']={name:'Shoot',icon:[5,5],desc:'Use [gun]s to shoot prey.',use:{'worker':1,'gun':1}};
        G.getDict('hunter').effects.push({type:'gather',context:'hunt',amount:7,max:9,mode:'shoot'});
        
        // Augment base data for Firekeeper.
        G.getDict('firekeeper').modes['cremate']={name:'Cremate corpses',icon:[9,5],desc:'Turn [corpse]s into [ash]',use:{'worker':1,'fire pit':1}};
        G.getDict('firekeeper').effects.push({type:'convert',from:{'corpse':1}, into:{'ash':5}, every:7,mode:'cremate'});
        
        // Add new techs.
        new G.Tech({
           name:'gun smithing',
           desc:'[blacksmith workshop]s can now make [gun]s. Unlocks a new mode for @[hunter].',
           icon:[9, 5],
           cost:{'insight':50},
           req:{'iron-working':true, 'bows':true}
        });
        
        new G.Tech({
            name:'cremation',
            desc:'[firekeeper]s can now cremate [corpse]s, turning them into [ash].',
            icon:[8,3],
            cost:{'insight':25,'faith':2},
            req:{'burial':true, 'fire-making':true, 'fear of death':true}
        });
});
