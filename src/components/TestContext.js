// ExampleComponent.js
import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const ExampleComponent = () => {
    const { data, updateData } = useContext(DataContext);

    // ทำอะไรสักอย่างกับ data

    return (
        data // รีเทิร์น JSX ที่ใช้ data
    );
};

export default ExampleComponent;
