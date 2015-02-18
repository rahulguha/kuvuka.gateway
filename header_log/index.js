var header_log = function(){
    this.host = "";
    this.connection = "";
    this.user_agent = "";
    this.cache_control = "";
    this.content_type="";
    this.url = "";
}

module.exports = new header_log();
//module.exports = function() {
//
////    this.about = function() {
////        console.log(this.name +' is '+ this.age +' years old');
////    };
//};