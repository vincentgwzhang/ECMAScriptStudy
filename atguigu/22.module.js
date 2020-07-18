/**
 * 
 * FILE : FILE1
 * export let school = '111';
 * export function cc() {
 * ...
 * }
 * 
 * 或者这么写：
 * function dd() {
 * }
 * 一切都正常的，但是在结尾的时候：
 * export {aaa, bbb};
 * 
 * 又或者这么写:
 * export default { // 此时， 前台要写成 m1.default.change();
 *  school: '',
 * change: function() {
 * }
 * }
 * 
 * Then in HTML"
 * 
 * <script type="module">
 *  import * as m1 from "<path>";
 * 或者
 * import {school as s1, teach} from '<path>';
 * 又或者
 * import {default as m3} from <path>; // 对于上面 export default 的 case
 * m1.cc()
 * 
 * 对于多个 import 语句的，也可以使用一个统一的 js, 在这个js 里面做同样的 import, 但是在html 处可以使用：
 * <script type="module" src='<path>'></script>
 * </script>
 */