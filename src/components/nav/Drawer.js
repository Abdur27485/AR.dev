import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './drawer.css'

const Drawer = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="Button violet">Edit profile</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                   
                    {/* <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            close
                        </button>
                    </Dialog.Close> */}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Drawer;