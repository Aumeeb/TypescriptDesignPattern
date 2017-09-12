class Tool {
    clone<T>(source: T): T {
        var _obj: any = {};
        for (var key in source) {
            if (this.hasOwnProperty(key)) {
                var element = source[key];
                if (typeof element == 'string') {
                    Reflect.defineProperty(_obj, key, { value: element });
                }
                if (element instanceof Array) {
                    Reflect.defineProperty(_obj, key, { value: element });
                }
                
            }
        }
        Reflect.setPrototypeOf(_obj, Reflect.getPrototypeOf(this));
        return <T>_obj;
    }
}