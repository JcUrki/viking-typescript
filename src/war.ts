import Saxon from "./saxon";
import Viking from "./viking";

class War {
    vikingArmy: Array<Viking>
    saxonArmy: Array<Saxon>

    constructor(){
        this.vikingArmy= []
        this.saxonArmy= []
    }

    addViking(viking: Viking){
        this.vikingArmy= [viking]
    }

    addSaxon(saxon: Saxon){
        this.saxonArmy= [saxon]
    }

    selectViking() {
        return this.getRandomWarriors(this.vikingArmy);
    }

    selectSaxon() {
        return this.getRandomWarriors(this.saxonArmy);
    }

    getRandomWarriors(array: Array<any>) {
        return Math.floor(Math.
            random() *array.length)
    }
    
    vikingAttack() {
        const chosenSaxon= this.selectSaxon()
        const chosenViking= this.selectViking()

        const message= this.saxonArmy[chosenSaxon].receiveDamage(this.vikingArmy[chosenViking].strength)

        if (this.saxonArmy[chosenSaxon].health<=0) {
            this.saxonArmy.splice(chosenSaxon)
        }

        return message;
    }

    saxonAttack() {
        const chosenSaxon= this.selectSaxon()
        const chosenViking= this.selectViking()

        const message= this.vikingArmy[chosenViking].receiveDamage(this.saxonArmy[chosenSaxon].strength)

        if (this.vikingArmy[chosenViking].health<=0) {
            this.vikingArmy.splice(chosenViking)
        }

        return message;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survive another day...'
        }
        return 'Vikings and Saxons are still in the thick of battle.'
    }
}  

export default War;