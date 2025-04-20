import { ChangeEvent, useState } from "react";
import Button from "../components/Button";

function Login() {
  // EX. Use "state" as a place to keep username and password
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
   
  // EX 2. Create onChangeUsername function
  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    // console.log(event.target.value);
    setUsername(event.target.value);
    console.log(username);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    console.log(password);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };
  // structure
  // const obj = {
  //   event: {
  //     target: {
  //       value: "",
  //     },
  //   },
  // };

  // commnd to reach out the "value" above
  // obj.event.target.value

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            // EX 2. add Event (see line 9)
            onChange={onChangeUsername}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChangePassword}/>
        </div>
        {/* Import "Button" component */}
        <Button />
      </form>
    </>
  );
}

export default Login
