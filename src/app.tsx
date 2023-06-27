import React, { FC } from 'react';
import PhoneInput from './phone-input';

const App: FC = () => {
    return (
        <div>
            <h1>react-number-format v5.1.4, dynamic mask and copy+paste demo</h1>
            <p>Copy phone number <i>9995554433</i> and paste it into the input</p>
            <PhoneInput />
            <p>Cursor will be moved to the position after the last inserted symbol - it seems to be expected behaviour</p>
        </div>
    );
};

export default App;
