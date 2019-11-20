// Implement SlotsProvider component that passes data from context to the render function (passed as children)
import React from 'react';

export const Main = () => (
    <SlotsProvider>
        {slots => <SlotsList slots={slots} />}
    </SlotsProvider>
)