import * as R from "ramda";

import log4js from "log4js";

const logger = function (appendeStr, layoutStr, name, level, message) {
  const logger = new log4js.getLogger(name);
  log4js.configure({
    appenders: { out: { type: appendeStr, layout: { type: layoutStr } } },
    categories: { default: { appenders: ["out"], level: level } },
  });

  logger.error(message);
};

// const log = R.curry(logger);

// log("stdout", "basic", "FJS", "ERROR", "코드 402 에러가 발생 했습니다!");

export const log = R.curry(logger)("stdout", "basic", "FJS", "ERROR");

log("코드 402 에러가 발생 했습니다!");
