const passiveSkills = {

  "hero_heals_all": {
    name: "勇者の鼓舞",
    description: "自身の攻撃後に、自分以外のパーティー全員のHPを3回復する。",
    trigger: "after_attack",
    execute: (attacker, party) => {
      party.forEach(member => {
        if (member.id !== attacker.id && member.hp > 0) {
          member.hp = Math.min(member.maxHp, member.hp + 3);
          console.log(`${member.name}のHPが3回復した！`);
        }
      });
    }
  }, // ← カンマを追加

  "yume_fujoshi_barrier": {
    name: "尊き妄想の守護",
    description: "パーティーに男性が2名以上いる場合、受けるダメージが0になる。",
    trigger: "before_damage",
    execute: (defender, attacker, party) => {
      const maleCount = party.filter(m => m.sex === "男" && m.hp > 0).length;
      if (maleCount >= 2) {
        console.log("魔導士(夢)は尊さに包まれている！ダメージを無効化した！");
        return 0;
      }
      return null;
    }
  }, // ← カンマを追加

  "healer_single_care": {
    name: "癒しの手札",
    description: "自身の攻撃後、パーティーの誰か1人のHPを10回復する。",
    trigger: "after_attack_manual",
    execute: (target) => {
      if (target && target.hp > 0) {
        target.hp = Math.min(target.maxHp, target.hp + 10);
        console.log(`${target.name}のHPが10回復した！`);
      }
    }
  }, // ← カンマを追加

  "butoka_last_resort": {
    name: "死地への渇望",
    description: "自身のHPが1/4以下の時、攻撃威力が3倍になり、攻撃後HPを全回復する。",
    trigger: "damage_and_after",
    execute: (attacker) => {
      const isPinch = attacker.hp <= (attacker.maxHp / 4);
      if (isPinch) {
        console.log("武闘家：死地への渇望が発動！威力が3倍になる！");
        return { multiplier: 3, healAfter: true };
      }
      return { multiplier: 1, healAfter: false };
    }
  }, // ← カンマを追加

  "silver_share_kindness": {
    name: "銀の分け合い",
    description: "自身のHPが半分以下の場合、自分を含めたパーティー全員のHPを3回復する。",
    trigger: "after_attack",
    execute: (attacker, party) => {
      if (attacker.hp <= (attacker.maxHp / 2)) {
        console.log("魔導士(銀)：お腹が空いたのでみんなでお裾分け！全員のHPを3回復！");
        party.forEach(member => {
          if (member.hp > 0) {
            member.hp = Math.min(member.maxHp, member.hp + 3);
          }
        });
      }
    }
  }, // ← カンマを追加

  "archer_kindness_echo": {
    name: "優しさの連鎖",
    description: "他人から回復を受けた時、自分以外の味方全員を同じ量だけ回復する。",
    trigger: "on_healed", 
    execute: (receiver, amount, party) => {
      console.log(`${receiver.name}の優しさが共鳴した！`);
      party.forEach(member => {
        if (member.id !== receiver.id && member.hp > 0) {
          member.hp = Math.min(member.maxHp, member.hp + amount);
          console.log(`${member.name}も ${amount} 回復した！`);
        }
      });
    }
  }, // ← カンマを追加

  "beast_tamer_auto_attack": {
    name: "霊獣の忠義",
    description: "自身が瀕死（戦闘不能含む）でも、味方が1人でも生存していれば、自身のターンに自動で5ダメージ与える。",
    trigger: "on_turn_start",
    execute: (attacker, enemy, party) => {
      const survivors = party.filter(m => m.id !== attacker.id && m.hp > 0);
      if (survivors.length > 0) {
        console.log("霊獣使いは倒れているが、霊獣が代わりに牙を剥く！");
        enemy.hp -= 5;
        return { message: "霊獣の追撃！ 5ダメージ！" };
      }
      return null;
    }
  }, // ← カンマを追加

  "villager_genki_power": {
    name: "元気な一般人",
    description: "自身のHPが半分以上の場合、自身の攻撃の威力が1.5倍になる。",
    trigger: "before_damage",
    execute: (attacker) => {
      if (attacker.hp >= (attacker.maxHp / 2)) {
        console.log("村人：元気いっぱいなので、いつもより力が湧いてくる！");
        return { multiplier: 1.5 };
      }
      return { multiplier: 1.0 };
    }
  }, // ← カンマを追加

  "royal_knight_guardian": {
    name: "騎士の矜持",
    description: "パーティーに魔法属性がいる場合、自身の防御と魔法防御が+30される。",
    trigger: "status_buff",
    execute: (self, party) => {
      const hasMage = party.some(m => m.id !== self.id && m.attribute === "魔法" && m.hp > 0);
      if (hasMage) {
        console.log("王騎士：魔法使いを守るため、守備を固める！");
        return { defBonus: 30, mdefBonus: 30 };
      }
      return { defBonus: 0, mdefBonus: 0 };
    }
  }, // ← カンマを追加

  "guerrilla_extra_turn": {
    name: "遊撃の極意",
    description: "クリティカル発生時、全員のターン終了後にもう一度攻撃できる。",
    trigger: "on_critical", 
    execute: (attacker) => {
      console.log("遊撃家：クリティカル！さらに次の行動を予約した！");
      return { extraAction: true };
    }
  }, // ← カンマを追加

  "miko_sacred_healing": {
    name: "神和ぎの祈り",
    description: "自身の攻撃後、パーティーの誰か1人のHPを10回復する。",
    trigger: "after_attack_manual",
    execute: (target) => {
      if (target && target.hp > 0) {
        target.hp = Math.min(target.maxHp, target.hp + 10);
        console.log(`${target.name}のHPが10回復した！`);
      }
    }
  }, // ← カンマを追加

  "magician_mixed_trick": {
    name: "イリュージョン・アタック",
    description: "自分以外の味方の攻撃時、物理攻撃力と魔法攻撃力を合算して計算する。",
    trigger: "calc_damage_override",
    execute: (attacker) => {
      const combinedPower = attacker.atk + attacker.matk;
      console.log(`手品師のトリック！ ${attacker.name}の攻撃力が ${combinedPower} に跳ね上がった！`);
      return combinedPower;
    }
  }, // ← カンマを追加

  "witch_love_drain": {
    name: "狂おしい親愛",
    description: "相手パーティーの生存者数×7だけ毎ターン回復する。",
    trigger: "enemy_turn_start",
    execute: (witch, party) => {
      const survivorCount = party.filter(m => m.hp > 0).length;
      const healAmount = survivorCount * 7;
      if (healAmount > 0) {
        witch.hp = Math.min(witch.maxHp, witch.hp + healAmount);
        return { heal: healAmount };
      }
      return null;
    }
  }
};
