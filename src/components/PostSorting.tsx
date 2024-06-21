interface PostSortingProps {
    fields: string[];
    value: string;
    onChange: (value: string) => void;
    orderValue: string;
    onOrderChange: (value: string) => void;
}

export const PostSorting = ({
    fields,
    value,
    onChange,
    orderValue,
    onOrderChange,
}: PostSortingProps) => {
    return (
        <div>
            <label htmlFor='sortBy'>Sort By: </label>
            <select
                name='sortBy'
                id='sortBy'
                onChange={(e) => onChange(e.target.value)}
                value={value}
            >
                {fields.map((field) => (
                    <option key={field} value={field}>
                        {field}
                    </option>
                ))}
            </select>
            {' / '}
            <label htmlFor='sortOrder'>Sort Order: </label>
            <select
                name='sortOrder'
                id='sortOrder'
                value={orderValue}
                onChange={(e) => onOrderChange(e.target.value)}
            >
                <option value='ascending'>ascending</option>
                <option value='descending'>descending</option>
            </select>
        </div>
    );
};
