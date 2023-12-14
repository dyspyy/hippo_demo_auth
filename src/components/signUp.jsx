import axios from 'axios';

const login = async () => {
    try {
        const apiUrl = "https://kb.ai-hippocrates.ru/hippo/Account/SignIn";

        const headers = {

        }

        const res = await axios.get(apiUrl, { headers });


        return response;
    } catch(error) {
        console.log('Error: ', error);
    }

    return (
        <div className='login-wrapper'>
        <h1>Please Log In</h1>
        <form>
        <label>
            <p>Username</p>
            <input type="text" />
        </label>
        <label>
            <p>Password</p>
            <input type="password" />
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
    )
}

export default login;