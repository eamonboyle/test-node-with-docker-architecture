interface PostFilterProps {
    field: string;
    value: string;
    onChange: (value: string) => void;
}

export const PostFilter = ({ field, value, onChange }: PostFilterProps) => {
    return (
        <div>
            <label htmlFor={`filter-${field}`}>{field}: </label>
            <input
                type='text'
                name={`filter-${field}`}
                placeholder={field}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};
