import {TweetItem} from "@/app/components/tweet/tweet-item";
import {tweet} from "@/app/data/tweet";

export const HomeFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweet}/>
            <TweetItem tweet={tweet}/>
            <TweetItem tweet={tweet}/>
            <TweetItem tweet={tweet}/>
        </div>
    )
}