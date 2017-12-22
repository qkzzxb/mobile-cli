import Vue from 'vue'
import moment from 'moment'
moment.locale('zh-cn');
Vue.filter('showtime', function(value) {
    return (moment(Number(value)).format('ll'))
})
Vue.filter('statusOut', function(status) {
    switch (status) {
        case 1:
            return '进行中'
            break;
        case 2:
            return '已结束'
            break;
        case 3:
            return '报名中'
            break;
    }
})
Vue.filter('server_type', function(status) {
    switch (status) {
        case '1':
            return '等待系统分配医生'
            break;
        case '2':
            return '待医生回复'
            break;
        case '3':
            return '医生已回复'
            break;
        case '4':
            return '已完成'
            break;
    }
})
Vue.filter('time_type', function(status) {
    switch (status) {
        case '1':
            return '今天'
            break;
        case '2':
            return '三天内'
            break;
        case '3':
            return '一周内'
            break;
        case '4':
            return '一月内'
            break;
        case '5':
            return '半年内'
            break;
        case '6':
            return '大于半年'
            break;
    }
})
Vue.filter('consult_type', function(status) {
    switch (status) {
        case '1':
            return '待医生回复'
            break;
        case '2':
            return '医生已回复'
            break;
        case '3':
            return '已完成'
            break;
    }
})
Vue.filter('referral_type', function(status) {
    switch (status) {
        case '1':
            return '待平台确认'
            break;
        case '2':
            return '定制已完成'
            break;
        case '3':
            return '已关闭'
            break;
    }
})
Vue.filter('green_type', function(status) {
    switch (status) {
        case '1':
            return '待平台定制'
            break;
        case '2':
            return '待付尾款'
            break;
        case '3':
            return '待平台预约'
            break;
        case '4':
            return '预约已完成'
            break;
        case '5':
            return '已关闭'
            break;
        case '6':
            return '待就诊'
            break;
        case '7':
            return '就诊中'
            break;
        case '8':
            return '已出院'
            break;
        case '9':
            return '已完成'
            break;
    }
})
Vue.filter('green_handle_type', function(status) {
    switch (status) {
        case '1':
            return '取消'
            break;
        case '2':
            return '支付全款'
            break;
        case '4':
            return '就诊反馈'
            break;
        case '6':
            return '到达就诊医院反馈'
            break;
        case '7':
            return '就诊一天后反馈'
            break;
        case '8':
            return '出院后反馈'
            break;
        case '9':
            return '反馈'
            break;
    }
})
Vue.filter('sex_type', function(status) {
    switch (status) {
        case 1:
            return '男'
            break;
        case 2:
            return '女'
            break;
        case 3:
            return null
            break;
    }
})
Vue.filter('archives_type', function(status) {
    switch (status) {
        case '1':
            return '检查报告'
            break;
        case '2':
            return '体检档案'
            break;
        case '3':
            return '门诊住院病历'
            break;
    }
})
Vue.filter('blood_type', function(status) {
    switch (status) {
        case '1':
            return 'A'
            break;
        case '2':
            return 'B'
            break;
        case '3':
            return 'O'
            break;
        case '4':
            return 'AB'
            break;
        case '5':
            return 'RH+'
            break;
        case '6':
            return 'RH-'
            break;
    }
})
Vue.filter('medical_insurance_type', function(status) {
    switch (status) {
        case '1':
            return '新农合医疗保险'
            break;
        case '2':
            return '城镇职工医疗保险'
            break;
        case '3':
            return '城镇居民医疗保险'
            break;
    }
})
Vue.filter('insurance_type', function(status) {
        switch (status) {
            case '1':
                return '无'
                break;
            case '2':
                return '省级医保'
                break;
            case '3':
                return '市级医保（可不填）'
                break;
        }
    })
    /* Vue.filter('medical_type', function(status) {
        switch (status) {
            case '1':
                return '无'
                break;
            case '2':
                return '高血压'
                break;
            case '3':
                return '糖尿病'
                break;
            case '4':
                return '高血脂'
                break;
            case '5':
                return '脑卒中'
                break;
            case '6':
                return '冠心病'
                break;
            case '7':
                return '哮喘'
                break;
            case '8':
                return '其他疾病'
                break;
        }
    }) */
Vue.filter('pro_type', function(status) {
    switch (status) {
        case '1':
            return '其他工作人员'
            break;
        case '2':
            return '各类专业、技术人员'
            break;
        case '3':
            return '国家机关、党群组织、企事业单位负责人'
            break;
        case '4':
            return '办事人员和有关人员'
            break;
        case '5':
            return '商业工作人员'
            break;
        case '6':
            return '服务性工作人员'
            break;
        case '7':
            return '农林牧渔劳动者'
            break;
        case '8':
            return '生产工作、运输工作和部分体力劳动者'
            break;
    }
})
Vue.filter('c_time_type', function(value) {
    value = value+"";
    value = value.replace(/-/g,'/');
    let date = new Date(value);
    return moment(date).format('ll');
})
Vue.filter('year', function(value) {
    return (new Date().getFullYear() - new Date(value).getFullYear());
})
Vue.filter('m_to_h', function(value) {
    return parseInt(Number(value) / 3600)
})
