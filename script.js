const perks = [
    { name: "Ученик",
	  category: "normal",
	  tier: 1,
	  order: 9,
	  icon:"icons/Student.png",
	  description:"Всё можно изучить, если прикладывать усилия. Персонаж с навыком 'Ученик' получает дополнительно <span class='green'>20%</span> опыта за бой. По достижении одиннадцатого уровня он получит дополнительный навык, а этот станет неактивным. При выборе происхождения 'Погонщики рабов' непрощённые получат дополнительный навык на седьмом уровне."
	},
	
    { name: "Здоровяк",
	  category: "normal",
	  tier: 1,
	  order: 3,
	  icon:"icons/Colossus.png",
	  description:"К бою готов! Увеличивает ОЗ на <span class='green'>25%</span>, что снижает шанс получить травму, когда персонажу наносят урон."
	},
	
    { name: "Быстрая адаптация",
	  category: "normal",	
	  tier: 1,
	  order: 1,
	  icon:"icons/Fast Adaptation.png",
	  description:"Подстройся под движения противника! Персонаж получает <span class='green'>+10%</span> к шансу на попадание за каждый промах по врагу. Бонус накапливается, пока удар не достигнет цели."
	},
	
    { name: "Следопыт",
	  category: "normal",
	  tier: 1,
	  order: 6,
	  icon:"icons/Path.png",
	  description:"Персонажу с этим навыком понадобится на <span class='green'>1</span> ОД меньше при передвижении по любой местности вплоть до минимума в 2 ОД за клетку, а затраты выносливости снижены в 2 раза. Смена высоты теперь не требует дополнительных затрат ОД."
	},
	
    { name: "Передышка",
	  category: "normal",
	  tier: 1,
	  order: 8,
	  icon:"icons/Recover.png",
	  description:"Становится доступным умение 'Передышка', позволяющее пропустить ход, чтобы снизить накопленную усталость на <span class='green'>50%</span>."
	},
	
	{ name: "Выдержка",
	  category: "normal",
	  tier: 2,
	  order: 14,
	  icon:"icons/Resilient.png",
	  description:"Один за всех и все за одного! Время действия любого отрицательного эффекта, имеющего продолжительность (отравлен, очарован), уменьшено на <span class='green'>1</span> ход. Эффекты, слабеющие со временем (гоблинский яд и т.п.), ослабляются до своего минимума с самого начала действия."
	},
	
    { name: "Сумки и пояса",
	  category: "normal",
	  tier: 1,
	  order: 5,
	  icon:"icons/Bags.png",
	  description:"Становятся доступны две дополнительные ячейки. Помещённые в поясные сумки вещи, за исключением двуручного оружия, больше не дают штрафов к выносливости. *Примечание: бинты, противоядие и гоблинский яд дают штраф к выносливости вопреки описанию."
	},
	
    { name: "В яблочко",
	  category: "normal",
	  tier: 2,
	  order: 11,
	  icon:"icons/Bull.png",
	  description:"Ровно промеж глаз! Штраф к точности попадания по цели вне прямой линии огня снижается с <span class='red'>75%</span> до <span class='red'>50%</span> для любого стрелкового и метательного оружия."
	},
	
    { name: "Твердолобый",
	  category: "normal",
	  tier: 2,
	  order: 15,
	  icon:"icons/Steel.png",
	  description:"Попадания по голове больше не вызывают критических повреждений у данного персонажа, что также снижает вероятность получения травм головы."
	},
	
    { name: "Девять жизней",
	  category: "normal",
	  tier: 1,
	  order: 4,
	  icon:"icons/Nine Lives.png",
	  description:"Один раз за бой, получив смертельный удар, персонаж выживет с парой ОЗ. Все отрицательные эффекты, наносящие урон (отравление, кровотечение), при этом излечиваются. Следующее попадание, вполне вероятно, всё же прикончит его, но улучшенная защита до следующего хода персонажа поможет пережить и это."
	},
	
	{ name: "Воодушевление",
	  category: "normal",
	  tier: 3,
	  order: 24,
	  icon:"icons/Rally.png",
	  description:"Становится доступным умение 'Воодушевление', с помощью которого можно повысить боевой дух ближайших союзников, если они нерешительны или вовсе бегут с поля боя. Чем выше решимость персонажа, который применяет умение, тем выше шанс на успех."
	},
	
	{ name: "Провокация",
	  category: "normal",
	  tier: 3,
	  order: 25,
	  icon:"icons/Taunt.png",
	  description:"Становится доступным умение 'Провокация', которое заставляет противников забыть о защите и броситься в атаку на персонажа, применившего умение, вместо более предпочтительных целей."
	},
	
    { name: "Адреналин",
	  category: "normal",
	  tier: 1,
	  order: 7,
	  icon:"icons/Adrenalin.png",
	  description:"Становится доступным умение 'Адреналин', позволяющее персонажу действовать первым на следующий ход, опережая противников. Почувствуй пульсацию адреналина в своих венах!"
	},
	
    { name: "Уклонение",
	  category: "normal",
	  tier: 2,
	  order: 12,
	  icon:"icons/Dodge.png",
	  description:"Слишком быстр для тебя! Персонаж получает <span class='green'>15%</span> от текущего значения инициативы в качестве бонуса к защите в ближнем и дальнем бою."
	},
	
    { name: "Сила воли",
	  category: "normal",
	  tier: 2,
	  order: 13,
	  icon:"icons/Mind.png",
	  description:"Железная воля не позволит сбиться с праведного пути. Решимость увеличивается на <span class='green'>25%</span>."
	},
	
    { name: "Одарённый",
	  category: "normal",
	  tier: 2,
	  order: 17,
	  icon:"icons/Gifted.png",
	  description:"Одарённому наёмнику живётся легче. Персонаж моментально получит уровень (не учитывающийся в счетчике уровней персонажа), позволяющий увеличить его характеристики на максимально возможное значение без учёта талантов."
	},
	
    { name: "Командная работа",
	  category: "normal",
	  tier: 3,
	  order: 18,
	  icon:"icons/Back.png",
	  description:"Один в поле не воин! Бонус к шансу попасть в ближнем бою удваивается с базовых +5% до <span class='green'>+10%</span> за каждого союзника, окружившего и отвлекающего цель."
	},
	
    { name: "Предвидение",
	  category: "normal",
	  tier: 3,
	  order: 19,
	  icon:"icons/Antisipation.png",
	  description:"С навыком 'Предвидение' персонаж, атакованный любым стрелковым оружием, получает бонус к защите в дальнем бою. За каждую клетку до стрелка защита увеличивается на <span class='green'>1 + 10%</span> от текущего значения защиты персонажа в дальнем бою, но не менее, чем на <span class='green'>+10</span> к защите в дальнем бою."
	},
	
    { name: "Мастер щита",
	  category: "normal",
	  tier: 3,
	  order: 20,
	  icon:"icons/Shield.png",
	  description:"Персонаж обучается обращению с щитом, чтобы отклонять удары при помощи щита, а не просто блокировать их. Защитные бонусы щита увеличиваются на <span class='green'>25%</span>. Эффект также распространяется на бонус от умения 'Стена щитов'. Кроме того, урон принимаемый щитом уменьшен на <span class='green'>50%</span> вплоть до минимума в 1 единицу прочности. Умение 'Отбрасывание' получает <span class='green'>+15%</span> к шансу на попадание."
	},
	
    { name: "Двужильный",
	  category: "normal",
	  tier: 3,
	  order: 21,
	  excludes: ["Ловкач"],
	  icon:"icons/Brawny.png",
	  description:"Штраф к выносливости и инициативе от надетых брони и шлема сокращается на <span class='green'>30%</span>."
	},
	
    { name: "Калечащие удары",
	  category: "normal",
	  tier: 1,
	  order: 2,
	  icon:"icons/Crippling.png",
	  description:"Покалечь врага! Снижает порог урона, необходимый для нанесения травм, на <span class='green'>33%</span> для ближних и дальних атак."
	},
	
    { name: "Палач",
	  category: "normal",
	  tier: 2,
	  order: 10,
	  icon:"icons/Execut.png",
	  description:"Наносите дополнительные <span class='green'>20%</span> урона по целям, страдающим от любой травмы, например, от сломанной руки."
	},
	
    { name: "Рокировка",
	  category: "normal",
	  tier: 3,
	  order: 23,
	  icon:"icons/Rotation.png",
	  description:"Становится доступным умение 'Рокировка', позволяющее двум персонажам поменяться местами, игнорируя зону контроля противника, при условии, что они оба не оглушены, не обездвижены или не выведены из строя другим способом."
	},
	
    { name: "Мастер булавы",
	  category: "mastery",
	  tier: 4,
	  order: 26,
	  icon:"icons/Mace.png",
	  description:"Персонаж становится мастером булавы и знает как поразить своих врагов, бронированных или нет. Удары булавой тратят на <span class='green'>25%</span> меньше выносливости. Оглушающие умения получают <span class='green'>100%</span> шанс срабатывания, если противник не обладает невосприимчивостью к оглушению. Буздыхан теперь не получает штрафа к попаданию при атаке целей, стоящих рядом."
	},
	
	{ name: "Мастер кистеня",
	  category: "mastery",
	  tier: 4,
	  order: 27,
	  icon:"icons/Flail.png",
	  description:"Персонаж становится мастером кистеня и знает как обходить щит противника. Удары кистенём тратят на <span class='green'>25%</span> меньше выносливости. При попадании в голову умением 'Отбивная' на <span class='green'>+10%</span> больше урона игнорирует броню. Умения 'Удар в голову' и 'Град' теперь игнорируют прибавку защиты от щитов. Шанс попасть умением 'Мельница' увеличивается на <span class='green'>+5%</span>."
	},
	
	{ name: "Мастер молота",
	  category: "mastery",
	  tier: 4,
	  order: 28,
	  icon:"icons/Hammer.png",
	  description:"Персонаж становится мастером молота и знает как сражаться с противниками в тяжёлой броне. Удары молотом тратят на <span class='green'>25%</span> меньше выносливости. Умения 'Пробить броню' и 'Расколоть броню' теперь наносят на <span class='green'>33%</span> больше урона броне. Шанс попасть умением 'Разрушение' увеличивается на <span class='green'>+5%</span>. Полекс теперь не получает штрафа к попаданию при атаке целей, стоящих рядом."
	},
	
	{ name: "Мастер топора",
	  category: "mastery",
	  tier: 4,
	  order: 29,
	  icon:"icons/Axe.png",
	  description:"Персонаж становится мастером топора и знает как крушить щиты. Удары топором тратят на <span class='green'>25%</span> меньше выносливости. Умение 'Раскол щита' наносит на <span class='green'>50%</span> больше урона щитам при использовании топоров. Шанс попасть умением 'Круговой удар' увеличивается на <span class='green'>+5%</span>. Секира теперь не получает штрафа к попаданию при атаке целей, стоящих рядом."
	},
	
	{ name: "Мастер тесака",
	  category: "mastery",
	  tier: 4,
	  order: 30,
	  icon:"icons/Cleaver.png",
	  description:"Персонаж становится мастером тесака и знает как наносить ужасные раны. Удары тесаком тратят на <span class='green'>25%</span> меньше выносливости. Урон от кровотечения, вызванного тесаками и кнутами, удвоен до <span class='green'>10</span> и <span class='green'>20</span> единиц за ход, соответственно. Умение 'Обезоружить' теперь имеет лишь <span class='red'>10%</span> штрафа к попаданию вместо исходных <span class='red'>20%</span>."
	},
	
	{ name: "Мастер меча",
	  category: "mastery",
	  tier: 4,
	  order: 31,
	  icon:"icons/Sword.png",
	  description:"Персонаж становится мастером искусства боя на мечах и знает как превратить ошибки противника в своё преимущество. Удары мечом тратят на <span class='green'>25%</span> меньше выносливости. Умение 'Контратака' теперь не имеет штрафа к попаданию. Умение 'Вспарывание' отныне требует нанесения на <span class='green'>50%</span> меньше повреждений для нанесения ранения. Умения 'Выпад' и 'Размах' вместо штрафа получают <span class='green'>+5%</span> к шансу на попадание."
	},
	
	{ name: "Мастер кинжала",
	  category: "mastery",
	  tier: 4,
	  order: 32,
	  icon:"icons/Dagger.png",
	  description:"Персонаж становится мастером быстрого и смертоносного кинжала. Удары кинжалом затрачивают на <span class='green'>25%</span> меньше выносливости. Умения 'Укол', 'Прокол', 'Убийственный удар', 'Пробитие' и 'Вертел' теперь тратят меньше ОД, что потенциально даёт возможность проводить дополнительную атаку в каждом ходу."
	},
	
	{ name: "Мастер древкового оружия",
	  category: "mastery",
	  tier: 4,
	  order: 33,
	  icon:"icons/Polearm.png",
	  description:"Персонаж становится мастером древкового оружия и знает как держать врага на расстоянии. Удары древковым оружием тратят на <span class='green'>25%</span> меньше выносливости. Стоимость умений древкового оружия теперь уменьшена до <span class='green'>5</span> ОД, кроме того при атаке целей, стоящих рядом, отсутствует штраф к попаданию."
	},
	
	{ name: "Мастер копья",
	  category: "mastery",
	  tier: 4,
	  order: 34,
	  icon:"icons/Spear.png",
	  description:"Персонаж становится мастером копья и знает как держать врага на расстоянии. Удары копьём тратят на <span class='green'>25%</span> меньше выносливости. Умение 'Стена копий' не перестаёт действовать в случае успешного подхода противника, а продолжает действовать при попытках подхода следующих противников. Рунка и боевая коса теперь не получают штрафа к попаданию при атаке целей, стоящих рядом."
	},
	
	{ name: "Мастер арбалета и пищали",
	  category: "mastery",
	  tier: 4,
	  order: 35,
	  icon:"icons/Crossbow.png",
	  description:"Станьте мастером арбалета и пищали, пригвоздите врага! Стрельба из арбалета и пищали тратит на <span class='green'>25%</span> меньше усталости. Дополнительные <span class='green'>20%</span> урона, наносимого арбалетом, теперь игнорируют броню (урон по ОЗ). Ручницы отныне требуют лишь <span class='green'>6</span> ОД на перезарядку и могут стрелять каждый ход вместо каждого второго."
	},
	
	{ name: "Мастер лука",
	  category: "mastery",
	  tier: 4,
	  order: 36,
	  icon:"icons/Bow.png",
	  description:"Персонаж становится мастером лука и знает как издалека осыпать врагов градом из стрел. Стрельба из лука тратит на <span class='green'>25%</span> меньше выносливости. Острота зрения и максимальная дальность стрельбы из лука увеличиваются на <span class='green'>+1</span>."
	},
	
	{ name: "Мастер метательного оружия",
	  category: "mastery",
	  tier: 4,
	  order: 37,
	  icon:"icons/Throw.png",
	  description:"Персонаж становится мастером метательного оружия и знает как изранить или даже убить врага раньше, чем тот успеет приблизиться. Броски метательного оружия тратят на <span class='green'>25%</span> меньше выносливости. Урон увеличивается на <span class='green'>30%</span> при броске с расстояния в две клетки. Урон увеличивается на <span class='green'>20%</span> при броске с расстояния в три клетки."
	},
	
    { name: "Изворотливый",	
	  category: "normal",
	  tier: 5,
	  order: 42,
	  icon:"icons/Footwork.png",
	  description:"Становится доступным умение 'Изворотливость', позволяющее покидать зону контроля противника без его атаки, при помощи обманных движений ногами."
	},
	
    { name: "Ловкость рук",
	  category: "normal",
	  tier: 2,
	  order: 16,
	  icon:"icons/Quick.png",
	  description:"Не это ли ищешь? Смена предметов в бою, за исключением щитов, не тратит ОД один раз за ход."
	},
	
    { name: "Упорный",
	  category: "normal",
	  tier: 3,
	  order: 22,
	  icon:"icons/Relentless.png",
	  description:"Не останавливайся! Что бы ни случилось, инициатива персонажа с навыком 'Упорный' уменьшается лишь на <span class='green'>50%</span> от накопившейся усталости, вместо <span class='red'>100%</span>. Кроме того, ожидание в бою больше не даёт штрафа к инициативе персонажа на следующий ход."
	},
	
    { name: "Подавление",
	  category: "normal",
	  tier: 5,
	  order: 39,
	  icon:"icons/Over.png",
	  description:"Персонаж обучается использовать преимущества высокой инициативы для подавления противников, лишая их концентрации и вынуждая совершать ошибки в нападении. При каждой атаке противника, успешной или нет, на него накладывается статус 'Подавлен', который снижает на <span class='green'>10%</span> навыки ближнего и дальнего боя на один ход. Действует только на противников, ещё не совершивших свой ход. Эффект суммируется с каждой атакой и может быть применён за один удар сразу к нескольким целям."
	},
	
    { name: "Одинокий волк",
	  category: "normal",
	  tier: 5,
	  order: 40,
	  icon:"icons/Lonewolf.png",
	  description:"Я лучше справляюсь в одиночку. При отсутствии союзника на расстоянии 3-х клеток персонаж получает бонус в <span class='green'>15%</span> к дальнему и ближнему бою, защите в ближнем и дальнем бою, а также к решимости."
	},
	
    { name: "Длина имеет значение",
	  category: "normal",
	  tier: 5,
	  order: 38,
	  icon:"icons/Reach.png",
	  description:"Персонаж обучается обращению с двуручным оружием, чтобы не подпускать врага, и, тем самым, не давать ему возможности нанести точный удар. Каждое попадание двуручным оружием увеличивает исходную защиту в ближнем бою на <span class='green'>+5</span>, вплоть до +25, пока не наступит следующий ход этого персонажа. При атаке нескольких целей одновременно будет добавлено по <span class='green'>+5</span> к защите в ближнем бою за каждого поражённого противника. Бонус теряется, если сменить оружие."
	},
	
    { name: "Горемыка",
	  category: "normal",
	  tier: 5,
	  order: 41,
	  icon:"icons/Underdog.png",
	  description:"Да ладно, я уже привык. Штрафы к защите при окружении врагами больше не действуют на данного персонажа. Эффект от навыка 'Командная работа' отменяется для атакующего, вместо этого шанс попадания рассчитывается по обычной механике."
	},
	
    { name: "Закалённый в боях",
	  category: "normal",
	  tier: 6,
	  order: 46,
	  icon:"icons/Battleforge.png",
	  description:"Стань специалистом по тяжёлой броне! Урон, наносимый доспехам персонажа, снижается на <span class='green'>%</span> от текущей суммарной прочности надетых брони и шлема. Чем крепче броня персонажа, тем больше преимущество. Не влияет на урон от психических атак или иных эффектов, но помогает избежать их."
	},
	
    { name: "Ловкач",
	  category: "normal",
	  tier: 6,
	  order: 45,
	  excludes: ["Двужильный"],
	  icon:"icons/Nimble.png",
	  description:"Стань специалистом по лёгкой броне! Благодаря проворности в уклонении и парировании, входящий урон по ОЗ сокращается на <span class='green'>60%</span>, но это уменьшение снижается с ростом штрафа к выносливости от доспехов и шлема, если он превышает <span class='red'>15</span> единиц. Чем легче броня и шлем персонажа, тем больше снижение урона. Навык 'Двужильный' не влияет на значение уменьшения урона. Не влияет на урон от психических атак и иных эффектов, но помогает их избежать."
	},
	
    { name: "Берсерк",
	  category: "normal",
	  tier: 6,
	  order: 43,
	  icon:"icons/Berserk.png",
	  description:"Один раз за ход, при убийстве врага, персонаж восстанавливает <span class='green'>4</span> ОД. Невозможно превысить максимальное количество ОД персонажа, а также восстановить больше 4 ОД за одну атаку."
	},
	
    { name: "Боевое безумие",
	  category: "normal",
	  tier: 7,
	  order: 49,
	  icon:"icons/Killing.png",
	  description:"Познай боевое безумие! Убийство врага увеличивает весь урон на <span class='green'>25%</span> на два хода. Эффект не суммируется, но следующее убийство восстанавливает длительность навыка."
	},
	
    { name: "Охотник за головами",
	  category: "normal",
	  tier: 6,
	  order: 44,
	  icon:"icons/Headhunter.png",
	  description:"Целься в голову! За каждое попадание по голове противника, персонаж получает <span class='green'>100%</span> шанс попадания в голову при следующем своём ударе. Следующий успешный удар сбрасывает действие навыка."
	},
	
    { name: "Устрашающий",
	  category: "normal",
	  tier: 7,
	  order: 47,
	  icon:"icons/Fearsome.png",
	  description:"Заставь их разбежаться в ужасе! Любая атака персонажа с навыком 'Устрашающий', наносящая хотя бы одну единицу урона ОЗ, инициирует проверку боевого духа противника, обычно происходящую только при нанесении 15 или более единиц урона, со штрафом к его решимости в <span class='red'>15%</span> от решимости этого персонажа."
	},
	
    { name: "Дуэлянт",
	  category: "normal",
	  tier: 7,
	  order: 48,
	  icon:"icons/Duelist.png",
	  description:"Стань единым целым со своим оружием и поражай уязвимые точки в защите противника! Если вторая рука персонажа с навыком 'Дуэлянт' свободна, держит баклер или сжимает метательное приспособление (например, ловчую сеть или фляжку с кислотой), то дополнительные <span class='green'>+25%</span> от наносимого урона будут игнорировать броню (урон по ОЗ). Не действует с двуручным оружием."
	},
	
    { name: "Непоколебимый",
	  category: "normal",
	  tier: 7,
	  order: 50,
	  icon:"icons/Indomitable.png",
	  description:"Становится доступным умение 'Непоколебимый', которое на один ход предоставляет: уменьшение входящего урона на <span class='green'>50%</span>; невосприимчивость к оглушению, отталкиванию или захвату."
	}
	
];

