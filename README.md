# react-redux-modals ([demo](https://nickjag.github.io/react-redux-modals/))
> React-Redux modals for drop-in modal support with components and auto-stacking.

## Features

- Use your own style (or copy the example css)
- Use your own components as modals
- Modals on top of modals (auto-layering/stacking)
- Custom hooks/props for passing data
- Separate DOM tree
- Custom z-indexing
- Control over individual modal closing methods
- Fade-in transition option

## Install

```bash
npm install --save react-redux-modals
```

## Usage

Check out the [demo](https://nickjag.github.io/react-redux-modals/) in the [example folder](https://github.com/nickjag/react-redux-modals/tree/master/example).

1. Call `ModalRoot` with your store and add the resulting component to your root component.
2. Pass in your modal components as a prop.

```jsx
// ./index.js

import { ModalRoot } from 'react-redux-modals';
import * as modalComponents from './modal_components';

const ModalRootWithStore = ModalRoot(store);

const Root = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <ModalRootWithStore modalComponents={modalComponents} />
  </div>
);
```

```jsx
// ./modal_components.js

import Signup from './components/modal/signup';
import Delete from './components/modals/delete';
import Terms from './components/modals/terms';

export const MODAL_SIGNUP = Signup;
export const MODAL_DELETE = Delete;
export const MODAL_TERMS = Terms;
```

3. Add the modals reducer.

```jsx
// ./reducers/index.js

import { reducer as modals } from 'react-redux-modals';

export default combineReducers({
  modals,
});
```

4. Create your modal by using the `Modal` wrapper component. Add your own style.

```jsx
// ./components/modals/delete.js

import Modal, { actions } from 'react-redux-modals';
import './modal.css';

class ModalDelete extends Component {

  render() {
    return (
      <Modal
        config={this.props.modalConfig} // required
        handleEscape={() => this.props.hideModal('MODAL_DELETE')} 
      >

        <div className="modal-body">
          <p>{`Are you sure you want to delete ${this.props.title}?`}</p>
          <button onClick={this.props.confirmDelete}>Yes</button>
          <button onClick={() => this.props.hideModal('MODAL_DELETE')}>No</button>
        </div>

      </Modal>
    );
  }
}

export default connect(
  null,
  { hideModal: actions.hideModal },
)(ModalDelete);

```

5. Call your modal (with optional props).

```jsx
// ./components/files.js

import { actions } from 'react-redux-modals';

class Files extends Component {

  render() {
    return (
      <div>
        <h3>My Files</h3>
        <div className="file">
          <label>{`File: ${filename}`}</label>
          <button onClick={() => this.props.showModal('MODAL_DELETE', {
            title: filename,
            confirmDelete: () => this.deleteFile(id)
          })}>
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { showModal: actions.showModal },
)(Files);

```


## Components


### Component: **Modal**

Props:

| Property | Type | Required | Default | Description |
|:--------------|:--------------|:--------------|:--------------|:--------------|
| `config` | object | Required | undefined | Pass `this.props.modalConfig` (auto-injected). |
| `handleEscape` | function | Optional | undefined | Fires when clicking outside of modal. |
| `animate` | boolean | Optional | false | Adds a class of `animate` to the modal. |
| `fadeIn` | boolean | Optional | true | Uses the provided fadeIn animation if `animate` is true. |

### Component: **ModalRootWithStore**

Props:

| Property | Type | Required | Default | Description |
|:--------------|:--------------|:--------------|:--------------|:--------------|
| `modalComponents` | object | Required | undefined | Pass a module of your exported modal components. |
| `config` | object | Optional | undefined | Optionally pass a starting z-index. |

Example of passing a starting z-index (defaults to `1000`).

```jsx
// ./index.js

<ModalRootWithStore
  modalComponents={modalComponents}
  config={{ zIndex: 5 }}
/>
```

## Action Creators

Available action creators.

- showModal(name, props)
- hideModal(name)
- resetModals()

## License

MIT