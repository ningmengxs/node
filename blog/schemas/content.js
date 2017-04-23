/**
 * Created by Admin on 2017/4/18.
 */

var mongoose = require('mongoose');

// 内容的表结构
module.exports = new mongoose.Schema({
    //内容分类，关联字段 - 内容分类的id
    category: {
        // 类型
        type: mongoose.Schema.Types.ObjectId,
        // 引用
        ref:'Category'
    },
    //关联字段 - 用户id
    user: {
        // 类型
        type: mongoose.Schema.Types.ObjectId,
        // 引用
        ref:'User'
    },
    // 添加时间
    addTime: {
        type: Date,
        default:new Date()
    },

    // 阅读数
    views: {
        type: Number,
        default:0
    },

    //内容标题
    title: String,

    // 简介
    description: {
        type: String,
        default: ''
    },

    // 内容
    content: {
        type: String,
        default:''
    },

    //评论
    comments: {
        type: Array,
        default: []
    }
});
