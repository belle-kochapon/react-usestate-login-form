import Dashboard from "./page/Dashboard";
import Login from "./page/Login";

function App() {
    const isLogin: boolean = false;
    // Sol 1:
    // if (isLogin) {
    //     return <Dashboard />;
    // } else {
    //     return <Button />;
    // }

    // Sol 2: Ternary operator
    return <>{isLogin ? <Dashboard></Dashboard> : <Login></Login>}</>;

    /* Show details : if logged in show Component Dashboard, if logged out show log in page */

}

export default App;