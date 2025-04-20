import { ReactNode } from "react";

type HeadingProps = {
   // ReactNode ทุกอย่างที่รีแอครับได้
   // children: ReactNode 
   count: number;
};

function Heading({ count }: HeadingProps) {
   return <div>{count}</div>; 
}

export default Heading;