namespace ChainOfResponsibility {
    abstract class AbstractLogger {
        public static INFO: number = 1;
        public static DEBUG: number = 2;
        public static ERROR: number = 3;

        protected level: number;

        //责任链中的下一个元素
        protected nextLogger: AbstractLogger;

        setNextLogger(nextLogger: AbstractLogger): void {
            this.nextLogger = nextLogger;
        }

        logMessage(level: number, message: string): void {
            if (this.level <= level) {
                this.write(message);
            }
            if (this.nextLogger != null) {
                this.nextLogger.logMessage(level, message);
            }
        }

        abstract write(message: string): void;

    }

    class ConsoleLogger extends AbstractLogger {

        constructor(level: number) {
            super();
            super.level = level;
        }
        write(message: string): void {
            console.log('Standard Console::Logger:' + message);
        }
    }
    class ErrorLogger extends AbstractLogger {

        constructor(level: number) {
            super();
            super.level = level;
        }
        write(message: string): void {
            console.log('Error Console::Logger:' + message);
        }
    }
    class FileLogger extends AbstractLogger {

        constructor(level: number) {
            super();
            super.level = level;
        }
        write(message: string): void {
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
}