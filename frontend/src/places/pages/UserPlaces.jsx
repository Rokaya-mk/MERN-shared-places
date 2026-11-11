import PlaceList from '../../places/components/PlaceList/PlaceList';
const UserPlaces = () => {

    const places = [
        {
            id: 'p1',
            title: 'Place 1',
            description: 'This is place 1',
            address: 'Address 1',
            image: 'https://via.placeholder.com/150',
            location: {
                lat: 40.748817,
                lng: -73.985428 
            },
            creator: 'u1'
        },
         {
            id: 'p2',
            title: 'Place 2',
            description: 'This is place 2',
            address: 'Address 2',
            image: 'https://via.placeholder.com/150',
            location: {
                lat: 40.748817,
                lng: -73.985428 
            },
            creator: 'u2'
        }
    ];
    
    return <PlaceList items={places} />
};

export default UserPlaces;