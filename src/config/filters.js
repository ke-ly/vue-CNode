import Timeago from 'timeago';

const time_ago = new Timeago(); 

export default{
    timeAgo(t){
        return time_ago.format(t,'zh_CN');
    },
    topicTab(tab,good,top){
        let str = '';
        if(top){
            str = '置顶'
        }else if(good){
            str = '精华'        
        }else{            
            switch(tab){
                case 'ask':
                    return '问答'
                case 'job':
                    return '招聘'
                case 'share':
                    return '分享'
            }
        }
    }
}