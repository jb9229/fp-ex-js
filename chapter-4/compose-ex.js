import R from 'ramda';
import _ from 'lodash';
import { log } from './currytemplate-ex.js';

const str =
    'We can only see a short distance ahead but we can see plenty there that needs to be done';

const explode = (str) => str.split(/\s+/);

const count = (arr) => arr.length;

const countWords = R.compose(count, explode);

log(countWords(str));

// function compose() {
//   let args = arguments;
//   let start = args.length - 1;

//   return function() {
//     let i = start;
//     let result = args[start].apply(this, arguments);
//     while (i--)
//       result = args[i].call(this, result);

//     return result;
//   }
// }

const trim = (str) => str.replace(/\s*|\s*$/g, '');

const normalize = (str) => str.replace(/-/g, '');

const validLength = (param, str) => str.length === param;

const checkLengthSsn = _.partial(validLength, 9);

const cleanInput = R.compose(normalize, trim);
const isValidSsn = R.compose(checkLengthSsn, cleanInput);

log(cleanInput(' 333-33-3333 '));
log(isValidSsn(' 333-33-3333 '));
