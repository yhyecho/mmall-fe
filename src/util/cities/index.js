var _cities = {
    cityInfo: {

    },
    // 获取所有的省份
    getProvinces: function() {
        var provinces = [];
        for(var item in this.cityInfo) {
            provinces.push(item);
        }
        return provinces;
    },
    // 获取某省份的所有城市
    getCities: function(provinceName) {
        return this.cityInfo[provinceName] || [];
    }
}

module.exports = _cities;