import UsersList from "../components/UsersList/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            image: 'https://via.placeholder.com/150',
            name: 'John Doe',
            age: 30,
            places: 5
        },
        {
            id: 'u2',
            image: 'https://via.placeholder.com/150',
            name: 'Jane Smith',
            age: 25,
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;