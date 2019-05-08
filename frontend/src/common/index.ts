export const actionIds = {
    GET_NUMBER_REQUEST_START: 'GET_NUMBER_REQUEST_START-> [0] Request a new number to the NumberGenerator async service.',
    GET_NUMBER_REQUEST_COMPLETED: 'GET_NUMBER_REQUEST_COMPLETED-> [1] NumberGenerator async service returned a new number.',
    CANCEL_ONGOING_NUMBER_REQUEST: 'CANCEL_ONGOING_NUMBER_REQUEST-> [2] Cancelling and on going number request',
    GET_NUMBER_REQUEST_USER_CONFIRMATION: 'GET_NUMBER_REQUEST_USER_CONFIRMATION-> [2] User has to confirm or cancel the number request before it gets fired',
    START_SOCKET_SUBSCRIPTION: 'START_SOCKET_SUBSCRIPTION-> [2] Start listening to the web socket',
    STOP_SOCKET_SUBSCRIPTION: 'STOP_SOCKET_SUBSCRIPTION-> [3] Close socket connection',
}

export interface BaseAction {
    type: string;
    payload: any;
}