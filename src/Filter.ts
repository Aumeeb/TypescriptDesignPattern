namespace Filter {
    class HumanRace {
        private name: string;
        private gender: string;
        private maritalStatus: string;

        constructor(name: string, gender: string, maritalStatus: string) {
            this.name = name;
            this.gender = gender
            this.maritalStatus = maritalStatus
        }

        getName(): string {
            return this.name;
        }
        getGender(): string {
            return this.gender;
        }
        getMaritalStatus(): string {
            return this.maritalStatus;
        }
    }
    interface Criteria {
        meetCriteria(arr: Array<HumanRace>): Array<HumanRace>;
    }

    class CriteriaMale implements Criteria {
        meetCriteria(arr: HumanRace[]): HumanRace[] {
            var outArr = new Array<HumanRace>();
            arr.forEach((value) => {
                if (value.getGender() == 'Male')
                    outArr.push(value)
            })
            return outArr;
        }
    }

    class CriteriaFemale implements Criteria {
        meetCriteria(arr: HumanRace[]): HumanRace[] {
            var outArr = new Array<HumanRace>();
            arr.forEach((value) => {
                if (value.getGender() == 'Famale')
                    outArr.push(value)
            })
            return outArr;
        }
    }
    class CriteriaSingle implements Criteria {
        meetCriteria(arr: HumanRace[]): HumanRace[] {
            var outArr = new Array<HumanRace>();
            arr.forEach((value) => {
                if (value.getMaritalStatus() == 'Single')
                    outArr.push(value)
            })
            return outArr;
        }
    }
    class CriteriaSingleMale implements Criteria {
        criteriaSingle: CriteriaSingle;
        constructor(criteriaSingle: CriteriaSingle) {
            this.criteriaSingle = criteriaSingle
        }
        meetCriteria(arr: HumanRace[]): HumanRace[] {
            var singleArr = this.criteriaSingle.meetCriteria(arr)
            var outArr = new Array<HumanRace>();
            singleArr.forEach((value) => {
                if (value.getGender() == 'Male')
                    outArr.push(value)
            })
            return outArr;
        }

    }
    var humanRacelist = new Array<HumanRace>();
    humanRacelist.push(new HumanRace('LEA', 'Male', 'Single'))
    humanRacelist.push(new HumanRace('per', 'Male', 'Single'))
    humanRacelist.push(new HumanRace('zmn', 'Male', 'Married'))
    humanRacelist.push(new HumanRace('wjgm', 'Famale', 'Married'))
    humanRacelist.push(new HumanRace('jungb', 'Famale', 'Single'))
    humanRacelist.push(new HumanRace('qiub', 'Famale', 'Single'))
    humanRacelist.push(new HumanRace('cmaik', 'Famale', 'Single'))

    var criteriaMale = new CriteriaMale();
    var criteriaFemale = new CriteriaFemale();
    var criteriaSingle = new CriteriaSingle();
    var criteriaSingleMale = new CriteriaSingleMale(criteriaSingle);
    function printer(list: Array<HumanRace>) {
        list.forEach((value) => {
            console.log(value)
        })
    }
    // printer(criteriaMale.meetCriteria(humanRacelist));
    // printer(criteriaFemale.meetCriteria(humanRacelist));
    //printer(criteriaSingle.meetCriteria(humanRacelist));
    printer(criteriaSingleMale.meetCriteria(humanRacelist));
}

/**
 * 过滤器模式的要领在于 使用不同的类实现同一接口的过滤方法  多态使得每个类都有自己的过滤行为 最后组织代码结构,创建不同的实现类分别对同一个实体类属性过滤
 */