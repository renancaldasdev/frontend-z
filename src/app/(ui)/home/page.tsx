import {HomeHeader} from "@/app/components/home/home-header";
import {TweetPost} from "@/app/components/tweet/tweet-post";
import {HomeFeed} from "@/app/components/home/home-feed";

export default function Page() {
    return <div>
        <HomeHeader/>
        <TweetPost/>
        <HomeFeed/>
    </div>;
}
