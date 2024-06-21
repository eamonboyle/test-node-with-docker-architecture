import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEventHandler, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { createPost } from '../api/posts';

export const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [token] = useAuth();

    const queryClient = useQueryClient();

    const createPostMutation = useMutation({
        mutationFn: () => createPost(token, { title, contents }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        createPostMutation.mutate();
    };

    if (!token) return <div>Please log in to create new posts</div>;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='create-title'>Title: </label>
                <input
                    type='text'
                    name='create-title'
                    id='create-title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <br />
            <textarea
                name='create-content'
                id='create-content'
                placeholder='Enter content...'
                value={contents}
                onChange={(e) => setContents(e.target.value)}
            ></textarea>

            <br />
            <input
                type='submit'
                value={createPostMutation.isPending ? 'Creating...' : 'Create'}
                disabled={!title || createPostMutation.isPending}
            />

            {createPostMutation.isSuccess ? (
                <>
                    <br />
                    Post created succesfully!
                </>
            ) : null}
        </form>
    );
};
