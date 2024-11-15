import {Tweet} from "@/app/types/tweet";
import {user} from "@/app/data/user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: "Outro dia mágico",
    image: "https://static.botafogo.com.br/upload/noticia/6616caf966121.jpg",
    likeCount: 11584,
    commentCount: 1542,
    retweetCount: 3500,
    liked: true,
    retweeted: true,
    dataPost: new Date(2024, 10, 15, 10, 0, 0)
}