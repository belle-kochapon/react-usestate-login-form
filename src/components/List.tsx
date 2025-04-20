import { ReactNode } from 'react'

// Set a new data type using "interface" instead of "Type"
    // T : Generic Type ส่งค่าอะไรมาก็ได้ ไม่ใช่แค่ string/number
interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{render(item)}</li>
            ))}
        </ul>
    );
};

export default List;

// item -> [1,2,3]
// render -> {item} => <h1>{item}</h1>