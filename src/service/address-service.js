var _mm = require('util/mm.js');

var _address = {
    // 获取地址列表
    getAddressList: function(resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/list.do'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject
        });
    },
    // 新建收件人
    save: function(addressInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    // 更新收件人
    update: function(addressInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    // 删除收件人
    deleteAddress: function(shippindId, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/del.do'),
            data: {
                shippindId: shippindId
            },
            success: resolve,
            error: reject
        });
    },
    // 获取单条收件人信息
    getAddress: function(shippindId, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/select.do'),
            data: {
                shippindId: shippindId
            },
            success: resolve,
            error: reject
        });
    }
}

module.exports = _address;