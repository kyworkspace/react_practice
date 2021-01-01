const path = require("path")
module.exports ={
    module : {
        rules :[
            {
                test:/\.scss$/, //scss 확장자만 적용하도록 규칙 추가
                loaders : ["sass-loader"], //sass-loader로 sass구문을 css로 변환
                include : path.resolve(__dirname,"../")
            }
        ]
    }
}