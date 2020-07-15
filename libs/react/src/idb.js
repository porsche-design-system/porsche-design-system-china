var db = {}
var objectStore
// var request = window.indexedDB.open(databaseName, version);
var request = window.indexedDB.open('mockIDB', 1)

console.log('request', request)
request.onerror = event => console.log('error', event)
request.onsuccess = function(event) {
  db = request.result
} //可以拿到数据库对象
//如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded
request.onupgradeneeded = function(event) {
  db = event.target.result
  if (!db.objectStoreNames.contains('smamoClientId')) {
    //判断是否存在
    objectStore = db.createObjectStore('smamoClientId', { keyPath: 'id', autoIncrement: true }) //自动生成主键
  }
  //新建索引，参数索引名称、索引所在的属性、配置对象
  objectStore.createIndex('email', 'email', { unique: true })
}

const add = function(table, data) {
  const tb = table || 'smamoClientId'
  var request = db
    .transaction([tb], 'readwrite')
    .objectStore(tb)
    .add(data || { id: 1, val: '', email: 'dihui.wang@porsche.cn' })

  request.onsuccess = event => console.log(table, '数据写入成功')
  request.onerror = event => console.log('数据写入失败')
}
add()

const read = function(table, key, cb = () => '') {
  const tb = table || 'smamoClientId'
  var transaction = db.transaction([tb])
  var objectStore = transaction.objectStore(tb)
  var request = objectStore.get(key || 1)

  request.onerror = event => console.log('read事务失败')
  request.onsuccess = function(event) {
    if (request.result) {
      console.log('id: ' + request.result.id)
      console.log('val: ' + request.result.val)
      console.log('email: ' + request.result.email)
      cb(request.result)
    } else {
      console.log('read未获得数据记录')
    }
  }
}

const readAll = function() {
  var objectStore = db.transaction('smamoClientId').objectStore('smamoClientId')

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result
    if (cursor) {
      console.log('Id: ' + cursor.key)
      console.log('val: ' + cursor.value.val)
      console.log('Email: ' + cursor.value.email)
      cursor.continue()
    } else {
      console.log('没有更多数据了！')
    }
  }
}

const update = function(table, key, cb = () => '') {
  const tb = table || 'smamoClientId'
  var transaction = db.transaction([tb])
  var objectStore = transaction.objectStore(tb)
  var request = objectStore.put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' })

  request.onsuccess = event => console.log('数据更新成功', request.result, event)
  request.onerror = event => console.log('数据更新失败', request.result, event)
}

const remove = function() {
  var request = db
    .transaction(['smamoClientId'], 'readwrite')
    .objectStore('smamoClientId')
    .delete(1)

  request.onsuccess = event => console.log('数据删除成功', request.result, event)
  request.onerror = event => console.log('数据更新失败', request.result, event)
}

export default {
  request,
  read,
  update,
  remove,
}
// var transaction = db.transaction(['smamoClientId'], 'readonly')
// var store = transaction.objectStore('smamoClientId')
// var index = store.index('name')
// var request = index.get('李四')

// request.onsuccess = function(e) {
//   var result = e.target.result
//   if (result) {
//     // ...
//   } else {
//     // ...
//   }
// }
