import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEventHandler, useState } from 'react';
import { createPost } from '../api/posts';

export const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [contents, setContents] = useState('');

    const queryClient = useQueryClient();

    const createPostMutation = useMutation({
        mutationFn: () => createPost({ title, author, contents }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        createPostMutation.mutate();
    };

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
            <div>
                <label htmlFor='create-author'>Author: </label>
                <input
                    type='text'
                    name='create-author'
                    id='create-author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
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