const reachCompatible = [
	"Мастер булавы",
	"Мастер кистеня",
	"Мастер молота",
	"Мастер топора",
	"Мастер тесака",
	"Мастер меча",
	"Мастер древкового оружия",
	"Мастер копья"
];

const result = document.getElementById("result");
let animationTimers = [];

document
.getElementById("generateButton")
.addEventListener("click", generateBuild);

document
.getElementById("chaosButton")
.addEventListener("click", generateChaosBuild);

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

function generateBuild() {
    const build = [];
    let masteryCount = 0;
    const maxPerks = 10;

    // Вспомогательная функция проверки конфликта Дуэлянт + стрелковое мастерство
    function hasRangedConflict(perk, currentBuild) {
    const allMasteries = currentBuild.filter(p => p.category === "mastery");
    const hasOnlyRangedMasteries = allMasteries.length > 0 && allMasteries.every(p =>
        p.name === "Мастер арбалета и пищали" || p.name === "Мастер лука"
    );

    if (perk.name === "Дуэлянт" && hasOnlyRangedMasteries) return true;
    if ((perk.name === "Мастер арбалета и пищали" || perk.name === "Мастер лука") &&
        currentBuild.some(p => p.name === "Дуэлянт") &&
        allMasteries.every(p =>
            p.name === "Мастер арбалета и пищали" || p.name === "Мастер лука" || p.name === "Дуэлянт"
        )
    ) return true;

    // Запрет Мастер лука + Мастер арбалета вместе
    if ((perk.name === "Мастер лука" && currentBuild.some(p => p.name === "Мастер арбалета и пищали")) ||
        (perk.name === "Мастер арбалета и пищали" && currentBuild.some(p => p.name === "Мастер лука"))) {
        return true;
    }

    return false;
}
    
    for (let slot = 1; slot <= maxPerks; slot++) {
        let candidates;
        
        if (slot >= 9) {
            candidates = perks.filter(perk => {
                if (build.includes(perk)) return false;
                if (perk.tier < 5) return false;
                if (perk.category === "mastery" && masteryCount >= 2) return false;
                if (perk.excludes) {
                    const hasExcluded = build.some(p => perk.excludes.includes(p.name));
                    if (hasExcluded) return false;
                }
                if (hasRangedConflict(perk, build)) return false;
                return true;
            });
        } else {
            const maxTier = Math.min(slot, 7);
            candidates = perks.filter(perk => {
                if (build.includes(perk)) return false;
                if (perk.tier > maxTier) return false;
                if (perk.category === "mastery" && masteryCount >= 2) return false;
                if (perk.excludes) {
                    const hasExcluded = build.some(p => perk.excludes.includes(p.name));
                    if (hasExcluded) return false;
                }
                if (hasRangedConflict(perk, build)) return false;
                return true;
            });
        }
        
        shuffle(candidates);
        if (candidates.length === 0) continue;
        const perk = candidates[0];
        build.push(perk);
        if (perk.category === "mastery") masteryCount++;
    }
    
    // Student
    if (build.some(p => p.name === "Ученик")) {
        let candidates = perks.filter(perk => {
            if (build.includes(perk)) return false;
            if (perk.tier < 5) return false;
            if (perk.category === "mastery" && masteryCount >= 2) return false;
            if (perk.excludes) {
                const hasExcluded = build.some(p => perk.excludes.includes(p.name));
                if (hasExcluded) return false;
            }
            if (hasRangedConflict(perk, build)) return false;
            return true;
        });
        shuffle(candidates);
        if (candidates.length > 0) {
            const perk = candidates[0];
            build.push(perk);
            if (perk.category === "mastery") masteryCount++;
        }
    }

    const hasBullseye = build.some(p => p.name === "В яблочко");
    if (hasBullseye) {
        const masteries = build.filter(p => p.category === "mastery");
        const hasAllowedMastery = masteries.some(p =>
            p.name === "Мастер арбалета и пищали" ||
            p.name === "Мастер метательного оружия" ||
            p.name === "Мастер лука"
        );
        if (masteries.length > 0 && !hasAllowedMastery) {
            masteryCount = replacePerk(build, "В яблочко", masteryCount);
        }
    }
    
    const hasReachAdvantage = build.some(p => p.name === "Длина имеет значение");
    if (hasReachAdvantage) {
        const masteries = build.filter(p => p.category === "mastery");
        const hasCompatibleMastery = masteries.some(m =>
            reachCompatible.includes(m.name)
        );
        if (masteries.length > 0 && !hasCompatibleMastery) {
            masteryCount = replacePerk(build, "Длина имеет значение", masteryCount);
        }
    }
    
    const targetCount = build.some(p => p.name === "Ученик") ? 11 : 10;
    while (build.length < targetCount) {
        const isLateSlot = build.length >= 9;
        let candidates = perks.filter(perk => {
            if (build.includes(perk)) return false;
            if (isLateSlot && perk.tier < 5) return false;
            if (perk.category === "mastery" && masteryCount >= 2) return false;
            if (perk.excludes) {
                const hasExcluded = build.some(p => perk.excludes.includes(p.name));
                if (hasExcluded) return false;
            }
            const excludedByOthers = build.some(p =>
                p.excludes && p.excludes.includes(perk.name)
            );
            if (excludedByOthers) return false;
            if (hasRangedConflict(perk, build)) return false;
            return true;
        });
        if (candidates.length === 0) break;
        shuffle(candidates);
        const perk = candidates[0];
        build.push(perk);
        if (perk.category === "mastery") masteryCount++;
    }
    
    build.sort((a, b) => a.order - b.order);
    draw(build);
}

