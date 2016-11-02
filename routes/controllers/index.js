const Slide = require('../../models/slide');
const Blog = require('../../models/blog');

exports.indexSlide = function(req, res, next) {
  var slides
  Slide.fetch(function(err, slidesData) {
    if(err) console.log(err);
    slides = slidesData
    res.slides = slides
    next()
  })

}
exports.indexBlog = function(req, res) {
  var blogs
  Blog.fetchThree(function( err, BlogsData) {
    if(err) console.log(err);
    blogs = BlogsData
    res.render('index.pug', {
      title: '中拓企业管理',
      slides: res.slides,
      blogs: blogs
    })
  })
}

exports.heming = function(req, res) {
    res.render('heming', {
      title: '核名神器'
    })
}
exports.service = function(req, res) {
    res.render('service', {
      title: '公司服务'
    })
}
exports.brand = function(req, res) {
    res.render('brand', {
      title: '商标注册'
    })
}
exports.firm_in = function(req, res) {
    res.render('firm_in', {
      title: '内资注册'
    })
}
exports.firm_out = function(req, res) {
    res.render('firm_out', {
      title: '外资注册'
    })
}
