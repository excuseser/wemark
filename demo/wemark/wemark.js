const parser = require('./parser');
const getRichTextNodes = require('./richtext').getRichTextNodes;

Component({
	properties: {
		md: {
			type: String,
			value: '',
			observer() {
        this.parseMd();
        this.navurl();        
			}
		},
		type: {
			type: String,
			value: 'wemark'
		},
		link: {
			type: Boolean,
			value: false
		},
		highlight: {
			type: Boolean,
			value: false
		}
	},
	data: {
		parsedData: {},
		richTextNodes: []
  },  
	methods: {
		parseMd() {
			if (this.data.md) {
				var parsedData = parser.parse(this.data.md, {
					link: this.data.link,
					highlight: this.data.highlight
				});
				// console.log('parsedData:', parsedData);
				if (this.data.type === 'wemark') {
					this.setData({
						parsedData
					});
				} else {
					// var inTable = false;
					var richTextNodes = getRichTextNodes(parsedData);

					// console.log('richTextNodes:', richTextNodes);

					this.setData({
						richTextNodes
					});
				}
			}
    },
    navurl: function (event) {
      if (event) {  
        var url = event.currentTarget.dataset.url
        if (url[0]=="#") {
          const query = wx.createSelectorQuery().in(this)
          query.select(".anchor-"+url.slice(1)).boundingClientRect()          
          query.selectViewport().scrollOffset()
          query.exec(function(res){
            if (res[0] && res[1]) {
              res[0].top       // #the-id节点的上边界坐标
              res[1].scrollTop // 显示区域的竖直滚动位置
              wx.pageScrollTo({
                scrollTop:res[0].top + res[1].scrollTop,
                duration: 300
              })          
            }
          })
        }
        else{
          wx.navigateTo({
            url: url,
          })
        }
      }
    },
  }  
});
