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
            desc:'pew pew. [gun]s are highly efficent weapons that can be used for hunting.',
            icon:[9, 5, 'iconSheet'],
            turnToByContext:{},
            partOf:'gear'
        });
        /*
        // Augment base data.
        G.getDict('artisan').modes['make gun']={name:'Make guns',desc:'Use [hard metal ingot]s to make guns',req:{'gun making':true}, use:{'metal tools':1}};
        G.getDict('artisan').effects.push({type:'convert', from:{'hard metal ingot':3}, into:{'gun':1}, every:3,mode:'make gun'});

        G.getDict('hunter').modes['shoot']={name:'Shoot',desc:'Use [gun]s to shoot prey.',use:{'gun':1}};
        G.getDict('hunter').effects.push({type:'gather',context:'hunt',amount:7,max:9,mode:'shoot'});

        // Add new tech.
        new G.Tech({
            name:'gun making',
            desc:'@[artisan]s can now make [gun]s from [hard metal ingot]s. Unlocks new mode for @[hunter]s.',
            icon:[9, 5, 'iconSheet'],
            cost:{'insight':25},
            req:{'iron-working':true, 'bows':true}
        });
        */
    }
});
