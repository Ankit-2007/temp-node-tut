//npm init  ( use for default package step by step just press enter)



// npm init -y (everything defalut)
const _ = require('lodash')
 const items =[1,[2,[3,[4]]]]
 const newItems =_.flattenDeep(items)
 console.log(newItems);