function draw(build){

    animationTimers.forEach(clearTimeout);
	animationTimers = [];
	
	result.innerHTML="";

    build.forEach((perk,index)=>{

    const timer = setTimeout(()=>{

        const card=document.createElement("div");

        card.className="perk";
		
		if(perk.name==="Ученик")
        card.classList.add("student");

        const display = getPerkDisplay(perk);
card.innerHTML=`
    <img class="perk-icon" src="${perk.icon}">
    <div class="perk-title">${display.name}</div>
    <div class="tooltip">${display.description}</div>
`;

        result.appendChild(card);
		
		//new Audio("sounds/card.mp3").play();
		
				
		setTimeout(()=>{

		card.classList.add("show");
		

						},20);
		
	},index*250);
	
	animationTimers.push(timer);

});

}

function generateChaosBuild() {
    const pool = [...perks];
    shuffle(pool);
    const build = [];
    // Берём первые 10 случайных перков
    for (let i = 0; i < 10; i++) {
        build.push(pool[i]);
    }
    // Student даёт дополнительный перк
    if (build.some(p => p.name === "Ученик")) {
        for (const perk of pool) {
            if (!build.includes(perk)) {
                build.push(perk);
                break;
            }
        }
    }
    // Сортируем по расположению в дереве
    build.sort((a, b) => a.order - b.order);
    draw(build);
}

