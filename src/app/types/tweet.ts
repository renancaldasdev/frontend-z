import {User} from "@/app/types/user";

export type Tweet = {
    id: number;
    user: User;
    body: String;
    image?: string;
    likeCount: number;
    commentCount: number;
    retweetCount: number;
    liked: boolean;
    retweeted: boolean;
    dataPost: Date;
}