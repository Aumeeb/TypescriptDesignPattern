"use strict";
var Filter;
(function (Filter) {
    class HumanRace {
        constructor(name, gender, maritalStatus) {
            this.name = name;
            this.gender = gender;
            this.maritalStatus = maritalStatus;
        }
        getName() {
            return this.name;
        }
        getGender() {
            return this.gender;
        }
        getMaritalStatus() {
            return this.maritalStatus;
        }
    }
    class CriteriaMale {
        meetCriteria(arr) {
            var outArr = new Array();
            arr.forEach((value) => {
                if (value.getGender() == 'Male')
                    outArr.push(value);
            });
            return outArr;
        }
    }
    class CriteriaFemale {
        meetCriteria(arr) {
            var outArr = new Array();
            arr.forEach((value) => {
                if (value.getGender() == 'Famale')
                    outArr.push(value);
            });
            return outArr;
        }
    }
    class CriteriaSingle {
        meetCriteria(arr) {
            var outArr = new Array();
            arr.forEach((value) => {
                if (value.getMaritalStatus() == 'Single')
                    outArr.push(value);
            });
            return outArr;
        }
    }
    class CriteriaSingleMale {
        constructor(criteriaSingle) {
            this.criteriaSingle = criteriaSingle;
        }
        meetCriteria(arr) {
            var singleArr = this.criteriaSingle.meetCriteria(arr);
            var outArr = new Array();
            singleArr.forEach((value) => {
                if (value.getGender() == 'Male')
                    outArr.push(value);
            });
            return outArr;
        }
    }
    var humanRacelist = new Array();
    humanRacelist.push(new HumanRace('LEA', 'Male', 'Single'));
    humanRacelist.push(new HumanRace('per', 'Male', 'Single'));
    humanRacelist.push(new HumanRace('zmn', 'Male', 'Married'));
    humanRacelist.push(new HumanRace('wjgm', 'Famale', 'Married'));
    humanRacelist.push(new HumanRace('jungb', 'Famale', 'Single'));
    humanRacelist.push(new HumanRace('qiub', 'Famale', 'Single'));
    humanRacelist.push(new HumanRace('cmaik', 'Famale', 'Single'));
    var criteriaMale = new CriteriaMale();
    var criteriaFemale = new CriteriaFemale();
    var criteriaSingle = new CriteriaSingle();
    var criteriaSingleMale = new CriteriaSingleMale(criteriaSingle);
    function printer(list) {
        list.forEach((value) => {
            console.log(value);
        });
    }
    printer(criteriaSingleMale.meetCriteria(humanRacelist));
})(Filter || (Filter = {}));
//# sourceMappingURL=Filter.js.map