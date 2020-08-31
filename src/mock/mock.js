// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const simulateData = function () {
  let data = []
  for (let i = 0; i < 9; i++) {
    let template  = {
        fileName: Random.name(), 
        fileSize: Random.natural() + 'kb',
        uploadTime: Random.date(), 
        pages: Random.natural() 
    }
    data.push(template )
  }

  return {
    data: data
  }
}

let data = {
    'template|4': [{
        'fileName|':'@string',
        'fileSize|1-2':'12',
        'color':'@color',
        'scanTime':'@date',
        'pages':'1',
        'resolutionRatio':'@integer'

    }]
}

let loginData = {
  'loginList':[{
    'username': 'wmy',
    'password': '000000'

  }]
}

let userData = {
  'users':[
    {'username':'w', 'password':'000000', 'id':1},
    {'username':'wmy', 'password':'111111', 'id':2},

  ]
}

let info = {
  'infoList':[
    {
        "fileName": "式样书", 
        "fileSize": "156kb",
        "color": "黑白",
        "scanTime": "2020-08-17", 
        "pages": "98"
    },
    {
        "fileName": "申请表", 
        "fileSize": "15kb",
        "color": "黑白",
        "scanTime": "2020-08-16", 
        "pages": "1"
    },
    {
        "fileName": "式样书", 
        "fileSize": "156kb",
        "color": "黑白",
        "scanTime": "2020-08-15", 
        "pages": "98"
    },
    {
        "fileName": "员工手册", 
        "fileSize": "45kb",
        "color": "黑白",
        "scanTime": "2020-08-14", 
        "pages": "23"
    },
    {
        "fileName": "员工手册", 
        "fileSize": "45kb",
        "color": "黑白",
        "scanTime": "2020-08-12", 
        "pages": "23"
    },
    {
        "fileName": "员工手册", 
        "fileSize": "45kb",
        "color": "黑白",
        "scanTime": "2020-08-25", 
        "pages": "23"
    }
]
}

Mock.mock('/myDocument', 'post', simulateData)
Mock.mock('/scanFile', 'post', data)
// Mock.mock('/login', 'post', loginData)
Mock.mock('/login', 'post', userData)
Mock.mock('/info', "post", info)