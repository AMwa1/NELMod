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
        // Nuke resource, kills everyone.
        new G.Res({
            name:'nuke',
            desc:'boom',
            icon:[5,4],
            category:'misc'
        });
        // Medicine resource, used by doctors to heal people.
        new G.Res({
            name:'medicine',
            desc:'Used by [doctor]s to heal people.',
            icon:[9,4],
            category:'misc'
        });
        
        // Add new units.
        // Scientist unit. Generates science.
        new G.Unit({
            name:'scientist',
            desc:'A person dedicated to science to guide your tribe. Generates [science].',
            icon:[6,4],
            cost:{},
            use:{'worker':1},
            upkeep:{},
            effects:[
                {type:'gather',what:{'science':0.12}},
                {type:'mult',value:1.07,req:{'wisdom rituals':'on'}}
            ],
            req:{'neverending quest for knowledge':true},
            category:'discovery',
            priority:7
        });
        // Doctor unit. A better healer.
        new G.Unit({
            name:'doctor',
            desc:'A person who dedicates their life to helping the sick and wounded through science. Uses [medicine] to heal [sick] and [wounded]. Far more efficent than healers.',
            icon:[9,5],
            cost:{},
            use:{'worker':1,'metal tools':1},
            upkeep:{},
            effects:[
                {type:'convert',from:{'sick':1,'medicine':1},into:{'adult':1},chance:2/3,every:1.8},
                {type:'convert',from:{'wounded':1,'medicine':2},into:{'adult':1},chance:3/4,every:2}
            ],
            req:{'medical study':true},
            category:'spiritual',
            priority:7
        });
        
        // Augment base data for Blacksmith Workshop to allow for gun smithing.
        G.getDict('blacksmith workshop').modes['make gun']={name:'Make guns',icon:[5,5],desc:'Use 3 [hard metal ingot]s to make 1 [gun].',req:{'gun smithing':true}, use:{'worker':1,'metal tools':1}};
        G.getDict('blacksmith workshop').effects.push({type:'convert', from:{'hard metal ingot':3}, into:{'gun':1}, every:6,mode:'make gun'});
        
        // Augment base data for Hunter to add shoot to hunt mode and other stuff.
        G.getDict('hunter').modes['shoot']={name:'Shoot',icon:[5,5],desc:'Use [gun]s to shoot prey.',use:{'worker':1,'gun':1}};
        G.getDict('hunter').effects.push({type:'gather',context:'hunt',amount:7,max:9,mode:'shoot'});
        G.getDict('hunter').effects.push({type:'mult',value:1.5,req:{'applying biology':true}});
        
        // Augment base data for Fisher.
        G.getDict('fisher').effects.push({type:'mult',value:1.5,req:{'applying biology':true}});
        
        // Augment base data for Gatherer.
        G.getDict('gatherer').effects.push({type:'mult',value:1.5,req:{'applying biology':true}});
        
        // Augment base data for Woodcutter to allow use of stone and metal tools, not just knapped tools.
        wipeAndGizmo('woodcutter');
        G.getDict('woodcutter').modes['cut wood']={name:'Cut Wood',icon:[0,9],desc:'Use [knapped tools] to cut down trees.',use:{'worker':1,'knapped tools':1}};
        G.getDict('woodcutter').modes['advanced cut wood']={name:'Advanced Cut Wood',icon:[1,9],desc:'Use [stone tools] to cut down trees.',use:{'worker':1,'stone tools':1},req:{'tool-making':true}};
        G.getDict('woodcutter').modes['advanceder cut wood']={name:'Better Advanced Cut Wood',icon:[2,9],desc:'Use [metal tools] to cut down trees.',use:{'worker':1,'metal tools':1},req:{'smelting':true}};
        G.getDict('woodcutter').effects.push({type:'gather',context:'chop',amount:1,max:1,mode:'cut wood'});
        G.getDict('woodcutter').effects.push({type:'gather',context:'chop',amount:2,max:2,mode:'advanced cut wood'});
        G.getDict('woodcutter').effects.push({type:'gather',context:'chop',amount:3,max:3,mode:'advanceder cut wood'});
        
        // Augment base data for Digger to allow use of better tools.
        wipeAndGizmo('digger');
        G.getDict('digger').modes['dig']={name:'Dig',icon:[0,9],desc:'Use [knapped tools] to dig.',use:{'worker':1,'knapped tools':1}};
        G.getDict('digger').modes['advanced dig']={name:'Advanced Dig',icon:[1,9],desc:'Use [stone tools] to dig.',use:{'worker':1,'stone tools':1},req:{'tool-making':true}};
        G.getDict('digger').modes['advanceder dig']={name:'Better Advanced Dig',icon:[2,9],desc:'Use [metal tools] to dig.',use:{'worker':1,'metal tools':1},req:{'smelting':true}};
        G.getDict('digger').effects.push({type:'gather',context:'dig',amount:1,max:1,mode:'dig'});
        G.getDict('digger').effects.push({type:'gather',context:'dig',amount:2,max:2,mode:'advanced dig'});
        G.getDict('digger').effects.push({type:'gather',context:'dig',amount:3,max:3,mode:'advanceder dig'});
        
        // Augment base data for Healer to allow for better healing as tech progresses.
        wipeAndGizmo('healer');
        G.getDict('healer').modes['heal']={name:'Heal',icon:[23,3],desc:'Use [knapped tools] and [herb]s to slowly heal sick and wounded people.',use:{'worker':1,'knapped tools':1}};
        G.getDict('healer').modes['better heal']={name:'Better Healing',icon:[9,5],desc:'Use [metal tools], [herb]s, [fruit], and [water] to heal sick and wounded people faster.',use:{'worker':1,'metal tools':1},req:{'smelting':true}};
        G.getDict('healer').modes['make medicine']={name:'Produce Medicine',icon:[6,4],desc:'Use [herb]s and other chemicals to make [medicine] for [doctor]s.',use:{'worker':1,'metal tools':1},req:{'medical study':true}};
        G.getDict('healer').effects.push({type:'convert',from:{'sick':1,'herb':2.5},into:{'adult':1},chance:3/16,every:5,mode:'heal'});
        G.getDict('healer').effects.push({type:'convert',from:{'wounded':1,'herb':2.5},into:{'adult':1},chance:1/8,every:4.5,mode:'heal'});
        G.getDict('healer').effects.push({type:'convert',from:{'sick':1,'herb':5,'fruit':1,'water':5},into:{'adult':1},chance:3/8,every:2.67});
        G.getDict('healer').effects.push({type:'convert',from:{'wounded':1,'herb':5,'fruit':1,'water':5},into:{'adult':1},chance:5/8,every:3.5});
        G.getDict('healer').effects.push({type:'convert',from:{'herb':5,'water':3,'science':1},into:{'medicine':1},every:3.5});
        
        // Add new techs.
        // Science tech, allows for use of un-impliented default resources; science and education.
        new G.Tech({
            name:'neverending quest for knowledge',
            desc:'The beginning of science and the neverending quest to understand everything. @Provides 15 [education] @Unlocks [scientist]',
            icon:[6,4],
            cost:{'insight':75},
            effects:[
                {type:'provide res',what:{'education':15}},
                {type:'show res',what:['science']}
            ],
            req:{'symbolism':true}
        });
        // Chemistry tech, allows for more science stuff.
        new G.Tech({
            name:'chemistry',
            desc:'The basic understanding of the stuff that makes up everything, and how they work and interact with other stuff.',
            icon:[6,4],
            cost:{'insight':5,'science':10},
            effects:[
                {type:'provide res',what:{'education':5}}
            ],
            req:{'neverending quest for knowledge':true}
        });
        // Physics tech, allows for more science stuff.
        new G.Tech({
            name:'physics',
            desc:'How things move, forces, and a lot of other stuff that the general population really doesn\'t feel like trying to understand.',
            icon:[6,4],
            cost:{'insight':10,'science':10},
            effects:[
                {type:'provide res',what:{'education':5}}
            ],
            req:{'neverending quest for knowledge':true}
        });
        // Biology tech, allows for more science stuff.
        new G.Tech({
            name:'biology',
            desc:'The science of living things, including plants gathered and the people of your tribe. Can be pretty gross at times, however.',
            icon:[6,4],
            cost:{'insight':5,'science':10},
            effects:[
                {type:'provide res',what:{'education':5}}
            ],
            req:{'neverending quest for knowledge':true}
        });
        // Gun smithing tech, allows blacksmiths to make guns.
        new G.Tech({
            name:'gun smithing',
            desc:'By using things like gunpowder and iron and putting them in a piece of metal with a trigger, you can create a pretty efficent weapon. @[blacksmith workshop]s can now make [gun]s. @Unlocks a new mode for [hunter].',
            icon:[9, 5],
            cost:{'insight':50,'science':7},
            req:{'iron-working':true, 'bows':true, 'physics':true, 'chemistry':true}
        });
        // Med School tech, allows for doctors, a better form of healers.
        new G.Tech({
            name:'medical study',
            desc:'While it\'s not the most exciting thing, it will definitely be better for your tribe when [doctor]s start treating your [sick] and [wounded] with an almost 100% chance to succeed. @Unlocks [doctor] @Unlocks new mode for [healer], which lets them make medicine for [doctor]s',
            icon:[6,4],
            cost:{'insight':15,'science':20},
            req:{'biology':true,'chemistry':true}
        });
        // Applying Biology tech, increases effectivness of gatherers, hunters, and fishermen.
        new G.Tech({
            name:'applying biology',
            desc:'Now that you know of biology, might as well put it to use. This tech increases the effectiveness of: @[hunter]@[gatherer]@[fisher]',
            icon:[6,4],
            cost:{'insight':20,'science':15},
            req:{'biology':true}
        });
    }
});
