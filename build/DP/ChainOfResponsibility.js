"use strict";
var ChainOfResponsibility;
(function (ChainOfResponsibility) {
    class AbstractLogger {
        setNextLogger(nextLogger) {
            this.nextLogger = nextLogger;
        }
        logMessage(level, message) {
            if (this.level <= level) {
                this.write(message);
            }
            if (this.nextLogger != null) {
                this.nextLogger.logMessage(level, message);
            }
        }
    }
    AbstractLogger.INFO = 1;
    AbstractLogger.DEBUG = 2;
    AbstractLogger.ERROR = 3;
    class ConsoleLogger extends AbstractLogger {
        constructor(level) {
            super();
            super.level = level;
        }
        write(message) {
            console.log('Standard Console::Logger:' + message);
        }
    }
    class ErrorLogger extends AbstractLogger {
        constructor(level) {
            super();
            super.level = level;
        }
        write(message) {
            console.log('Error Console::Logger:' + message);
        }
    }
    class FileLogger extends AbstractLogger {
        constructor(level) {
            super();
            super.level = level;
        }
        write(message) {
            console.log('File Console::Logger:' + message);
        }
    }
    var errorLogger = new ErrorLogger(AbstractLogger.ERROR);
    var fileLogger = new FileLogger(AbstractLogger.DEBUG);
    var consoleLogger = new ConsoleLogger(AbstractLogger.INFO);
    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);
    var loggerChain = errorLogger;
    loggerChain.logMessage(AbstractLogger.INFO, "This is an information.");
    loggerChain.logMessage(AbstractLogger.DEBUG, "This is an debug level information.");
    loggerChain.logMessage(AbstractLogger.ERROR, "This is an error information.");
})(ChainOfResponsibility || (ChainOfResponsibility = {}));
//# sourceMappingURL=ChainOfResponsibility.js.map