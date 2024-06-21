interface PostProps {
    _id: string;
    title: string;
    contents?: string;
    author?: string;
}

export const Post = ({ _id, title, contents, author }: PostProps) => {
    return (
        <article>
            <h3>
                {_id} {title}
            </h3>
            <div>{contents}</div>
            {author && (
                <em>
                    <br />
                    Written by <strong>{author}</strong>
                </em>
            )}
        </article>
    );
};
