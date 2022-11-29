class Pokemon {
    constructor(name,hp,atk){
        this.name=name;
        this.maxHp=hp;
        this.hp=hp;
        this.atk=atk;
        this.level=1
        this.type="normal"
        this.attackName="tackle"
    }
}

module.exports = Pokemon