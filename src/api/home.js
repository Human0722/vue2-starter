import HttpRequest from './axios'

export default {
    sendHi() {
        HttpRequest.request({
            url: 'text'
        });
    }
}
