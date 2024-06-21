import { Post } from './Post';

interface PostListProps {
    posts: {
        _id: string;
        title: string;
        contents?: string;
        author?: string;
    }[];
}

export const PostList = ({ posts }: PostListProps) => {
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post._id}>
                        <Post {...post} />
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};
