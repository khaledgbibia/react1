


import "./App.css";
import Navigation from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  const users =[ {
    name:"Khaled",
    imageUrl : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    name:"Amine",
    imageUrl : "https://www.seekpng.com/png/detail/46-463314_v-th-h-user-profile-icon.png",
  },
  {
    name:"Ahmed",
    imageUrl : "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png",
  },
]
  return <div className="App">
<Navigation/>
<br></br>
{users.map((user) => {
  return <Profile userInfo ={user} />;})}

  </div>
}

export default App;