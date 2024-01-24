import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { ExampleComponent } from '../../pages/Home/components/ExampleComponent';
import { AboutUs } from '../../pages/AboutUs';

const AppRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='' element={<ExampleComponent />} />
            </Route>
            <Route path='/about-us' element={<AboutUs />} />
        </Routes>
    );
};

export default AppRouting;