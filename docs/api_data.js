define({ "api": [
  {
    "type": "post",
    "url": "/api/address",
    "title": "添加收货地址",
    "name": "_address_add_",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>区.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>街道.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮编.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "0"
            ],
            "optional": false,
            "field": "isDefault",
            "description": "<p>是否默认 1-默认,0-否.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address/add"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "delete",
    "url": "/api/address",
    "title": "删除收货地址",
    "name": "_address_delete_",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>收货地址id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/api/address/detail",
    "title": "根据id获取收货地址详情",
    "name": "_address_detail_",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>收货地址id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address/detail"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/api/address/list",
    "title": "获取收货地址列表",
    "name": "_address_list_",
    "group": "Address",
    "sampleRequest": [
      {
        "url": "/api/address/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "put",
    "url": "/api/address",
    "title": "修改收货地址",
    "name": "_address_update_",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>收货地址id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>区.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>街道.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮编.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "0"
            ],
            "optional": false,
            "field": "isDefault",
            "description": "<p>是否默认.1-默认,0-否.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/address"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "/api/cart",
    "title": "添加商品至购物车",
    "name": "AddCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gid",
            "description": "<p>商品id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "num",
            "description": "<p>商品数量,不能超过库存;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "/api/cart/list",
    "title": "获取购物车列表",
    "name": "CartList",
    "group": "Cart",
    "sampleRequest": [
      {
        "url": "/api/cart/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "put",
    "url": "/api/cart/decrease",
    "title": "购物车减少商品数量",
    "description": "<p>减少商品数量，前台注意约束num，商品数量&gt;=1</p>",
    "name": "DecreaseCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>购物车条目id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-库存MAX",
            "optional": false,
            "field": "num",
            "description": "<p>商品数量;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart/decrease"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "delete",
    "url": "/api/cart",
    "title": "购物车删除商品",
    "name": "DeleteCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>购物车条目id;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "put",
    "url": "/api/cart/increase",
    "title": "购物车增加商品数量",
    "description": "<p>增加商品数量，后台查询库存，注意提示库存不足</p>",
    "name": "IncreaseCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>购物车条目id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gid",
            "description": "<p>商品id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-库存MAX",
            "optional": false,
            "field": "num",
            "description": "<p>商品数量;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/cart/increase"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "/api/category/sub",
    "title": "获取子级分类",
    "name": "category_sub",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pId",
            "description": "<p>父级分类id。注：获取一级分类pId = 1，获取根分类pId = 0;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/category/sub"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/goods/detail",
    "title": "获取商品详情",
    "name": "GoodsDetail",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/goods/detail"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/goods.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/api/goods/list",
    "title": "获取商品列表",
    "description": "<p>具备商品分页功能，3个分类id参数至多能传1个，默认按照商品创建时间升序排序</p>",
    "name": "GoodsList_______",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "4",
            "description": "<p>一个页有多少个商品;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageIndex",
            "defaultValue": "1",
            "description": "<p>第几页;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_1st",
            "description": "<p>一级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_2nd",
            "description": "<p>二级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_3rd",
            "description": "<p>三级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ASC\"",
              "\"DESC\""
            ],
            "optional": true,
            "field": "sortByPrice",
            "description": "<p>按照价格排序，从小到大-ASC,从大到小-DESC;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "goods",
            "description": "<p>商品数组.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>商品总数.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/goods/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/goods.js",
    "groupTitle": "Goods"
  },
  {
    "type": "post",
    "url": "/api/order/create",
    "title": "提交订单->生成订单",
    "description": "<p>在确认订单页面，提交订单按钮意味着将购物车中的商品转移到订单中，生成新的订单，称之为下单操作</p>",
    "name": "CreateOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payment",
            "description": "<p>支付金额,小数点至2位;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "addressId",
            "description": "<p>收货地址id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "goodsList",
            "description": "<p>商品数组,包含每一个商品的id,数量，例：[{id:15,num:1},{id:16,num:2}];</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goodsList.id",
            "description": "<p>商品id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goodsList.num",
            "description": "<p>商品数量;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/order/create"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/order/list",
    "title": "获取订单列表",
    "description": "<p>本账户uid中的订单列表，根据订单状态获取列表，具备分页功能</p>",
    "name": "OrderList",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>一个页有多少个商品,默认4个;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageIndex",
            "description": "<p>第几页,默认1;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "3",
              "4",
              "5"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>订单状态:0-待付款，3-待发货，4-待收货，5-待评价;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/order/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/order/settle",
    "title": "获取\"确认订单\"页面的数据",
    "description": "<p>点击结算按钮之后传参至&quot;确认订单&quot;，此API返回&quot;确认订单&quot;页面需要的数据，此时订单需要用户确认商品价格、数量、支付金额，收货地址在此页面选择或者修改</p>",
    "name": "SettleOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "goods",
            "description": "<p>欲购买商品id，格式：[id1,id2,id3];</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/order/settle"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/upload/common",
    "title": "通用图片上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，不限制尺寸，存储至common文件夹</p>",
    "name": "UploadCommon",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload/common"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>返回图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/mall/upload.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "delete",
    "url": "/api/upload",
    "title": "删除图片API",
    "description": "<p>如果上传错误的图片，通过此API删除错误的图片</p>",
    "name": "uploadDelete",
    "group": "Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>图片文件路径,注：src='./images/goods/file.jpg'，必须严格按照规范路径，'./images'不可省略;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/upload.js",
    "groupTitle": "Upload_Image"
  },
  {
    "type": "post",
    "url": "/api/user/token",
    "title": "换取登录token",
    "description": "<p>微信小程序login之后，获得临时登录凭证code，再使用code换取登录token,请在头部headers中设置Authorization: <code>Bearer ${token}</code>,所有请求都必须携带token;</p>",
    "name": "Token",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>微信临时登录凭证code.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/token"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/info",
    "title": "上传微信用户信息",
    "name": "_info_upload_________",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": "<p>用户昵称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatarUrl",
            "description": "<p>头像.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>国家.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/user/info"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/mall/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/category/all",
    "title": "获取所有树形分类",
    "name": "allCategory",
    "group": "admin_Category",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/category/all"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/category.js",
    "groupTitle": "admin_Category"
  },
  {
    "type": "post",
    "url": "/api/category",
    "title": "添加子分类",
    "name": "category_add______",
    "group": "admin_Category",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pId",
            "description": "<p>父级id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>分类图片src地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "level",
            "description": "<p>分类所在层级.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/category"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/category.js",
    "groupTitle": "admin_Category"
  },
  {
    "type": "delete",
    "url": "/api/category",
    "title": "删除分类",
    "name": "category_delete_____",
    "group": "admin_Category",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/category"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/category.js",
    "groupTitle": "admin_Category"
  },
  {
    "type": "put",
    "url": "/api/category",
    "title": "更新分类",
    "name": "updateCategory",
    "group": "admin_Category",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>分类图片src地址.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/category"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/category.js",
    "groupTitle": "admin_Category"
  },
  {
    "type": "get",
    "url": "/api/admin/goods/list",
    "title": "获取商品列表",
    "description": "<p>具备商品分页功能，3个分类id参数至多能传1个，默认按照商品创建时间升序排序</p>",
    "name": "AdminGoodsList",
    "group": "admin_Goods",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "4",
            "description": "<p>一个页有多少个商品;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageIndex",
            "defaultValue": "1",
            "description": "<p>第几页;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_1st",
            "description": "<p>一级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_2nd",
            "description": "<p>二级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_3rd",
            "description": "<p>三级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ASC\"",
              "\"DESC\""
            ],
            "optional": true,
            "field": "sortByPrice",
            "description": "<p>按照价格排序，从小到大-ASC,从大到小-DESC;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "goods",
            "description": "<p>商品数组.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>商品总数.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/goods/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/goods.js",
    "groupTitle": "admin_Goods"
  },
  {
    "type": "delete",
    "url": "/api/admin/goods",
    "title": "删除商品",
    "name": "GoodsDelete",
    "group": "admin_Goods",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/goods"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/goods.js",
    "groupTitle": "admin_Goods"
  },
  {
    "type": "get",
    "url": "/api/admin/goods",
    "title": "获取商品详情",
    "name": "GoodsDetail",
    "group": "admin_Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/goods"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/goods.js",
    "groupTitle": "admin_Goods"
  },
  {
    "type": "put",
    "url": "/api/admin/goods",
    "title": "编辑商品",
    "name": "goodsEdit",
    "group": "admin_Goods",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_1st",
            "description": "<p>一级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_2nd",
            "description": "<p>二级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cate_3rd",
            "description": "<p>三级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hotPoint",
            "description": "<p>商品热点描述;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "marketPrice",
            "description": "<p>市场价;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>成本价;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣如：75%;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inventory",
            "description": "<p>商品库存;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "articleNo",
            "description": "<p>商品货号;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img_lg",
            "description": "<p>商品主图-720;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img_md",
            "description": "<p>商品主图-360;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slider",
            "description": "<p>商品轮播图片，例：slider:'src1,src2,src3';</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand",
            "description": "<p>商品品牌;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>商品详情,一般存储为HTML代码;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "freight",
            "description": "<p>商品运费;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/goods"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/goods.js",
    "groupTitle": "admin_Goods"
  },
  {
    "type": "post",
    "url": "/api/admin/goods",
    "title": "发布新商品",
    "name": "goodsRelease",
    "group": "admin_Goods",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_1st",
            "description": "<p>一级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_2nd",
            "description": "<p>二级分类id;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cate_3rd",
            "description": "<p>三级分类id，无此分类，id = 0;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hotPoint",
            "description": "<p>商品热点描述;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "marketPrice",
            "description": "<p>市场价;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>成本价;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣如：75%;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inventory",
            "description": "<p>商品库存;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "articleNo",
            "description": "<p>商品货号;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img_lg",
            "description": "<p>商品主图-720;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img_md",
            "description": "<p>商品主图-360;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slider",
            "description": "<p>商品轮播图片，例：slider:'src1,src2,src3';</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand",
            "description": "<p>商品品牌;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>商品详情,一般存储为HTML代码;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "freight",
            "description": "<p>商品运费;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/goods"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/goods.js",
    "groupTitle": "admin_Goods"
  },
  {
    "type": "get",
    "url": "/api/admin/icon/list",
    "title": "获取所有element图标",
    "description": "<p>获取系统中的element图标，具备分页功能。</p>",
    "name": "AdminIcons",
    "group": "admin_Icon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>一个页有多少个商品,默认4个;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageIndex",
            "description": "<p>第几页,默认1;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "icons",
            "description": "<p>图标数组.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>图标总数.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/icon/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/icon.js",
    "groupTitle": "admin_Icon"
  },
  {
    "type": "post",
    "url": "/api/menu",
    "title": "添加子菜单",
    "name": "MenuAdd",
    "group": "admin_Menu",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pId",
            "description": "<p>父级id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>菜单url地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>菜单显示顺序，按照数字从小到大排序，如2001.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/menu"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/menu.js",
    "groupTitle": "admin_Menu"
  },
  {
    "type": "delete",
    "url": "/api/menu",
    "title": "删除子菜单",
    "name": "MenuDelete",
    "group": "admin_Menu",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>子菜单id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/menu"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/menu.js",
    "groupTitle": "admin_Menu"
  },
  {
    "type": "get",
    "url": "/api/menu/sub",
    "title": "获取子菜单",
    "name": "MenuSub",
    "group": "admin_Menu",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pId",
            "description": "<p>父级菜单id。 注： 获取一级菜单pId = 1;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/menu/sub"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/menu.js",
    "groupTitle": "admin_Menu"
  },
  {
    "type": "put",
    "url": "/api/menu",
    "title": "更新子菜单",
    "name": "MenuUpdate",
    "group": "admin_Menu",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>子菜单id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>子菜单名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>子菜单url地址.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/menu"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/menu.js",
    "groupTitle": "admin_Menu"
  },
  {
    "type": "put",
    "url": "/api/menu/icon",
    "title": "设置子菜单图标",
    "name": "MenuUpdateIcon",
    "group": "admin_Menu",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>子菜单id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>element图标id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/menu/icon"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/menu.js",
    "groupTitle": "admin_Menu"
  },
  {
    "type": "get",
    "url": "/api/menu/tree",
    "title": "根据角色id获取侧边栏树形菜单",
    "name": "TreeMenu",
    "group": "admin_Menu",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>角色id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/menu/tree"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/menu.js",
    "groupTitle": "admin_Menu"
  },
  {
    "type": "get",
    "url": "/api/admin/order/list",
    "title": "获取所有账户订单列表",
    "description": "<p>获取系统中的订单列表，根据订单状态获取列表，具备分页功能</p>",
    "name": "AdminOrderList",
    "group": "admin_Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>一个页有多少个商品,默认4个;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageIndex",
            "description": "<p>第几页,默认1;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "3",
              "4",
              "5",
              "all"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>订单状态:0-待付款，3-待发货，4-待收货，5-待评价，all-所有状态;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/order/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/order.js",
    "groupTitle": "admin_Order"
  },
  {
    "type": "delete",
    "url": "/api/role/menu",
    "title": "为指定角色删除菜单",
    "name": "DeleteRoleMenu",
    "group": "admin_Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色id。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "menu_id",
            "description": "<p>菜单id。</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/role/menu"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/role.js",
    "groupTitle": "admin_Role"
  },
  {
    "type": "get",
    "url": "/api/role/config",
    "title": "根据角色id获取菜单配置",
    "name": "LoadRoleMenu",
    "group": "admin_Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>角色id。</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/role/config"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/role.js",
    "groupTitle": "admin_Role"
  },
  {
    "type": "post",
    "url": "/api/role/menu",
    "title": "为指定角色添加菜单",
    "name": "PutRoleMenu",
    "group": "admin_Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色id。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "menu_id",
            "description": "<p>菜单id。</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/role/menu"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/role.js",
    "groupTitle": "admin_Role"
  },
  {
    "type": "post",
    "url": "/api/role",
    "title": "添加角色",
    "name": "RoleAdd",
    "group": "admin_Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/role.js",
    "groupTitle": "admin_Role"
  },
  {
    "type": "delete",
    "url": "/api/role",
    "title": "删除角色",
    "name": "RoleDelete",
    "group": "admin_Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/role.js",
    "groupTitle": "admin_Role"
  },
  {
    "type": "get",
    "url": "/api/role/list",
    "title": "获取角色列表",
    "name": "RoleList",
    "group": "admin_Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/role/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/role.js",
    "groupTitle": "admin_Role"
  },
  {
    "type": "put",
    "url": "/api/role",
    "title": "更新角色",
    "name": "RoleUpdate",
    "group": "admin_Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/role"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/role.js",
    "groupTitle": "admin_Role"
  },
  {
    "type": "post",
    "url": "/api/upload/avatar",
    "title": "用户头像上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，尺寸（120~300）必须是正方形，存储至avatar文件夹</p>",
    "name": "UploadAvatar",
    "group": "admin_Upload_Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload/avatar"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>返回图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/upload.js",
    "groupTitle": "admin_Upload_Image"
  },
  {
    "type": "post",
    "url": "/api/upload/editor",
    "title": "富文本编辑器图片上传",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，不限制尺寸，存储至details文件夹</p>",
    "name": "UploadEditor",
    "group": "admin_Upload_Image",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload/editor"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/upload.js",
    "groupTitle": "admin_Upload_Image"
  },
  {
    "type": "post",
    "url": "/api/upload/goods",
    "title": "上传商品主图",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，尺寸（300~1500），存储至goods文件夹</p>",
    "name": "uploadGoods",
    "group": "admin_Upload_Image",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload/goods"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lgImg",
            "description": "<p>返回720宽度图片地址.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mdImg",
            "description": "<p>返回360宽度图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/upload.js",
    "groupTitle": "admin_Upload_Image"
  },
  {
    "type": "post",
    "url": "/api/upload/slider",
    "title": "轮播图上传API",
    "description": "<p>上传图片会自动检测图片质量，压缩图片，体积&lt;2M，尺寸（300~1500）必须是正方形，存储至goods文件夹</p>",
    "name": "uploadSlider",
    "group": "admin_Upload_Image",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File文件对象;</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/upload/slider"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>返回720宽度图片地址.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin/upload.js",
    "groupTitle": "admin_Upload_Image"
  },
  {
    "type": "get",
    "url": "/api/admin",
    "title": "获取管理员个人资料",
    "name": "AdminInfo",
    "group": "admin_User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>账户id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/admin.js",
    "groupTitle": "admin_User"
  },
  {
    "type": "get",
    "url": "/api/admin/list",
    "title": "获取管理员列表",
    "name": "AdminList",
    "group": "admin_User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/admin/list"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/admin.js",
    "groupTitle": "admin_User"
  },
  {
    "type": "post",
    "url": "/api/admin/login",
    "title": "管理员登录",
    "description": "<p>登录成功， 返回token, 请在头部headers中设置Authorization: <code>Bearer ${token}</code>, 所有请求都必须携带token;</p>",
    "name": "AdminLogin",
    "group": "admin_User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>账户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/admin.js",
    "groupTitle": "admin_User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>请求结果信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求结果信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>返回的token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>账户id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.role",
            "description": "<p>账户角色id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200返回的JSON:",
          "content": "HTTP / 1.1 200 OK\n{\n    \"status\": true,\n    \"msg\": \"成功\",\n    \"data\":{\n        \"id\":5,\n        \"role\":3,\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiIxIiwiaWF0IjoxNTU3MzM1Mzk3LCJleHAiOjE1NTczNDI1OTd9.vnauDCSHdDXaZyvTjNOz0ezpiO-UACbG-oHg_v76URE\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/register",
    "title": "管理员注册",
    "description": "<p>注册成功，默认角色为运营人员，默认生成头像地址：&quot;/images/avatar/default.jpg&quot;， 返回token, 请在头部headers中设置Authorization: <code>Bearer ${token}</code>,所有请求都必须携带token;</p>",
    "name": "AdminRegister",
    "group": "admin_User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>账户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin/register"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/admin.js",
    "groupTitle": "admin_User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>请求结果信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求结果信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>返回的token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>账户id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.role",
            "description": "<p>账户角色id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200返回的JSON:",
          "content": "HTTP / 1.1 200 OK\n{\n    \"status\": true,\n    \"msg\": \"成功\",\n    \"data\":{\n        \"id\":5,\n        \"role\":3,\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiIxIiwiaWF0IjoxNTU3MzM1Mzk3LCJleHAiOjE1NTczNDI1OTd9.vnauDCSHdDXaZyvTjNOz0ezpiO-UACbG-oHg_v76URE\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/admin",
    "title": "删除管理员",
    "name": "DeleteAdmin",
    "group": "admin_User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>账户id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/admin.js",
    "groupTitle": "admin_User"
  },
  {
    "type": " put ",
    "url": "/api/admin",
    "title": "更新管理员个人资料",
    "name": "UpdateInfo",
    "group": "admin_User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>账户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱地址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>账户角色id.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/admin"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/admin/admin.js",
    "groupTitle": "admin_User"
  }
] });
