
import { BrowserRouter  as Router,Routes,Route,Navigate }  from 'react-router-dom'

import Users from './user/pages/Users'
import UserPlaces from './places/pages/UserPlaces'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation'

const App = () => {
  return <Router>
    <MainNavigation />
    <main>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
      
    </Router>
}

export default App
