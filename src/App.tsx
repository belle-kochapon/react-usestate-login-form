import Heading from "./components/Heading";
import Button from "./components/Button";

// EX. Create const using with if-else
// function App () {
//     const isLogin = false;
//     const text_logout = "Logged Out";
//     const text_login = "Logging In";
//     if (!isLogin) {
//         return <h1>{text_logout}</h1>;
//     } else {
//         return <h1>{text_login}</h1>;
//     }
// }

function App() {
    return (
    <>
        <h1>Heading Text</h1>
        {/* EX. calling Heading */}
        <Heading>
            <span>This is Heading Component</span>
        </Heading>
        {/* <Button color="green"></Button> */}
        <Button title="Login" color="green"></Button>
    </> 
    );
}


export default App;

