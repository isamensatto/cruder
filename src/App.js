import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Post } from './pages/Post/post';
import { Edit } from './pages/Edit/edit';
import { Feed } from './pages/Feed/feed';
import { LerMais } from './pages/LerMais/lermais';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/post" element={<Post />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/ler-mais" element={<LerMais />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
