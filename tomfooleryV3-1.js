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
    sheets:{'gun':'data:image/jpeg;base64,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'},
    func:function(){
        // Add new resources.
        // Gun resource, a type of gear that can be used for hunting and obtained via blacksmiths.
        new G.Res({
            name:'gun',
            desc: 'pew',
            icon:[0,0,'gun'],
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
