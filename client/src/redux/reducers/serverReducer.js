import config from '../../config.json';

const initialState = {
    server: {
        address: config.server,
    }
};

const serverReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default serverReducer;