function replacePerk(build, perkName, masteryCount) {
    // Находим удаляемый перк
    const index = build.findIndex(p => p.name === perkName);
    if (index === -1) return masteryCount;
    const removed = build[index];
    // Если удаляем мастерство — освобождаем слот
    if (removed.category === "mastery")
        masteryCount--;
    build.splice(index, 1);
    // Ищем все подходящие замены
    let candidates = perks.filter(perk => {
        // Уже есть
        if (build.includes(perk))
            return false;
        // Не возвращаем тот же самый перк
        if (perk.name === perkName)
            return false;
        // Не превышаем лимит мастерств
        if (perk.category === "mastery" && masteryCount >= 2)
            return false;
        // Проверяем взаимоисключения
        if (perk.excludes) {
            const hasExcluded = build.some(p =>
                perk.excludes.includes(p.name)
            );
            if (hasExcluded)
                return false;
        }
        // Проверяем обратные взаимоисключения
        const excludedByOthers = build.some(p =>
            p.excludes && p.excludes.includes(perk.name)
        );
        if (excludedByOthers)
            return false;
        return true;
    });
    if (candidates.length === 0)
        return masteryCount;
    shuffle(candidates);
    const newPerk = candidates[0];
    build.push(newPerk);
    if (newPerk.category === "mastery")
        masteryCount++;
    return masteryCount;
}

