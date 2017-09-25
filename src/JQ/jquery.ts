class Jquery {
    rootjQuery: any;
    readyList: any;
    core_strundefined: any;
    location: Location;
    document: Document;
    docElem: HTMLElement;
    _jQuery: Jquery;
    _$: Jquery;
    class2type: Object= new Object;
    core_deletedIds: Array<object>= new  Array<object>();
    core_version = '2.0.3';
    core_concat = this.core_deletedIds.concat;
    core_push = this.core_deletedIds.push;
    core_slice = this.core_deletedIds.slice;
    core_indexOf = this.core_deletedIds.indexOf;
    core_toString = this.class2type.toString;
    core_hasOwn = this.class2type.hasOwnProperty
    core_trim = this.core_version.trim;

    core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    core_rnotwhite = /\S+/g;
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/

    rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/

    rmsPrefix = /^-ms-/
    rdashAlpha = /-([\da-z])/gi


    jquery: string = this.core_version;
    constructor(window: Window, undefined: undefined) {
        constructor : Jquery=Jquery;
        this.core_strundefined = typeof undefined;
        this.location = window.location;
        this.document = window.document;
        this.docElem = window.document.documentElement;
    }

    init(selector:string,context:string) {
        return this;
    }
    css() {

    }

}
window.jquery = new Jquery(window, undefined);
