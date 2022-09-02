# Modal no react native

Como usar?

    Basta instalar a lib no seu projeto com o comando:
```shell
    npm i rn-custom-modal
```

    Envolver os seus arquivos com o modal provider
```tsx
import React from 'react';

import { CustomModal } from 'CustomModal/CustomModal';
import { DEFAULT_MODAL } from 'CustomModal/mock/defaultModal';

export default function App() {

  return (
    <>
        <MyAplication />
        <CustomModal {...DEFAULT_MODAL} /> // a modal default é para "resetar" para o padrão dela.
    </>
  );
}
```

    Como usar dentro da aplicação? Use ela como uma função js

```tsx
    import CustomModal from 'CustomModal';

    CustomModal.showModal({
        type: 'error', // Selecione o tipo da modal: 'error', 'information', 'success', 'confirm'
        title: 'Título da modal',
        message: 'Mensagem dentro da modal',
        onCancel: () => {
            functionExample();
        },
        onConfirm: () => {
            functionExample();
        },
        // onCancel() {
        //     functionExample();
        // },
        // onConfirm() {
        //     functionExample();
        // },
    });
```