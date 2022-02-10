function wipeAndGizmo(unit){
    G.getDict(unit).use={};
    G.getDict(unit).staff={};
    G.getDict(unit).gizmos=true;
}

G.AddData({
    name:'tomfoolery',
    author:'AMwa1',
    desc:'A mod that engages in a high level of tomfoolery.',
    engineVersion:1,
    manifest:'ModManifest.js',
    requires:['Default dataset*'],
    func:function(){
        // Add new resources.
        // Gun resource, a type of gear that can be used for hunting and obtained via blacksmiths.
        new G.Res({
           name:'gun',
           desc: 'pew',
           icon:[5,5],
           displayUsed: true,
           category:'gear'
        });
        
        // Augment base data for Blacksmith Workshop to allow for gun smithing.
        G.getDict('blacksmith workshop').modes['make gun']={name:'Make guns',icon:[5,5],desc:'Use 3 [hard metal ingot]s to make 1 [gun].',req:{'gun smithing':true}, use:{'worker':1,'metal tools':1}};
        G.getDict('blacksmith workshop').effects.push({type:'convert', from:{'hard metal ingot':3}, into:{'gun':1}, every:6,mode:'make gun'});
        
        // Augment base data for Hunter to add shoot to hunt mode.
        G.getDict('hunter').modes['shoot']={name:'Shoot',icon:[5,5],desc:'Use [gun]s to shoot prey.',use:{'worker':1,'gun':1}};
        G.getDict('hunter').effects.push({type:'gather',context:'hunt',amount:7,max:9,mode:'shoot'});
        
        // Augment base data for Woodcutter to allow use of stone and metal tools, not just knapped tools.
        wipeAndGizmo('woodcutter');
        G.getDict('woodcutter').modes['cut wood']={name:'Cut Wood',icon:[0,9],desc:'Use [knapped tools] to cut down trees.',use:{'worker':1,'knapped tools':1}};
        G.getDict('woodcutter').modes['advanced cut wood']={name:'Advanced Cut Wood',icon:[1,9],desc:'Use [stone tools] to cut down trees.',use:{'worker':1,'stone tools':1},req:{'tool-making':true}};
        G.getDict('woodcutter').modes['advanceder cut wood']={name:'Better Advanced Cut Wood',icon:[2,9],desc:'Use [metal tools] to cut down trees.',use:{'worker':1,'metal tools':1},req:{'smelting':true}};
        G.getDict('woodcutter').effects.push({type:'gather',context:'chop',amount:1,max:1,mode:'cut wood'});
        G.getDict('woodcutter').effects.push({type:'gather',context:'chop',amount:2,max:2,mode:'advanced cut wood'});
        G.getDict('woodcutter').effects.push({type:'gather',context:'chop',amount:3,max:3,mode:'advanceder cut wood'});
        
        // Add new techs.
        // Gun smithing tech, allows blacksmiths to make guns.
        new G.Tech({
           name:'gun smithing',
           desc:'[blacksmith workshop]s can now make [gun]s. Unlocks a new mode for @[hunter].',
           icon:[9, 5],
           cost:{'insight':50},
           req:{'iron-working':true, 'bows':true}
        });
    } 
});
