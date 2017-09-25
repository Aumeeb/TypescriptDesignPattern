
namespace AbstractFactoryModel {
    interface IFactory {
        getUser(): IUser
    }

    class SQLFactory implements IFactory {
        getUser(): IUser {
            return new SQLUser()
        }
    }
    class AccessFactory implements IFactory {
        getUser(): IUser {
            return new AccessUser()
        }
    }

    interface IUser {
        getCount(): number
        getData(): Array<string | number>
        getName():string;
    }
    class SQLUser implements IUser {
        getName(): string {
            return `my name is SQL`
        }
        getData(): (string | number)[] {
            let strArray = new Array<string>()
            strArray.push('a')
            strArray.push('b')
            return strArray
        }
        getCount(): number {
            return 1
        }
    }
    class AccessUser implements IUser {
        getName(): string {
            return `my name is Access`
        }
        getCount(): number {
            return 2
        }
        getData(): (string | number)[] {
            let numArray = new Array<number>()
            numArray.push(1)
            numArray.push(2)

            return numArray
        }
    }

    class Factory {
        Database: string = 'access'

        createIFactory(): IFactory {
            switch (this.Database) {
                case 'sql':
                    return new SQLFactory();
                case 'access':
                    return new AccessFactory();
                default:
                    return new SQLFactory();
            }
        }
    }

    var user=  new Factory().createIFactory().getUser()
    console.log(user.getName())

}