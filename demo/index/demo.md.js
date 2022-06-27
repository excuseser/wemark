module.exports = `
- 目录
  - [目录1](#123)
  - [目录2](#456)

# h1 Heading
## h2 Heading
### h3 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

这是一段普通的文字，中间有一点\`代码\`，还有点**加粗**的文字。

这段文字中间有一个软
换行，还有一个
硬换行

一段长数字123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890

普通~~被删除的文字~~哈哈

小程序内链接 [Demo](/index/index?id=123)，[Demo](/index/index?id=123)

- 无序列表1
- 无序列表2
  - 子项目
  - 子项目

\`\`\`anchor
123
\`\`\`

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


![图片来一张](https://www.toobug.net/logo.png)

\`\`\`javascript
// 代码啊

console.log(123);

const parser = require('./parser');

Component({
	properties: {
		md: {
			type: String,
			value: '',
			observer(){
				this.parseMd();
			}
		},
	},
	data: {
		parsedData: {},
	},
	methods: {
		parseMd(){
			if (this.data.md) {
				var parsedData = parser.parse(this.data.md, {
					link: this.data.link
				});
				this.setData({
					parsedData
				});
			}
		}
	}
});
\`\`\`

\`\`\`javascript
var a=\`hello\${world}\`;
\`\`\`

\`\`\`html
<html>
	<head>
		<title>test</title>
	</head>
	<body>
		<div class="hello">hello div</div>
		<p>hellp p</div>
	</body>
</html>
\`\`\`

hello

###### 表格

|表头1|表头2|表头3|
|:----|------|----|
|1111|12|13|
|21|22|23|

\`\`\`anchor
456
\`\`\`

&nbsp;

\`\`\`ucharts
{"type":"column","opts":{"color":["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],"padding":[15,15,0,5],"legend":{},"xAxis":{"disableGrid":true},"yAxis":{"data":[{"min":0}]},"extra":{"column":{"type":"group","width":30,"activeBgColor":"#000000","activeBgOpacity":0.08}}},"chartData":{"categories":["2016","2017","2018","2019","2020","2021"],"series":[{"name":"目标值","data":[35,36,31,33,13,34]},{"name":"完成量","data":[18,27,21,24,6,28]}]}}
\`\`\`

// <video src="http://html5demos.com/assets/dizzy.mp4" poster="http://via.placeholder.com/350x150"></video>
`;
