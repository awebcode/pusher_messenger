import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
  appId: "1742366",
  key: "a87a9dfa5afeae825cf0",
  secret: "89326aae9c665ee238b1",
  cluster: "ap2",
  useTLS: true,
});

export const pusherClient = new PusherClient("a87a9dfa5afeae825cf0", {
  channelAuthorization: {
    endpoint: "/api/pusher/auth",
    transport: "ajax",
  },
  cluster: "ap2",
});
