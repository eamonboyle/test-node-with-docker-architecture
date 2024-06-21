import { Post } from '../types/post.type';

export const getPosts = async (queryParams: {
    author?: string;
    sortBy?: string;
    sortOrder?: string;
}) => {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/posts/?` +
            new URLSearchParams(queryParams),
    );

    return await res.json();
};

export const createPost = async (post: Post) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    });

    return await res.json();
};
