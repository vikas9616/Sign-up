import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import PostList from './components/PostList';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/posts" element={<PostList/>} />
                        <Route path="/" element={<Signup/>} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
