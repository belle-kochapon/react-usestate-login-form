import { ReactNode } from "react";

type HeadingProps = {
   // ReactNode ทุกอย่างที่รีแอครับได้
   children: ReactNode 
};

function Heading({ children }: HeadingProps) {
   return <div>{children}</div>; 
}

export default Heading;