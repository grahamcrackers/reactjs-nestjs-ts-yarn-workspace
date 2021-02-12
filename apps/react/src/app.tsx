import React, { useEffect, useState } from 'react';
import { User } from '@react-nestjs/shared';

const url = 'http://localhost:4000';

export function App(): JSX.Element {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        (async () => {
            const response = await fetch(`${url}/Graham/33`);
            const payload = await response.json();

            setUser(payload);
        })();
    }, []);

    if (!user) {
        return <h1>loading...</h1>;
    }

    return <h1>Hello {user?.name + '!' ?? 'World!'}</h1>;
}
