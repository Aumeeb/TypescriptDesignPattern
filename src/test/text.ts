class EventWhichAnimal {
    name: string;

}
type PhysiologicalAction = (who: EventWhichAnimal) => void
class Observer {
    listener: Array<PhysiologicalAction>
    

}

class Chinchilla extends Observer {
    eatting = (who: EventWhichAnimal) => {
        console.log(who.name)
    }
    name: '毛丝鼠'
}
class Rabbit {

}


let observer = new Observer();

let chinchilla = new Chinchilla();
observer.listener.push(chinchilla.eatting({ name: 'maosis' }));