const perkTranslations = {
    "Ученик": {
        en: {
            name: "Student",
            desc: "Everything can be learned with enough effort. This character gains an additional <span class='green'>20%</span> experience from battle. Upon reaching the eleventh level, they gain an extra perk, and this one becomes inactive. With the 'Manhunters' origin, the Indebted gain an extra perk at the seventh level."
        }
    },
    "Здоровяк": {
        en: {
            name: "Colossus",
            desc: "Ready for battle! Increases hitpoints by <span class='green'>25%</span>, reducing the chance of suffering an injury when hit."
        }
    },
    "Быстрая адаптация": {
        en: {
            name: "Fast Adaptation",
            desc: "Adapt to your opponent's movements! Gain <span class='green'>+10%</span> chance to hit with each attack that misses an opponent. Bonus resets upon a successful hit."
        }
    },
    "Следопыт": {
        en: {
            name: "Pathfinder",
            desc: "This character requires <span class='green'>1</span> less Action Point to move on any terrain down to a minimum of 2 AP per tile, and Fatigue costs are halved. Changing height levels no longer requires additional AP."
        }
    },
    "Передышка": {
        en: {
            name: "Recover",
            desc: "Unlocks the 'Recover' skill, which allows the character to skip a turn and reduce accumulated Fatigue by <span class='green'>50%</span>."
        }
    },
    "Выдержка": {
        en: {
            name: "Resilient",
            desc: "One for all and all for one! The duration of any negative effect with a finite duration (poisoned, charmed) is reduced by <span class='green'>1</span> turn. Effects that weaken over time (goblin poison, etc.) start at their weakest state."
        }
    },
    "Сумки и пояса": {
        en: {
            name: "Bags and Belts",
            desc: "Unlocks two additional bag slots. Items placed in bag slots no longer give a Fatigue penalty, except for two-handed weapons. *Note: bandages, antidote, and goblin poison still give a Fatigue penalty contrary to the description."
        }
    },
    "В яблочко": {
        en: {
            name: "Bullseye",
            desc: "Right between the eyes! The penalty to hit a target not in direct line of fire is reduced from <span class='red'>75%</span> to <span class='red'>50%</span> for any ranged and throwing weapon."
        }
    },
    "Твердолобый": {
        en: {
            name: "Steel Brow",
            desc: "Hits to the head no longer cause critical damage to this character, also reducing the chance of head injuries."
        }
    },
    "Девять жизней": {
        en: {
            name: "Nine Lives",
            desc: "Once per battle, upon receiving a fatal blow, the character survives with a few hitpoints. All negative damage-over-time effects (poison, bleeding) are cured. The next hit will probably finish them off, but improved defenses until their next turn may help survive that as well."
        }
    },
    "Воодушевление": {
        en: {
            name: "Rally the Troops",
            desc: "Unlocks the 'Rally the Troops' skill, which can raise the morale of nearby allies if they are wavering or fleeing. The higher the Resolve of the character using this skill, the higher the chance of success."
        }
    },
    "Провокация": {
        en: {
            name: "Taunt",
            desc: "Unlocks the 'Taunt' skill, which forces opponents to forget about defense and charge at the character who used the skill instead of more preferable targets."
        }
    },
    "Адреналин": {
        en: {
            name: "Adrenaline",
            desc: "Unlocks the 'Adrenaline' skill, allowing the character to act first next turn, ahead of opponents. Feel the pulse of adrenaline in your veins!"
        }
    },
    "Уклонение": {
        en: {
            name: "Dodge",
            desc: "Too fast for you! The character gains <span class='green'>15%</span> of their current Initiative as a bonus to Melee and Ranged Defense."
        }
    },
    "Сила воли": {
        en: {
            name: "Fortified Mind",
            desc: "An iron will keeps you on the righteous path. Resolve is increased by <span class='green'>25%</span>."
        }
    },
    "Одарённый": {
        en: {
            name: "Gifted",
            desc: "Life is easier for a gifted mercenary. The character immediately gains a level (not counting towards the character's level counter), allowing them to increase their attributes by the maximum possible value without considering talents."
        }
    },
    "Командная работа": {
        en: {
            name: "Backstabber",
            desc: "One is not a warrior alone in the field! The bonus to hit in melee is doubled from the base +5% to <span class='green'>+10%</span> for each ally surrounding and distracting the target."
        }
    },
    "Предвидение": {
        en: {
            name: "Anticipation",
            desc: "With the 'Anticipation' perk, when attacked by any ranged weapon, the character gains a bonus to Ranged Defense. For each tile away from the attacker, defense increases by <span class='green'>1 + 10%</span> of the character's current Ranged Defense value, but no less than <span class='green'>+10</span> Ranged Defense."
        }
    },
    "Мастер щита": {
        en: {
            name: "Shield Expert",
            desc: "The character learns to deflect blows with a shield rather than just blocking them. Shield defense bonuses are increased by <span class='green'>25%</span>. This effect also applies to the bonus from the 'Shieldwall' skill. Additionally, damage taken by the shield is reduced by <span class='green'>50%</span> down to a minimum of 1 durability point. The 'Shield Bash' skill gains <span class='green'>+15%</span> chance to hit."
        }
    },
    "Двужильный": {
        en: {
            name: "Brawny",
            desc: "The Fatigue and Initiative penalty from worn armor and helmet is reduced by <span class='green'>30%</span>."
        }
    },
    "Калечащие удары": {
        en: {
            name: "Crippling Strikes",
            desc: "Maim the enemy! Lowers the damage threshold required to inflict injuries by <span class='green'>33%</span> for melee and ranged attacks."
        }
    },
    "Палач": {
        en: {
            name: "Executioner",
            desc: "Deal additional <span class='green'>20%</span> damage against targets suffering from any injury, such as a broken arm."
        }
    },
    "Рокировка": {
        en: {
            name: "Rotation",
            desc: "Unlocks the 'Rotation' skill, allowing two characters to swap places while ignoring enemy zone of control, provided both are not stunned, rooted, or otherwise disabled."
        }
    },
    "Мастер булавы": {
        en: {
            name: "Mace Mastery",
            desc: "The character becomes a master of maces and knows how to strike enemies, armored or not. Mace attacks cost <span class='green'>25%</span> less Fatigue. Stun skills gain <span class='green'>100%</span> chance to apply if the target is not immune to stun. The two-handed mace no longer has a penalty to hit targets directly adjacent."
        }
    },
    "Мастер кистеня": {
        en: {
            name: "Flail Mastery",
            desc: "The character becomes a master of flails and knows how to bypass enemy shields. Flail attacks cost <span class='green'>25%</span> less Fatigue. Hitting the head with 'Lash' ignores <span class='green'>+10%</span> more armor. 'Head Hit' and 'Hail' skills now ignore shield defense bonuses. 'Thresh' gains <span class='green'>+5%</span> chance to hit."
        }
    },
    "Мастер молота": {
        en: {
            name: "Hammer Mastery",
            desc: "The character becomes a master of hammers and knows how to fight heavily armored opponents. Hammer attacks cost <span class='green'>25%</span> less Fatigue. 'Destroy Armor' and 'Shatter Armor' now deal <span class='green'>33%</span> more armor damage. 'Demolish Armor' gains <span class='green'>+5%</span> chance to hit. The polehammer no longer has a penalty to hit targets directly adjacent."
        }
    },
    "Мастер топора": {
        en: {
            name: "Axe Mastery",
            desc: "The character becomes a master of axes and knows how to shatter shields. Axe attacks cost <span class='green'>25%</span> less Fatigue. 'Split Shield' deals <span class='green'>50%</span> more shield damage when using axes. 'Round Swing' gains <span class='green'>+5%</span> chance to hit. The longaxe no longer has a penalty to hit targets directly adjacent."
        }
    },
    "Мастер тесака": {
        en: {
            name: "Cleaver Mastery",
            desc: "The character becomes a master of cleavers and knows how to inflict terrible wounds. Cleaver attacks cost <span class='green'>25%</span> less Fatigue. Bleeding damage caused by cleavers and whips is doubled to <span class='green'>10</span> and <span class='green'>20</span> per turn, respectively. 'Disarm' now has only a <span class='red'>10%</span> penalty to hit instead of the original <span class='red'>20%</span>."
        }
    },
    "Мастер меча": {
        en: {
            name: "Sword Mastery",
            desc: "The character becomes a master of sword fighting and knows how to turn the opponent's mistakes to their advantage. Sword attacks cost <span class='green'>25%</span> less Fatigue. 'Riposte' no longer has a penalty to hit. 'Gash' now requires <span class='green'>50%</span> less damage to inflict an injury. 'Lunge' and 'Swing' gain <span class='green'>+5%</span> chance to hit instead of a penalty."
        }
    },
    "Мастер кинжала": {
        en: {
            name: "Dagger Mastery",
            desc: "The character becomes a master of the fast and deadly dagger. Dagger attacks cost <span class='green'>25%</span> less Fatigue. 'Stab', 'Puncture', 'Deathblow', 'Prong', and 'Skewer' now cost less AP, potentially allowing an additional attack each turn."
        }
    },
    "Мастер древкового оружия": {
        en: {
            name: "Polearm Mastery",
            desc: "The character becomes a master of polearms and knows how to keep the enemy at a distance. Polearm attacks cost <span class='green'>25%</span> less Fatigue. Polearm skill AP costs are now reduced to <span class='green'>5</span> AP, and there is no penalty to hit targets directly adjacent."
        }
    },
    "Мастер копья": {
        en: {
            name: "Spear Mastery",
            desc: "The character becomes a master of spears and knows how to keep the enemy at a distance. Spear attacks cost <span class='green'>25%</span> less Fatigue. The 'Spearwall' skill does not expire on a successful approach by an opponent, continuing to work against subsequent approaching enemies. The warfork and warscythe no longer have a penalty to hit targets directly adjacent."
        }
    },
    "Мастер арбалета и пищали": {
        en: {
            name: "Crossbow & Firearm Mastery",
            desc: "Become a master of crossbows and firearms, nail the enemy down! Crossbow and firearm shots cost <span class='green'>25%</span> less Fatigue. An additional <span class='green'>20%</span> of damage dealt by crossbows now ignores armor (HP damage). Handgonnes now require only <span class='green'>6</span> AP to reload and can fire every turn instead of every other turn."
        }
    },
    "Мастер лука": {
        en: {
            name: "Bow Mastery",
            desc: "The character becomes a master of bows and knows how to rain arrows on enemies from afar. Bow shots cost <span class='green'>25%</span> less Fatigue. Sight range and maximum bow range are increased by <span class='green'>+1</span>."
        }
    },
    "Мастер метательного оружия": {
        en: {
            name: "Throwing Mastery",
            desc: "The character becomes a master of throwing weapons and knows how to wound or even kill the enemy before they can get close. Throwing attacks cost <span class='green'>25%</span> less Fatigue. Damage is increased by <span class='green'>30%</span> when attacking from two tiles away. Damage is increased by <span class='green'>20%</span> when attacking from three tiles away."
        }
    },
    "Изворотливый": {
        en: {
            name: "Footwork",
            desc: "Unlocks the 'Footwork' skill, allowing the character to leave an opponent's zone of control without triggering an attack, using deceptive foot movements."
        }
    },
    "Ловкость рук": {
        en: {
            name: "Quick Hands",
            desc: "Looking for this? Swapping items in battle, except for shields, does not cost AP once per turn."
        }
    },
    "Упорный": {
        en: {
            name: "Relentless",
            desc: "Don't stop! No matter what happens, the Initiative of a character with the 'Relentless' perk is only reduced by <span class='green'>50%</span> of accumulated Fatigue, instead of <span class='red'>100%</span>. Additionally, waiting in battle no longer penalizes the character's Initiative the following turn."
        }
    },
    "Подавление": {
        en: {
            name: "Overwhelm",
            desc: "The character learns to use high Initiative to overwhelm opponents, making them lose concentration and forcing errors in offense. With every attack against an opponent, hit or miss, the 'Overwhelmed' status is applied, reducing <span class='green'>10%</span> of Melee and Ranged Skill for one turn. Only affects opponents who haven't acted yet this round. Effect stacks with each attack and can be applied to multiple targets with one strike."
        }
    },
    "Одинокий волк": {
        en: {
            name: "Lone Wolf",
            desc: "I work better alone. When no ally is within 3 tiles, the character gains a bonus of <span class='green'>15%</span> to Ranged and Melee Skill, Melee and Ranged Defense, as well as Resolve."
        }
    },
    "Длина имеет значение": {
        en: {
            name: "Reach Advantage",
            desc: "The character learns to handle two-handed weapons to keep the enemy at bay, preventing them from landing accurate blows. Each hit with a two-handed weapon increases base Melee Defense by <span class='green'>+5</span>, up to +25, until this character's next turn. When attacking multiple targets at once, <span class='green'>+5</span> Melee Defense is added per hit enemy. Bonus is lost if the weapon is changed."
        }
    },
    "Горемыка": {
        en: {
            name: "Underdog",
            desc: "Come on, I'm used to it. This character no longer suffers defense penalties when surrounded by enemies. The effect of the 'Backstabber' perk is negated for the attacker, using standard hit chance calculation instead."
        }
    },
    "Закалённый в боях": {
        en: {
            name: "Battle Forged",
            desc: "Become a heavy armor specialist! Armor damage taken is reduced by a <span class='green'>percentage</span> of the current total armor value of the worn helmet and armor. The stronger the character's armor, the greater the advantage. Does not affect damage from mental attacks or other effects, but helps avoid them."
        }
    },
    "Ловкач": {
        en: {
            name: "Nimble",
            desc: "Become a light armor specialist! Thanks to agility in dodging and parrying, incoming hitpoint damage is reduced by up to <span class='green'>60%</span>, but this reduction decreases with increasing Fatigue penalty from armor and helmet above <span class='red'>15</span>. The lighter the character's armor, the greater the damage reduction. The 'Brawny' perk does not affect the damage reduction value. Does not affect damage from mental attacks and other effects, but helps avoid them."
        }
    },
    "Берсерк": {
        en: {
            name: "Berserk",
            desc: "Once per turn, upon killing an enemy, the character recovers <span class='green'>4</span> AP. Cannot exceed the character's maximum AP, nor recover more than 4 AP per attack."
        }
    },
    "Боевое безумие": {
        en: {
            name: "Killing Frenzy",
            desc: "Experience killing frenzy! Killing an enemy increases all damage by <span class='green'>25%</span> for two turns. The effect does not stack, but a subsequent kill refreshes the duration."
        }
    },
    "Охотник за головами": {
        en: {
            name: "Head Hunter",
            desc: "Aim for the head! Each hit to an opponent's head gives the character a <span class='green'>100%</span> chance to hit the head with their next attack. The next successful hit resets the effect."
        }
    },
    "Устрашающий": {
        en: {
            name: "Fearsome",
            desc: "Make them scatter in terror! Any attack by a character with the 'Fearsome' perk that deals at least 1 point of HP damage triggers a morale check on the opponent, usually only occurring when dealing 15+ damage, with a penalty to their Resolve of <span class='red'>15%</span> of this character's Resolve."
        }
    },
    "Дуэлянт": {
        en: {
            name: "Duelist",
            desc: "Become one with your weapon and strike vulnerable points in the opponent's defense! If the off-hand of a character with the 'Duelist' perk is free, holds a buckler, or holds a throwing tool (e.g., net or acid flask), an additional <span class='green'>+25%</span> of damage dealt ignores armor (HP damage). Does not work with two-handed weapons."
        }
    },
    "Непоколебимый": {
        en: {
            name: "Indomitable",
            desc: "Unlocks the 'Indomitable' skill, which for one turn provides: incoming damage reduced by <span class='green'>50%</span>; immunity to stun, knockback, or grapple."
        }
    }
};

// Текущий язык перков
let currentPerkLang = 'ru';

function getPerkDisplay(perk) {
    if (currentPerkLang === 'en' && perkTranslations[perk.name]) {
        return {
            name: perkTranslations[perk.name].en.name,
            description: perkTranslations[perk.name].en.desc
        };
    }
    return {
        name: perk.name,
        description: perk.description
    };
}

function setPerkLanguage(lang) {
    currentPerkLang = lang;
}



