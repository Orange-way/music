var songList,$=window.Zepto,root=window.player,$scope=$(document.body),index=0,audio=new root.audioControl;function bindEvent(){$scope.on("click",".prev-btn",function(){var o=controlManger.prev();$scope.trigger("play:change",o)}),$scope.on("click",".next-btn",function(){var o=controlManger.next();$scope.trigger("play:change",o)}),$scope.on("play:change",function(o,n){audio.getAudio(songList[n].audio),"play"==audio.status&&(audio.play(),root.process.start()),root.process.renderAllTime(songList[n].duration),root.render(songList[n]),root.process.update(0)}),$scope.on("click",".play-btn",function(){"play"==audio.status?(audio.pause(),root.process.stop()):(audio.play(),root.process.start()),$(this).toggleClass("pause")}),$scope.on("click",".like-btn",function(){songList[controlManger.index].isLike?(songList[controlManger.index].isLike=!1,$scope.find(".like-btn").removeClass("liking")):(songList[controlManger.index].isLike=!0,$scope.find(".like-btn").addClass("liking"))})}function bindTouch(){var o=$scope.find(".slider-pointer"),n=$scope.find(".pro-wrapper").offset(),e=n.left,s=n.width;o.on("touchstart",function(){root.process.stop()}).on("touchmove",function(o){var n=(o.changedTouches[0].clientX-e)/s;root.process.update(n)}).on("touchend",function(o){var n=(o.changedTouches[0].clientX-e)/s;(n<0||1<n)&&(n=0);var t=n*songList[controlManger.index].duration;audio.playTo(t),root.process.start(n),$scope.find(".play-btn").addClass("pause")})}function getData(o){$.ajax({type:"GET",url:o,success:function(o){songList=o,root.render(o[0]),bindEvent(),controlManger=new root.controlManger(o.length),$scope.trigger("play:change",0),bindTouch()},error:function(){}})}getData("../mock/data.json");