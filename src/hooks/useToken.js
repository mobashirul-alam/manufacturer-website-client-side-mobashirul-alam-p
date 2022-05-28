import { useEffect, useState } from "react"

// Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        console.log(user);
        const email = user?.user?.email || user?.email;
        const userSaved = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userSaved)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);

    return [token];
}

export default useToken;