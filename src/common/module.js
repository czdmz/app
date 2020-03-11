// 第一种导出与引入
// export const abc='qinhao';
// export const qwe='name';
// export function fo(){
//     console.log("看看我能不能导出")
// };
// import {abc,qwe,fo} from 'common/module'
//  第二种导出与引入
// var abc='qinhao';
// var qwe='name';
// function fo(){
//     console.log("看看我能不能导出2")
// };
// export {abc,qwe,fo}
// import {abc,qwe} from 'common/module'
// 默认的导出方式
// export default 'qinhao';
// import 自己命名 from 'common/module'
// export default function fo(){
//     console.log('我是使用默认的导出方式')
// }
// import abc from 'common/module'
function fo(){
    console.log('我是使用默认的导出方式')
}
export default fo
// import abc from 'common/module'
