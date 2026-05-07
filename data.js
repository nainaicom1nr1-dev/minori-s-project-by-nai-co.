const characterMasterList = [
  {
    id: 0,
    name: "魔女",
    sex: "女",
    attribute: "魔法",
    maxHp: 400,
    hp: 400,
    atk: 12,
    matk: 57,
    def: 5,
    mdef: 15,
    spd: 11,
    hit: 95,
    avd: 6,
    crit: 6,
    img: "000majyo.png", // ←カンマを追加
    passiveSkill: "witch_love_drain" // ★魔女のスキルも追加
  },

  { 
    id: 1, 
    name: "勇者", 
    sex: "男",
    attribute: "物理",
    maxHp: 100, 
    hp: 100,
    atk: 15, 
    matk: 8, 
    def: 12, 
    mdef: 10, 
    spd: 12, 
    hit: 95, 
    avd: 5, 
    crit: 5, 
    img: "001yusha.png", // ←カンマを追加
    passiveSkill: "hero_heals_all",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "ミルクティー", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  },

  { 
    id: 2,
    name: "魔導士(夢)",
    sex: "女",
    attribute: "魔法",
    maxHp: 75,
    hp: 75,
    atk: 2,
    matk: 20,
    def: 4,
    mdef: 18,
    spd: 9,
    hit: 90,
    avd: 10,
    crit: 8,
    img: "002yume-madoshi.png", // ←カンマを追加
    passiveSkill: "yume_fujoshi_barrier",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "素敵な書", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  },

  { id: 3, name: "癒術師",
    sex: "女",
    attribute: "魔法",
    maxHp: 80,
    hp: 80,
    atk: 4,
    matk: 14,
    def: 7,
    mdef: 17,
    spd: 10,
    hit: 95,
    avd: 5,
    crit: 3,
    img: "003yujutsushi.png", // ←カンマを追加
    passiveSkill: "healer_single_care",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "癒しの杖", effect: "heal_target", value: 30, count: 50, description: "仲間1人のHPを30回復する" }
    ]
  },

  { id: 4,
    name: "武闘家",
    sex: "男",
    attribute: "物理",
    maxHp: 110,
    hp: 110,
    atk: 18,
    matk: 0,
    def: 11,
    mdef: 6,
    spd: 17,
    hit: 90,
    avd: 12,
    crit: 18,
    img: "004butoka.png", // ←カンマを追加
    passiveSkill: "butoka_last_resort",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "イベントの品", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  },

  { id: 5,
    name: "魔導士(銀)",
    sex: "男",
    attribute: "魔法",
    maxHp: 85,
    hp: 85,
    atk: 6,
    matk: 18,
    def: 9,
    mdef: 16,
    spd: 12,
    hit: 95,
    avd: 6,
    crit: 6,
    img: "005gin-madoshi.png", // ←カンマを追加
    passiveSkill: "silver_share_kindness",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "至福の1杯", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  },

  { id: 6,
    name: "弓術士",
    sex: "男",
    attribute: "物理",
    maxHp: 85,
    hp: 85,
    atk: 13,
    matk: 0,
    def: 8,
    mdef: 7,
    spd: 14,
    hit: 110,
    avd: 8,
    crit: 10,
    img: "006kyujutsushi.png", // ←カンマを追加
    passiveSkill: "archer_kindness_echo",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "嬉しい贈り物", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  },

  { id: 7,
    name: "霊獣使い",
    sex: "女",
    attribute: "物理",
    maxHp: 105,
    hp: 105,
    atk: 12,
    matk: 12,
    def: 11,
    mdef: 11,
    spd: 11,
    hit: 95,
    avd: 6,
    crit: 7,
    img: "007reijutsukai.png", // ←カンマを追加
    passiveSkill: "beast_tamer_auto_attack",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "スイーツ", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  },

  { id: 8,
    name: "村人",
    sex: "女",
    attribute: "物理",
    maxHp: 60,
    hp: 60,
    atk: 10,
    matk: 0,
    def: 5,
    mdef: 5,
    spd: 8,
    hit: 90,
    avd: 3,
    crit: 1,
    img: "008murabito.png", // ←カンマを追加
    passiveSkill: "villager_genki_power",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "弁当", effect: "heal_full", value: 0, count: 3, description: "HPを全回復する" }
    ]
  },

  { id: 9,
    name: "王騎士",
    sex: "男",
    attribute: "物理",
    maxHp: 130,
    hp: 130,
    atk: 14,
    matk: 2,
    def: 18,
    mdef: 8,
    spd: 6,
    hit: 90,
    avd: 2,
    crit: 3,
    img: "009okishi.png", // ←カンマを追加
    passiveSkill: "royal_knight_guardian",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "わたあめ", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  },

  { id: 10,
    name: "遊撃家",
    sex: "男",
    attribute: "物理",
    maxHp: 95,
    hp: 95,
    atk: 15,
    matk: 4,
    def: 11,
    mdef: 8,
    spd: 15,
    hit: 95,
    avd: 11,
    crit: 10,
    img: "010yugekika.png", // ←カンマを追加
    passiveSkill: "guerrilla_extra_turn",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "きょうのごはん", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  },

  { id: 11,
    name: "巫女",
    sex: "女",
    attribute: "魔法",
    maxHp: 75,
    hp: 75,
    atk: 5,
    matk: 15,
    def: 6,
    mdef: 19,
    spd: 10,
    hit: 100,
    avd: 7,
    crit: 4,
    img: "011miko.png", // ←カンマを追加
    passiveSkill: "miko_sacred_healing",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "神の杖", effect: "heal_target", value: 30, count: 50, description: "仲間1人のHPを30回復する" }
    ]
  },

  { id: 13,
    name: "手品師",
    sex: "男",
    attribute: "魔法",
    maxHp: 95,
    hp: 95,
    atk: 6,
    matk: 11,
    def: 5,
    mdef: 9,
    spd: 16,
    hit: 95,
    avd: 15,
    crit: 7,
    img: "013tejinashi.png", // ←カンマを追加
    passiveSkill: "magician_mixed_trick",
    items: [
      { name: "お茶", effect: "heal_fixed", value: 10, count: 10, description: "HPを10回復する" },
      { name: "差し入れ", effect: "heal_full", value: 0, count: 1, description: "HPを全回復する" }
    ]
  } // 最後の要素の後は、カンマがあってもなくてもOK
];
